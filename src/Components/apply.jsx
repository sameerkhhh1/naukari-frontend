import React, { useEffect, useState } from "react";
import axios from "axios";

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
      let responce = await axios.get(
        "https://naukari-bakend.vercel.app/job/applied",
      );
      if (responce.status === 200) {
        setLoading(false);
        setData(responce.data);
        console.log(responce, "applyieddddd");
      }
    } catch (error) {
      setLoading(false);

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
    <div
      style={{
        width: "90%",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "30px",
        padding: "40px 80px",
        justifyItems: "center",
      }}
    >
      {data.map((el) => {
        const IconComponent = roleIconMap[el.role] || FaLaptopCode;

        return (
          <div
            key={el._id}
            style={{
              width: "300px",
              height: "300px",
              padding: "22px",
              borderRadius: "18px",
              backgroundColor: "#ffffff",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* TOP */}
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <div
                style={{
                  fontSize: "34px",
                  marginRight: "14px",
                  color: "#1e63d5",
                }}
              >
                <IconComponent />
              </div>

              <div style={{ width: "210px" }}>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  {el.jobName}
                </h3>

                {/* ✅ Company Name Added */}
                <p
                  style={{
                    margin: "6px 0",
                    fontSize: "15px",
                    color: "#555",
                    fontWeight: "500",
                  }}
                >
                  {el.companyName || "Tech Company"}
                </p>
              </div>
            </div>

            {/* LOCATION + EXP */}
            <div style={{ fontSize: "18px", color: "#666" }}>
              📍 {el.location} • 🕒 {el.exp} Yrs
            </div>

            {/* SALARY */}
            <div
              style={{
                padding: "8px 14px",
                backgroundColor: "#E9F7F1",
                color: "#1f9d55",
                borderRadius: "20px",
                fontSize: "16px",
                fontWeight: "600",
                width: "fit-content",
              }}
            >
              ₹{el.salary} LPA
            </div>

            {/* TAGS */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {el.tags?.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  style={{
                    padding: "6px 12px",
                    fontSize: "13px",
                    backgroundColor: "#f2f3fb",
                    borderRadius: "20px",
                  }}
                >
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
