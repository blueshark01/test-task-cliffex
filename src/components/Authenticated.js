import React from "react";
import { useStateValue } from "./StateProvider";
import { Navigate } from "react-router-dom";

const Authenticated = (props) => {
  const [{ isAuthenticated }, dispatch] = useStateValue();

  if (isAuthenticated) {
    return props.children;
  } else if (!isAuthenticated) {
    return <Navigate to="login" replace={true} />;
  }
};

export default Authenticated;
