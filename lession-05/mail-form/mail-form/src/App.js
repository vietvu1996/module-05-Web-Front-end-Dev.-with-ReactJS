import "./App.css";
import React, { useState } from "react";
import { Formik } from "formik";

export default function App() {
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  const [form, setForm] = useState({});

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleValidate = () => {
    let errors = {};

    if (!form.email) {
      errors.email = "Required";
    }

    if (form.email && !REGEX.email.test(form.email)) {
      errors.email = "Invalid address";
    }

    if (!form.title) {
      errors.title = "Required";
    }

    if (!form.message) {
      errors.message = "Required";
    }

    return errors;
  };

  const handleSubmit = () => {
    alert("Sent successfully!!!");
  };

  return (
    <>
      <h1>Mail Form</h1>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div
              className={`custom-input ${
                errors.email ? "custom-input-error" : ""
              }`}
            >
              <label>To</label>
              <input
                type="text"
                name="email"
                value={form.email || ""}
                onChange={handleChange}
              />
              <p className="errors">{errors.email}</p>
            </div>

            <div
              className={`custom-input ${
                errors.title ? "custom-input-error" : ""
              }`}
            >
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={form.title || ""}
                onChange={handleChange}
              />
              <p className="errors">{errors.title}</p>
            </div>

            <div
              className={`custom-input ${
                errors.message ? "custom-input-error" : ""
              }`}
            >
              <label>Message</label>
              <textarea
                name="message"
                value={form.message || ""}
                onChange={handleChange}
              ></textarea>
              <p className="errors">{errors.message}</p>
            </div>

            <div>
              <input type="file"></input>
            </div>

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </>
  );
}
