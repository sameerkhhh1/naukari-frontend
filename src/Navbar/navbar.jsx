import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
const Navbar = () => {
  return (
    <div
      style={{
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        height: "60px",
        display: "flex",

        justifyContent: "space-around",
        // alignItems: "center",
        width: "1630px",
        borderRadius: "0px 10px 50px 0px ",
      }}
    >
      <div
        style={{
          width: "65%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <img
          style={{ height: "50px", width: "120px", objectFit: "cover" }}
          src="https://imgs.search.brave.com/USY48gQD8U6dBflqpUVoX3ReGIjDkMKzzT8knSsyQ-E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzYxLzEvbmF1a3Jp/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTYxNjQ1/Ny5wbmc"
          alt="naukari-logo"
        ></img>
        <Link style={{ textDecoration: "none", fontSize: "20px" }} to={"/"}>
          Signup
        </Link>
        <Link
          style={{ textDecoration: "none", fontSize: "20px" }}
          to={"/login"}
        >
          Login
        </Link>

        <Link to={"/jobs"} style={{ textDecoration: "none", fontSize: "20px" }}>
          Jobs
        </Link>
        <Link
          to={"/admin"}
          style={{ textDecoration: "none", fontSize: "20px" }}
        >
          Admin
        </Link>
        <Link
          to={"/apply"}
          style={{ textDecoration: "none", fontSize: "20px" }}
        >
          Applied
        </Link>
      </div>
      <div
        style={{
          width: "30%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <IoIosSearch size={35} />
        <FaBell size={30} />

        <FaUserCircle size={35} />
        <Link
          style={{
            textDecoration: "none",
            fontSize: "18px",
            border: "1px solid blue",
            backgroundColor: "#0156C7",
            color: "white",
            width: "100px",
            height: "30px",
            textAlign: "center",
            borderRadius: "8px",
          }}
          to={"/logout"}
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
