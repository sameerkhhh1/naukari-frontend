import React, { useEffect, useState } from "react";
import "./Dashboard.css";

import { VscGitStashApply } from "react-icons/vsc";
import { IoIosStar } from "react-icons/io";
import { FaUserTie, FaUserCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLocationOutline } from "react-icons/io5";

import Table from "./table";

const Dashboard = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-user">
        <FaUserCircle size={55} />
        <h3>Welcome, {username}</h3>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <span>Applied</span>

          <div className="stat-row">
            <VscGitStashApply size={30} color="green" />
            <span>12</span>
          </div>
        </div>

        <div className="stat-card">
          <span>Shortlisted</span>

          <div className="stat-row">
            <IoIosStar size={30} color="#F7B222" />
            <span>5</span>
          </div>
        </div>

        <div className="stat-card">
          <span>Interviews</span>

          <div className="stat-row">
            <FaUserTie size={30} color="#0156C7" />
            <span>2</span>
          </div>
        </div>
      </div>

      <div className="recommended">
        <h2>Recommended Jobs</h2>

        <div className="job-item">
          <FaUserCircle size={60} />

          <div className="job-info">
            <span className="job-title">Product Manager</span>

            <div className="job-meta">
              <div className="meta">
                <FcGoogle />
                <p>Google</p>
              </div>

              <div className="meta">
                <IoLocationOutline />
                <p>Mumbai</p>
              </div>
            </div>
          </div>

          <button className="apply-btn">Apply</button>
        </div>
      </div>

      <div className="applications">
        <h2>My Applications</h2>

        <div className="applications-header">
          <span>Applied</span>
          <span>Shortlisted</span>
          <span>Interviews</span>
        </div>

        <hr />

        <Table />

        <button className="view-btn">View All Applications</button>
      </div>
    </div>
  );
};

export default Dashboard;
