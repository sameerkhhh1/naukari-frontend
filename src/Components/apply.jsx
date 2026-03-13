import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Apply.css";

import { FaReact, FaNodeJs, FaLaptopCode, FaPaintBrush } from "react-icons/fa";

const Apply = () => {
  let [loading, setLoading] = useState(false);
  let [data, setData] = useState([]);

  const roleIconMap = {
    "Frontend Developer": FaReact,
    "Backend Developer": FaNodeJs,
    "Machine learning": FaLaptopCode,
    "UI/UX Designer": FaPaintBrush,
  };

  const render = async () => {
    try {
      setLoading(true);
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/job/applied`,
      );

      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    render();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="apply-container">
      {data.map((el) => {
        const IconComponent = roleIconMap[el.role] || FaLaptopCode;

        return (
          <div key={el._id} className="job-card">
            {/* TOP */}
            <div className="job-top">
              <div className="job-icon">
                <IconComponent />
              </div>

              <div className="job-info">
                <h3 className="job-title">{el.jobName}</h3>

                <p className="job-company">
                  {el.companyName || "Tech Company"}
                </p>
              </div>
            </div>

            {/* LOCATION + EXP */}
            <div className="job-location">
              📍 {el.location} • 🕒 {el.exp} Yrs
            </div>

            {/* SALARY */}
            <div className="job-salary">₹{el.salary} LPA</div>

            {/* TAGS */}
            <div className="job-tags">
              {el.tags?.slice(0, 3).map((tag, index) => (
                <span key={index} className="tag">
                  {tag.trim().toUpperCase()}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Apply;
