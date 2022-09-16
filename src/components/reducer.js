export const initialState = {
  employees: [
    {
      id: 1024,
      name: "Deepak",
      email: "deepak@gmail.com",
      phone: 9998877788,
      address: "New Delhi",
      pincode: 110044,
      department: "IT",
    },
    {
      id: 1025,
      name: "Sam",
      email: "sam@gmail.com",
      phone: 9517532486,
      address: "Faridabad",
      pincode: 110044,
      department: "Support",
    },
    {
      id: 1026,
      name: "Vinod",
      email: "vinod@gmail.com",
      phone: 8547126395,
      address: "Indore",
      pincode: 110044,
      department: "Operations",
    },
    {
      id: 1027,
      name: "Raghav",
      email: "raghav@gmail.com",
      phone: 7854263950,
      address: "Jaipur",
      pincode: 110044,
      department: "Operations",
    },
  ],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_LIST":
      return {
        ...state,
        employees: [...state.employees, action.item],
      };

    case "DELETE_FROM_LIST":
      const newEmployees = state.employees.filter(
        (employee) => employee.id !== action.id
      );

      return {
        ...state,
        employees: newEmployees,
      };

    default:
      return state;
  }
};

export default reducer;
