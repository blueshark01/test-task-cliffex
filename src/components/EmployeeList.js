import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import Employee from "./Employee";
import "./employeeList.css";
import { useStateValue } from "./StateProvider";

const EmployeeList = () => {
  const history = useNavigate();

  const [{ employees }, dispatch] = useStateValue();

  const columns = [
    "Emp Id",
    "Name",
    "Email",
    "Phone",
    "Address",
    "Pincode",
    "Department",
    "Action",
  ];

  const deleteEmpRow = (id) => {
    dispatch({
      type: "DELETE_FROM_LIST",
      id: id,
    });
  };

  return (
    <div className="employeeList">
      <Button
        className="employeeList__addButton"
        onClick={(e) => history("/addEmployee")}
        variant="contained"
      >
        Add Employee
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {columns.map((item) => (
                <TableCell>{item}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <Employee
                id={employee.id}
                name={employee.name}
                email={employee.email}
                phone={employee.phone}
                address={employee.address}
                pincode={employee.pincode}
                department={employee.department}
                handleDelete={deleteEmpRow}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default EmployeeList;
