import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { FaReact, FaNodeJs, FaLaptopCode, FaPaintBrush } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import Dashboard from "./dashboard";
const roleIconMap = {
  "Frontend Developer": FaReact,
  "Backend Developer": FaNodeJs,
  "Machine learning": FaLaptopCode,
  "UI/UX Designer": FaPaintBrush,
};
const Jobs = () => {
  let [loading, setLoading] = useState(false);
  let [data, setData] = useState([]);
  const [salary, setSalary] = useState(20);
  const [selectedExp, setSelectedExp] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [selectedSearch, setSelectedSearch] = useState("");

  const navigate = useNavigate();
  const render = useCallback(async () => {
    try {
      setLoading(true);

      let responce = await axios.get(
        "https://naukari-bakend.vercel.app/job/all",
        {
          params: {
            exp: selectedExp,
            sort: selectedSort,
            location: selectedLocation.join(","),
            type: selectedType.join(","),
            search: selectedSearch,
            salary: salary,
          },
        },
      );

      if (responce.status === 200) {
        setLoading(false);
        setData(responce.data);
        console.log(responce);
      }
    } catch (error) {
      setLoading(false);

      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [setLoading, setData]);
  // console.log(selectedExp, "expppppp");
  useEffect(() => {
    render();
  }, [selectedExp, selectedSort, render]);

  const handleApply = async (id) => {
    try {
      setLoading(true);
      await axios.post(`https://naukari-bakend.vercel.app/job/apply/${id}`);
      setData(data.filter((el) => el._id !== id));
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
    <div style={{ display: "flex" }}>
      <div
        style={{
          // border: "1px solid black",
          width: "1400px",
          height: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // // justifyContent: "space-between",
            // alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "50px",
              marginTop: "20px",
              fontWeight: "900px",
              fontFamily: "system-ui",
              marginLeft: "220px",
            }}
          >
            Find Your
            <span style={{ color: "#0156C7" }}> Dream Job</span>
          </span>
          <span
            style={{
              fontSize: "25px",
              marginTop: "10px",
              marginLeft: "220px",
              marginBottom: "20px",
            }}
          >
            Top companies are hiring. Apply now!
          </span>
          <div>
            <input
              style={{
                width: "900px",
                height: "30px",
                padding: "10px 10px 10px 35px",
                marginLeft: "92px",
                fontSize: "20px",
                borderRadius: "10px 0px 0px 10px",
                outline: "none",
                // border: "none",
                border: "1px solid #c7c6c6d4",
              }}
              value={selectedSearch}
              onChange={(e) => setSelectedSearch(e.target.value)}
              placeholder="Job Title, Skills"
            ></input>
            <button
              style={{
                border: "none",
                outline: "none",
                cursor: "pointer",
                width: "150px",
                padding: "9px",
                height: "52px",
                color: "white",
                backgroundColor: "#0156C7",
                fontSize: "20px",
                // borderRadius: "10px",
                borderRadius: "0px 10px 10px 0px",
              }}
              onClick={render}
            >
              Search Jobs
            </button>
          </div>
          <div
            style={{
              // border: "1px solid black",
              width: "800px",
              marginLeft: "100px",
              height: "60px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "20px" }}>Popular :</span>
            <button
              style={{
                fontSize: "20px",
                width: "110px",
                height: "35px",
                padding: "5px",
                border: "none",
                backgroundColor: "#F2F3FB",
                borderRadius: "5px",
              }}
            >
              Frontend
            </button>
            <button
              style={{
                fontSize: "20px",
                width: "110px",
                height: "35px",
                padding: "5px",
                border: "none",
                backgroundColor: "#F2F3FB",
                borderRadius: "5px",
              }}
            >
              Bakend
            </button>
            <button
              style={{
                fontSize: "20px",
                width: "110px",
                height: "35px",
                padding: "5px",
                border: "none",
                backgroundColor: "#F2F3FB",
                borderRadius: "5px",
              }}
            >
              Marketing
            </button>
            <button
              style={{
                fontSize: "20px",
                width: "110px",
                height: "35px",
                padding: "5px",
                border: "none",
                backgroundColor: "#F2F3FB",
                borderRadius: "5px",
              }}
            >
              Banking
            </button>
            <button
              style={{
                fontSize: "20px",
                width: "110px",
                height: "35px",
                padding: "5px",
                border: "none",
                backgroundColor: "#F2F3FB",
                borderRadius: "5px",
              }}
            >
              Designer
            </button>
          </div>
        </div>
        <div
          style={{
            height: "90vh",
            width: "1377px",
            display: "flex",
            margin: "20px 0px 0px 20px",
            // border: "2px solid red",
          }}
        >
          <div
            style={{
              // border: "2px solid yellow",
              width: "300px",
              height: "100%",
            }}
          >
            <div
              style={{
                marginTop: "10px",
                // border: "1px solid black",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <span style={{ fontSize: "25px", marginLeft: "18px" }}>
                Filters
              </span>
              <span style={{ fontSize: "25px", marginLeft: "18px" }}>
                Clear All
              </span>
            </div>
            <hr
              style={{
                border: "1px solid #F2F1F4",
                width: "80%",
                margin: "20px auto",
                height: "0px",
              }}
            ></hr>
            <span style={{ fontSize: "25px", marginLeft: "40px" }}>
              Location
            </span>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                // border: "2px solid blue",
                width: "250px",
                marginLeft: "34px",
                fontSize: "22px",
                marginTop: "10px",
              }}
            >
              <label>
                <input
                  checked={selectedLocation.includes("Delhi")}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedLocation([
                        ...selectedLocation,
                        e.target.value,
                      ]);
                    } else {
                      setSelectedLocation(
                        selectedLocation.filter(
                          (loc) => loc !== e.target.value,
                        ),
                      );
                    }
                  }}
                  value={"Delhi"}
                  style={{ height: "20px", width: "32px" }}
                  type="checkbox"
                ></input>
                Delhi (32)
              </label>
              <label>
                <input
                  checked={selectedLocation.includes("Noida")}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedLocation([
                        ...selectedLocation,
                        e.target.value,
                      ]);
                    } else {
                      setSelectedLocation(
                        selectedLocation.filter(
                          (loc) => loc !== e.target.value,
                        ),
                      );
                    }
                  }}
                  value={"Noida"}
                  style={{ height: "20px", width: "32px" }}
                  type="checkbox"
                ></input>
                Noida (20)
              </label>
              <label>
                <input
                  checked={selectedLocation.includes("Gurgaon")}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedLocation([
                        ...selectedLocation,
                        e.target.value,
                      ]);
                    } else {
                      setSelectedLocation(
                        selectedLocation.filter(
                          (loc) => loc !== e.target.value,
                        ),
                      );
                    }
                  }}
                  value={"Gurgaon"}
                  style={{ height: "20px", width: "32px" }}
                  type="checkbox"
                ></input>
                Gurgoan (15)
              </label>
              <label>
                <input
                  checked={selectedLocation.includes("Hyderabad")}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedLocation([
                        ...selectedLocation,
                        e.target.value,
                      ]);
                    } else {
                      setSelectedLocation(
                        selectedLocation.filter(
                          (loc) => loc !== e.target.value,
                        ),
                      );
                    }
                  }}
                  value={"Hyderabad"}
                  style={{ height: "20px", width: "32px" }}
                  type="checkbox"
                ></input>
                Hyderabad (18)
              </label>
              <label>
                <input
                  checked={selectedLocation.includes("Mumbai")}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedLocation([
                        ...selectedLocation,
                        e.target.value,
                      ]);
                    } else {
                      setSelectedLocation(
                        selectedLocation.filter(
                          (loc) => loc !== e.target.value,
                        ),
                      );
                    }
                  }}
                  value={"Mumbai"}
                  style={{ height: "20px", width: "32px" }}
                  type="checkbox"
                ></input>
                Mumbai (25)
              </label>
              <button
                style={{
                  border: "none",
                  cursor: "pointer",
                  padding: "12px",
                  backgroundColor: "#1e63d5",
                  color: "white",
                  fontSize: "16px", // 🔥 Bigger
                  borderRadius: "10px",
                  fontWeight: "600",
                  margin: "15px",
                }}
                onClick={render}
              >
                Apply Location
              </button>
            </div>
            <hr
              style={{
                border: "1px solid #F2F1F4",
                width: "80%",
                margin: "20px auto",
                height: "0px",
              }}
            ></hr>
            <span style={{ fontSize: "25px", marginLeft: "40px" }}>
              Experience
            </span>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
              }}
            >
              <button
                onClick={() => setSelectedExp("0-1 yr")}
                style={{
                  backgroundColor:
                    selectedExp === "0-1 yr" ? "#1e63d5" : "transparent",
                  color: selectedExp === "0-1 yr" ? "white" : "black",
                  border: "1px solid #d1ced6",
                  width: "100px",
                  height: "30px",
                  fontSize: "18px",
                  marginLeft: "40px",
                  marginTop: "10px",
                }}
              >
                0-1 yr
              </button>
              <button
                onClick={() => setSelectedExp("1-3 yrs")}
                style={{
                  backgroundColor:
                    selectedExp === "1-3 yrs" ? "#1e63d5" : "transparent",
                  color: selectedExp === "1-3 yrs" ? "white" : "black",
                  border: "1px solid #d1ced6",
                  width: "100px",
                  height: "30px",
                  fontSize: "18px",
                  marginTop: "10px",
                }}
              >
                1-3 yrs
              </button>
              <button
                onClick={() => setSelectedExp("3-5 yrs")}
                style={{
                  backgroundColor:
                    selectedExp === "3-5 yrs" ? "#1e63d5" : "transparent",
                  color: selectedExp === "3-5 yrs" ? "white" : "black",
                  border: "1px solid #d1ced6",
                  width: "100px",
                  height: "30px",
                  fontSize: "18px",
                  marginTop: "10px",
                  marginLeft: "40px",
                }}
              >
                3-5 yrs
              </button>
              <button
                onClick={() => setSelectedExp("5+ yrs")}
                style={{
                  backgroundColor:
                    selectedExp === "5+ yrs" ? "#1e63d5" : "transparent",
                  color: selectedExp === "5+ yrs" ? "white" : "black",
                  border: "1px solid #d1ced6",
                  width: "100px",
                  height: "30px",
                  fontSize: "18px",
                  marginTop: "10px",
                }}
              >
                5+ yrs
              </button>
            </div>
            <hr
              style={{
                border: "1px solid #F2F1F4",
                width: "80%",
                margin: "20px auto",
                height: "0px",
              }}
            ></hr>
            <span style={{ fontSize: "25px", marginLeft: "40px" }}>Salary</span>
            <div>
              <p
                style={{
                  fontSize: "25px",
                  margin: "10px 0px",
                  marginLeft: "25px",
                }}
              >
                ₹0 LPA - ₹{salary} LPA
              </p>

              <input
                style={{ marginLeft: "40px", width: "200px" }}
                type="range"
                min="0"
                max="50"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
              <button
                style={{
                  border: "none",
                  cursor: "pointer",
                  padding: "12px",
                  backgroundColor: "#1e63d5",
                  color: "white",
                  fontSize: "16px", // 🔥 Bigger
                  borderRadius: "10px",
                  fontWeight: "600",
                  margin: "10px 40px",
                }}
                onClick={render}
              >
                Apply Salary
              </button>
            </div>
            <hr
              style={{
                border: "1px solid #F2F1F4",
                width: "80%",
                margin: "20px auto",
                height: "0px",
              }}
            ></hr>
            <span style={{ fontSize: "25px", marginLeft: "40px" }}>
              Job Type
            </span>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                // border: "2px solid blue",
                width: "250px",
                marginLeft: "34px",
                fontSize: "22px",
                marginTop: "10px",
              }}
            >
              <label>
                <input
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedType([...selectedType, e.target.value]);
                    } else {
                      setSelectedType(
                        selectedType.filter((type) => type !== e.target.value),
                      );
                    }
                  }}
                  checked={selectedType.includes("Full Time")}
                  value={"Full Time"}
                  style={{ height: "20px", width: "32px" }}
                  type="checkbox"
                ></input>
                Full Time
              </label>
              <label>
                <input
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedType([...selectedType, e.target.value]);
                    } else {
                      setSelectedType(
                        selectedType.filter((type) => type !== e.target.value),
                      );
                    }
                  }}
                  checked={selectedType.includes("Part Time")}
                  value={"Part Time"}
                  style={{ height: "20px", width: "32px" }}
                  type="checkbox"
                ></input>
                Part Time
              </label>
              <label>
                <input
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedType([...selectedType, e.target.value]);
                    } else {
                      setSelectedType(
                        selectedType.filter((type) => type !== e.target.value),
                      );
                    }
                  }}
                  checked={selectedType.includes("Remote")}
                  value={"Remote"}
                  style={{ height: "20px", width: "32px" }}
                  type="checkbox"
                ></input>
                Remote
              </label>
              <label>
                <input
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedType([...selectedType, e.target.value]);
                    } else {
                      setSelectedType(
                        selectedType.filter((type) => type !== e.target.value),
                      );
                    }
                  }}
                  checked={selectedType.includes("Intership")}
                  value={"Intership"}
                  style={{ height: "20px", width: "32px" }}
                  type="checkbox"
                ></input>
                Intership
              </label>
              <button
                style={{
                  border: "none",
                  cursor: "pointer",
                  padding: "12px",
                  backgroundColor: "#1e63d5",
                  color: "white",
                  fontSize: "16px", // 🔥 Bigger
                  borderRadius: "10px",
                  fontWeight: "600",
                  margin: "10px 10px 0px ",
                }}
                onClick={render}
              >
                Apply Type
              </button>
            </div>
          </div>
          <div>
            <div
              style={{
                // border: "4px solid black",
                height: "auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "40px", marginLeft: "18px" }}>
                Job Listings
              </span>
              <div>
                <span style={{ fontSize: "26px" }}>Sort by: </span>
                <select
                  onChange={(e) => setSelectedSort(e.target.value)}
                  style={{ fontSize: "22px", marginRight: "40px" }}
                  value={selectedSort}
                >
                  <option value={""}>Latest</option>
                  <option value={"HTL"}>HTL</option>
                  <option value={"LTH"}>LTH</option>
                </select>
              </div>
            </div>

            <div
              style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
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
                    onClick={() => navigate(`/job/${el._id}`)}
                    style={{
                      width: "300px",
                      height: "360px",
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
                      <div style={{ fontSize: "34px", marginRight: "14px" }}>
                        <IconComponent />
                      </div>

                      <div style={{ width: "210px" }}>
                        <h3
                          style={{
                            margin: 0,
                            fontSize: "20px", // 🔥 Bigger
                            fontWeight: "700",
                          }}
                        >
                          {el.jobName}
                        </h3>

                        <p
                          style={{
                            margin: "6px 0",
                            fontSize: "15px", // 🔥 Bigger
                            color: "#555",
                          }}
                        >
                          Tech Corp Pvt. Ltd.
                        </p>
                      </div>
                    </div>

                    {/* LOCATION + EXP */}
                    <div
                      style={{
                        fontSize: "15px", // 🔥 Bigger
                        color: "#666",
                      }}
                    >
                      📍 {el.location} • 🕒 {el.exp} 💼 {el.jobType}
                    </div>

                    {/* SALARY */}
                    <div
                      style={{
                        padding: "8px 14px",
                        backgroundColor: "#E9F7F1",
                        color: "#1f9d55",
                        borderRadius: "20px",
                        fontSize: "16px", // 🔥 Bigger
                        fontWeight: "600",
                        width: "fit-content",
                      }}
                    >
                      ₹{el.salary} LPA
                    </div>

                    {/* TAGS */}
                    <div
                      style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}
                    >
                      {el.tags?.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          style={{
                            padding: "6px 12px",
                            fontSize: "13px", // 🔥 Bigger
                            backgroundColor: "#f2f3fb",
                            borderRadius: "20px",
                          }}
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>

                    {/* BUTTON */}
                    <button
                      style={{
                        border: "none",
                        cursor: "pointer",
                        padding: "12px",
                        backgroundColor: "#1e63d5",
                        color: "white",
                        fontSize: "16px", // 🔥 Bigger
                        borderRadius: "10px",
                        fontWeight: "600",
                      }}
                      onClick={(e) => {
                        e.stopPropagation(); // 🔥 ye main cheez hai
                        handleApply(el._id);
                      }}
                    >
                      Apply Now
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Dashboard />
    </div>
  );
};

export default Jobs;
