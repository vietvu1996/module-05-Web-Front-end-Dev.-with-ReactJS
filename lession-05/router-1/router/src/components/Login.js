import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleLogin = () => {
    if (form.email === "admin@gmail.com" && form.password === "letmein") {
      navigate("/home", { state: { email: form.email } });
    } else {
      alert("Invalid email or password");
    }
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form>
        <label>Email</label>
        <input
          type="email"
          value={form.email || ""}
          name="email"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={form.password || ""}
          onChange={handleChange}
        />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default Login;
