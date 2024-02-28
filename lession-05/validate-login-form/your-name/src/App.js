import "./App.css";
import React, { useState } from "react";

export default function App() {
  const message_error = {
    email: "Email error",
    password: "Password error",
  };

  const regex = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/,
  };

  const [form, setForm] = useState({});

  const handleChange = (event) => {
    let error = regex[event.target.name].test(event.target.value)
      ? ""
      : message_error[event.target.name];

    setForm({
      ...form,
      [event.target.name]: { value: event.target.value, error: error },
    });
  };

  const handleSubmit = () => {
    let isFilled =
      form.email && form.email.value && form.password && form.password.value;

    let isError = isFilled && (form.email.error || form.password.error);

    if (isFilled && !isError) {
      alert("Chúc mừng thằng khốn đã đăng kí thành công !!!");
    } else {
      alert("Điền đầy đủ thông tin vào đi cu !!!");
    }
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form>
        <div
          className={`custom-input ${
            form.email && form.email.error && "custom-input-error"
          }`}
        >
          <label>Email</label>
          <input
            name="email"
            value={(form.email && form.email.value) || ""}
            onChange={handleChange}
          />
          {form.email && form.email.error && <p className="error">Sai email</p>}
        </div>

        <div
          className={`custom-input ${
            form.password && form.password.error && "custom-input-error"
          }`}
        >
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={(form.password && form.password.value) || ""}
            onChange={handleChange}
          />
          {form.password && form.password.error && (
            <p className="error">Password error</p>
          )}
        </div>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
