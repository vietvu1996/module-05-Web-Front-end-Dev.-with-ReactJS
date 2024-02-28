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

  const handleValidate = (value) => {
    const errors = {};

    if (!value.name) {
      errors.name = "Required";
    }

    if (!value.email) {
      errors.email = "Required";
    } else if (!regex.email.test(value.email)) {
      errors.email = "Invalid email address";
    }

    if (!value.phone) {
      errors.phone = "Required";
    }
    return errors;
  };

  const handleSubmit = () => {
    alert("Add contact successfully!!!");
  };

  return (
    <>
      <h1>Contact Form</h1>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit, values, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <div
              className={`custom-input ${
                errors.name ? "custom-input-error" : ""
              }`}
            >
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={values.name || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.name}</p>
            </div>

            <div
              className={`custom-input ${
                errors.email ? "custom-input-error" : ""
              }`}
            >
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={values.email || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.email}</p>
            </div>

            <div
              className={`custom-input ${
                errors.phone ? "custom-input-error" : ""
              }`}
            >
              <label>Phone</label>
              <input
                name="phone"
                value={values.phone || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.phone}</p>
            </div>

            <div>
              <label>Message</label>
              <textarea></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </>
  );
}
