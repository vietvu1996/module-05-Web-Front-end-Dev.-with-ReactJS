import React from "react";
import { useLocation } from "react-router-dom";

function EmployeeDetail() {
  const { state } = useLocation();

  return (
    <div>
      <h1>Employee Detail</h1>

      <p>Id: {state.employee.id}</p>
      <p>Name: {state.employee.name}</p>
      <p>Age: {state.employee.age}</p>
    </div>
  );
}

export default EmployeeDetail;
