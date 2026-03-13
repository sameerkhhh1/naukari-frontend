import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { FaUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const role = localStorage.getItem("role");

  return (
    <div className="navbar">
      <div className="nav-left">
        <img
          className="logo"
          src="https://imgs.search.brave.com/USY48gQD8U6dBflqpUVoX3ReGIjDkMKzzT8knSsyQ-E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzYxLzEvbmF1a3Jp/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTYxNjQ1/Ny5wbmc"
          alt="logo"
        />

        <Link to="/">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/jobs">Jobs</Link>

        {role === "admin" && <Link to="/admin">Admin</Link>}

        <Link to="/apply">Applied</Link>
      </div>

      <div className="nav-right">
        <IoIosSearch size={35} />

        <FaBell size={30} />

        <FaUserCircle size={35} />

        <Link className="logout-btn" to="/logout">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
