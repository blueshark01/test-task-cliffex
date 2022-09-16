import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./addEmployee.css";
import { useStateValue } from "./StateProvider";

const AddEmployee = () => {
  const history = useNavigate();
  const [{ employees }, dispatch] = useStateValue();

  const [employeeData, setEmployeeData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
    department: "",
  });
  const [employeeErrors, setEmployeeErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const addEmployeeToList = () => {
    // Dispatch(Send the item to data layer)
    dispatch({
      type: "ADD_TO_LIST",
      item: {
        id: employeeData.id,
        name: employeeData.name,
        email: employeeData.email,
        phone: employeeData.phone,
        address: employeeData.address,
        pincode: employeeData.pincode,
        department: employeeData.department,
      },
    });
  };

  const handleChange = (e) => {
    setEmployeeData((prevItems) => {
      return { ...prevItems, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    if (Object.keys(employeeErrors).length === 0 && isValid) {
      addEmployeeToList();
      history("/dashboard", { replace: true });
    }
  }, [employeeErrors]);

  const handleSubmitClick = (e) => {
    e.preventDefault();
    setEmployeeErrors(validate(employeeData));
    setIsValid(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.id) {
      errors.id = "Employee ID is required";
    }

    if (!values.name) {
      errors.name = "Employee Name is required";
    }

    if (!values.email) {
      errors.email = "Employee Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid Email Address";
    }

    if (!values.phone) {
      errors.phone = "Employee Phone Number is required";
    } else if (values.phone.length < 10) {
      errors.phone = "Phone Number is less than 10 digit";
    } else if (values.phone.length > 10) {
      errors.phone = "Phone Number is more than 10 digit";
    }

    if (!values.address) {
      errors.address = "Employee Address is required";
    }

    if (!values.pincode) {
      errors.pincode = "Employee Pincode is required";
    } else if (values.pincode.length !== 6) {
      errors.pincode = "Employee Pincode Should be of 6 digit";
    }

    if (!values.department) {
      errors.department = "Employee Department is required";
    }

    return errors;
  };

  return (
    <div className="addEmployee">
      <div className="addEmployee__container">
        <h1>Add New Employee Data</h1>
        <form>
          <h5>Employee ID (number) </h5>
          <input
            name="id"
            type="number"
            value={employeeData.id}
            onChange={handleChange}
          />
          <small className="addEmployee__errorMsg">{employeeErrors.id}</small>

          <h5>Name</h5>
          <input
            name="name"
            type="text"
            value={employeeData.name}
            onChange={handleChange}
          />
          <small className="addEmployee__errorMsg">{employeeErrors.name}</small>

          <h5>Email</h5>
          <input
            name="email"
            type="email"
            onChange={handleChange}
            value={employeeData.email}
          />
          <small className="addEmployee__errorMsg">
            {employeeErrors.email}
          </small>

          <h5>Phone Number</h5>
          <input
            name="phone"
            type="number"
            onChange={handleChange}
            value={employeeData.phone}
          />
          <small className="addEmployee__errorMsg">
            {employeeErrors.phone}
          </small>

          <h5>Address</h5>
          <input
            name="address"
            type="text"
            onChange={handleChange}
            value={employeeData.address}
          />
          <small className="addEmployee__errorMsg">
            {employeeErrors.address}
          </small>

          <h5>Pincode</h5>
          <input
            name="pincode"
            type="number"
            onChange={handleChange}
            value={employeeData.pincode}
          />
          <small className="addEmployee__errorMsg">
            {employeeErrors.pincode}
          </small>

          <h5>Department</h5>
          <input
            name="department"
            type="text"
            onChange={handleChange}
            value={employeeData.department}
          />
          <small className="addEmployee__errorMsg">
            {employeeErrors.department}
          </small>

          <button onClick={handleSubmitClick} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
