import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaLaptopCode, FaPaintBrush } from "react-icons/fa";

const JobDetail = () => {
  const { id } = useParams(); // 🔥 yaha id milegi
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://naukari-bakend.vercel.app/job/detail/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  const roleIconMap = {
    "Frontend Developer": FaReact,
    "Backend Developer": FaNodeJs,
    "Machine learning": FaLaptopCode,
    "UI/UX Designer": FaPaintBrush,
  };

  if (!data) return <h2>Loading...</h2>;

  if (!data) return <h2>Loading...</h2>;

  const IconComponent = roleIconMap[data.role] || FaLaptopCode;

  return (
    <div style={{ padding: "40px 80px", maxWidth: "900px", margin: "auto" }}>
      {/* TOP CARD */}
      <div
        style={{
          padding: "30px",
          borderRadius: "18px",
          backgroundColor: "#ffffff",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          marginBottom: "30px",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <div style={{ fontSize: "40px", marginRight: "20px" }}>
            <IconComponent />
          </div>

          <div>
            <h2 style={{ margin: 0 }}>{data.jobName}</h2>

            <p style={{ margin: "6px 0", fontSize: "16px", color: "#444" }}>
              🏢 {data.companyName}
            </p>

            <p style={{ margin: "6px 0", color: "#666" }}>
              📍 {data.location} • 🕒 {data.exp} • 💼 {data.jobType}
            </p>

            <div
              style={{
                padding: "8px 14px",
                backgroundColor: "#E9F7F1",
                color: "#1f9d55",
                borderRadius: "20px",
                fontSize: "16px",
                fontWeight: "600",
                width: "fit-content",
                marginTop: "10px",
              }}
            >
              ₹{data.salary} LPA
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div style={{ marginBottom: "25px" }}>
          <h3>Description</h3>
          <p style={{ color: "#555" }}>{data.description}</p>
        </div>

        {/* SKILLS */}
        <div style={{ marginBottom: "25px" }}>
          <h3>Skills Required</h3>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {data.skills?.map((skill, index) => (
              <span
                key={index}
                style={{
                  padding: "6px 12px",
                  backgroundColor: "#e6f0ff",
                  borderRadius: "20px",
                  fontSize: "13px",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* TAGS */}
        <div>
          <h3>Tags</h3>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {data.tags?.map((tag, index) => (
              <span
                key={index}
                style={{
                  padding: "6px 12px",
                  backgroundColor: "#f2f3fb",
                  borderRadius: "20px",
                  fontSize: "13px",
                }}
              >
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
