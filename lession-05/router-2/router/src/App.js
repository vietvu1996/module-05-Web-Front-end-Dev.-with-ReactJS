import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employee from "./components/Employee";
import EmployeeDetail from "./components/EmployeeDetail";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/employees/list" element={<Employee />} />
          <Route path={`/employees/:id`} element={<EmployeeDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
