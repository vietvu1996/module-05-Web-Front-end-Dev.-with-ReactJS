import { React, useState } from "react";
import Header from "./Header";
import Row from "./Row";

function Students() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Vu Hoang Quoc Viet",
      age: 18,
      address: "Japan",
    },

    {
      id: 2,
      name: "Viet Quoc Hoang Vu",
      age: 20,
      address: "Vietnam",
    },
  ]);

  return (
    <table style={{ borderCollapse: "collapse", border: "1px solid #000000" }}>
      <Header />
      <Row students={students} />
    </table>
  );
}

export default Students;
