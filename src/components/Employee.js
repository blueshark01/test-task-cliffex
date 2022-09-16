import React from "react";
import "./employee.css";
import { DeleteForeverOutlined } from "@material-ui/icons";
import { IconButton, TableCell, TableRow } from "@material-ui/core";
import { useStateValue } from "./StateProvider";

const Employee = ({
  id,
  name,
  email,
  phone,
  address,
  pincode,
  department,
  handleDelete,
}) => {
  return (
    <TableRow key={id}>
      <TableCell align="left">{id}</TableCell>
      <TableCell align="left">{name}</TableCell>
      <TableCell align="left">{email}</TableCell>
      <TableCell align="left">{phone}</TableCell>
      <TableCell align="left">{address}</TableCell>
      <TableCell align="left">{pincode}</TableCell>
      <TableCell align="left">{department}</TableCell>
      <TableCell align="left">
        <IconButton>
          <DeleteForeverOutlined onClick={() => handleDelete(id)} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default Employee;
