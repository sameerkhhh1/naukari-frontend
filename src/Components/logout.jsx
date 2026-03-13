import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css";

const Logout = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    const username = localStorage.getItem("username");
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
    <div className="logout-container">
      <h1>Hey {name}</h1>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
