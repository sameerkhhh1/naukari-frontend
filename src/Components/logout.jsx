import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  let navigate = useNavigate();

  let [name, setName] = useState("");
  useEffect(() => {
    let username = localStorage.getItem("username");
    setName(username);
  }, []);
  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    alert("Logout Successfully");
    navigate("/login");
  }

  return (
    <div>
      <h1 style={{ fontSize: "50px" }}>Hey {name}</h1>
      <button
        style={{
          fontSize: "30px",
          height: "60px",
          border: "none",
          backgroundColor: "#fafafa",
          color: "#ed6060",
          fontWeight: "700",
          width: "140px",
          borderRadius: "5px",
        }}
        onClick={() => handleLogout()}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
