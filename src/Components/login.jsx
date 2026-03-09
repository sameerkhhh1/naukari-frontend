import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = {
      email: email,
      password: password,
    };
    setLoading(true);
    let responce = await axios.post(
      "https://naukari-bakend.vercel.app/login",
      formData,
    );
    try {
      if (responce.status === 200) {
        alert("Login successfulyy");
        setLoading(false);
        console.log(responce);
        localStorage.setItem("username", responce.data.name);
        localStorage.setItem("role", responce.data.role);
        localStorage.setItem("token", responce.data.token);
        let role = localStorage.getItem("role");
        if (role == "admin") {
          navigate("/admin");
        } else {
          navigate("/home");
        }
      }
    } catch (error) {
      setLoading(false);
      alert("login failed");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <h1>Loading...</h1>;
  return (
    <div
      style={{
        height: "90vh",
        width: "97vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "420px",
          padding: "30px",
          borderRadius: "10px",
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          textAlign: "center",
          height: "300px",
        }}
      >
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            style={{
              padding: "12px",
              width: "300px",
              marginBottom: "15px",
              fontSize: "16px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            style={{
              padding: "12px",
              width: "300px",
              marginBottom: "15px",
              fontSize: "16px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            style={{
              border: "none",
              outline: "none",
              cursor: "pointer",
              width: "130px",
              padding: "10px",
              height: "40px",
              color: "white",
              backgroundColor: "green",
              fontSize: "18px",
              borderRadius: "10px",
            }}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
