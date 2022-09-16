import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import AddEmployee from "./components/AddEmployee";
import Authenticated from "./components/Authenticated";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="*" element={<h1>404 Not Found !</h1>}></Route>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/addEmployee" element={<AddEmployee />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
