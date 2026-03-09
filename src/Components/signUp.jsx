import React, { useState } from "react";
import axios from "axios";
const SignUp = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = {
      name: name,
      email: email,
      password: password,
    };

    try {
      setLoading(true);
      let responce = await axios.post(
        "https://naukari-bakend.vercel.app/auth/signUp",
        formData,
      );
      if (responce.status === 200) {
        alert("sign up successfulyy");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      alert("signUp failed");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <h1>Loading...</h1>;
  return (
    <div
      style={{
        // border: "2px solid black",
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
        <h1>SignUp</h1>
        <form onSubmit={handleSubmit}>
          <input
            style={{
              padding: "12px",
              marginBottom: "15px",
              fontSize: "16px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              width: "300px",
            }}
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            style={{
              padding: "12px",
              marginBottom: "15px",
              fontSize: "16px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              width: "300px",
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
          <br></br>
          <button
            type="submit"
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
          >
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
