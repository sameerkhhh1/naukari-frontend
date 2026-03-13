import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const loginSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email required"),

    password: Yup.string()
      .min(5, "Min 5 characters")
      .required("Password required"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await loginSchema.validate({ email, password });

      setLoading(true);

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,

        { email, password },
      );

      alert("Login Successful");

      localStorage.setItem("username", response.data.name);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("token", response.data.token);

      if (response.data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <input
            className="login-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="login-input"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-btn" type="submit">
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
