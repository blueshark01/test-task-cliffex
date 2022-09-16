import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
// import { useStateValue } from "./StateProvider";

const Login = () => {
  const history = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  // const [{ isAuthenticated }, dispatch] = useStateValue();

  const handleLogin = (e) => {
    e.preventDefault();
    if (userId === "admin@email.com" && password === "Admin123") {
      alert("Login Successful");
      // dispatch({
      //   type: "SET_AUTHENTICATED",
      //   isAuthenticated: true,
      // });
      history("/dashboard", { replace: true });
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1>Login</h1>
        <form>
          <h5>User Id</h5>
          <input
            value={userId}
            type="text"
            onChange={(e) => setUserId(e.target.value)}
          />
          <h5>Password</h5>
          <input
            value={password}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button onClick={handleLogin} className="login__loginBtn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
