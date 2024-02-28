import "./App.css";
import React, { useState } from "react";
import { Formik } from "formik";

export default function App() {
  const regex = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  const [form, setForm] = useState({});

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleValidate = () => {
    const error = {};

    if (!form.email || !form.email.value) {
      error.email = "Required";
    } else if (!regex.email.test(form.email)) {
      error.email = "Invalid email address";
    }

    if (!form.password && !form.password.value) {
      error.password = "Required";
    }
    return error;
  };

  const handleSubmit = () => {
    alert("Login thành công !!!");
  };

  return (
    <div>
      <h1>Login </h1>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ error, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div
              className={`custom-input ${error.email} ?  "custom-input-error" : ""}`}
            >
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email || ""}
                onChange={handleChange}
              />
              <p className="error">{error.email}</p>
            </div>

            <div
              className={`custom-input ${error.password} ? "custom-input-error" : ""}`}
            >
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={form.password || ""}
                onChange={handleChange}
              />
              <p className="error">{error.password}</p>
            </div>
            <button type="button">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}
