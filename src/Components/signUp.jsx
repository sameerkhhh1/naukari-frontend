import React, { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import "./SignUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signupSchema = Yup.object({
    name: Yup.string().required("Name required"),

    email: Yup.string().email("Invalid email").required("Email required"),

    password: Yup.string()
      .min(6, "Password min 6 characters")
      .required("Password required"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, password };

    try {
      await signupSchema.validate(formData);

      setLoading(true);

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/signup`,
        formData,
      );

      if (response.status === 200) {
        alert("Signup successful");
      }
    } catch (error) {
      if (error.name === "ValidationError") {
        alert(error.message);
      } else {
        alert("Signup failed");
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h1 className="loading">Loading...</h1>;

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>SignUp</h1>

        <form onSubmit={handleSubmit}>
          <input
            className="signup-input"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="signup-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="signup-input"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="signup-btn" type="submit">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
