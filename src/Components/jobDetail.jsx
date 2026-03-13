import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./JobDetail.css";

import { FaReact, FaNodeJs, FaLaptopCode, FaPaintBrush } from "react-icons/fa";

const JobDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/job/detail/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const roleIconMap = {
    "Frontend Developer": FaReact,
    "Backend Developer": FaNodeJs,
    "Machine learning": FaLaptopCode,
    "UI/UX Designer": FaPaintBrush,
  };

  if (!data) return <h2 className="loading">Loading...</h2>;

  const IconComponent = roleIconMap[data.role] || FaLaptopCode;

  return (
    <div className="jobdetail-container">
      <div className="jobdetail-card">
        <div className="jobdetail-header">
          <div className="jobdetail-icon">
            <IconComponent />
          </div>

          <div>
            <h2>{data.jobName}</h2>

            <p className="company">🏢 {data.companyName}</p>

            <p className="meta">
              📍 {data.location} • 🕒 {data.exp} • 💼 {data.jobType}
            </p>

            <div className="salary">₹{data.salary} LPA</div>
          </div>
        </div>

        <div className="section">
          <h3>Description</h3>
          <p>{data.description}</p>
        </div>

        <div className="section">
          <h3>Skills Required</h3>

          <div className="tags">
            {data.skills?.map((skill, index) => (
              <span key={index} className="skill">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="section">
          <h3>Tags</h3>

          <div className="tags">
            {data.tags?.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
