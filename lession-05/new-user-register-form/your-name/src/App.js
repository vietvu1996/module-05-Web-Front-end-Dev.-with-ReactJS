import "./App.css";
import React, { useState } from "react";

export default function App() {
  const [form, setForm] = useState({});

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    const isValid =
      form.username && form.email && form.password && form.confirmPassword;
    alert(
      isValid ? "Đăng nhập thành công !!! " : "Điền vào tất cả các trường trống"
    );
  };

  return (
    <div>
      <h1>Sign up</h1>
      <form>
        <div className="custom-input">
          <label>Username</label>
          <input
            name="username"
            value={form.username || ""}
            onChange={handleChange}
          />
        </div>

        <div className="custom-input">
          <label>Email</label>
          <input
            name="email"
            value={form.email || ""}
            onChange={handleChange}
          />
        </div>

        <div className="custom-input">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password || ""}
            onChange={handleChange}
          />
        </div>

        <div className="custom-input">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword || ""}
            onChange={handleChange}
          />
        </div>

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
