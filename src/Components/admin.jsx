import React, { useState } from "react";
import axios from "axios";

const Admin = () => {
  const inputStyle = {
    padding: "12px",
    width: "300px",
    marginBottom: "15px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  };

  const [jobName, setJobName] = useState("");
  const [exp, setExp] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("");
  const [jobType, setJobType] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [tags, setTags] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const iconArray = ["FaReact", "FaNodeJs", "FaLaptopCode", "FaPaintBrush"];

    // const randomIcon = iconArray[Math.floor(Math.random() * iconArray.length)];

    const formData = {
      jobName,
      exp,
      salary,
      location,
      role,
      jobType,
      description,
      companyName,
      skills: skills.split(" "),
      tags: tags.split(" "),
      //   icon: randomIcon,
    };

    try {
      setLoading(true);
      const response = await axios.post(
        "https://naukari-bakend.vercel.app/job/create",
        formData,
      );

      if (response.status === 200) {
        alert("Job Created Successfully");
      }
    } catch (error) {
      alert("Error creating job");
      console.log(error);
    } finally {
      setLoading(false);
      setJobName("");
      setExp("");
      setSalary("");
      setLocation("");
      setRole("");
      setJobType("");
      setDescription("");
      setSkills("");
      setTags("");
      setCompanyName("");
    }
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "420px",
          padding: "30px",
          borderRadius: "10px",
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h1>Create Job</h1>

        <form onSubmit={handleSubmit}>
          <input
            style={inputStyle}
            value={jobName}
            placeholder="Enter job name"
            onChange={(e) => setJobName(e.target.value)}
          />
          <input
            style={inputStyle}
            value={companyName}
            placeholder="Enter company name"
            onChange={(e) => setCompanyName(e.target.value)}
          />

          <select
            style={inputStyle}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>Full Stack Developer</option>
            <option>UI/UX Designer</option>
          </select>

          <select
            style={inputStyle}
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="">Select Job Type</option>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Remote</option>
            <option>Internship</option>
          </select>

          <select
            style={inputStyle}
            value={exp}
            onChange={(e) => setExp(e.target.value)}
          >
            <option value="">Select Exp</option>
            <option>0-1 yr</option>
            <option>1-3 yrs</option>
            <option>3-5 yrs</option>
            <option>5+ yrs</option>
          </select>

          <input
            style={inputStyle}
            type="number"
            value={salary}
            placeholder="Salary"
            maxLength={1}
            onChange={(e) => setSalary(e.target.value)}
          />

          <input
            style={inputStyle}
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />

          <textarea
            style={{ ...inputStyle, height: "70px" }}
            value={description}
            placeholder="Job Description"
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            style={inputStyle}
            value={skills}
            placeholder="Skills (space separated)"
            onChange={(e) => setSkills(e.target.value)}
          />
          <input
            style={inputStyle}
            value={tags}
            placeholder="Enter tags (space separated)"
            onChange={(e) => setTags(e.target.value)}
          />
          <button
            type="submit"
            style={{
              border: "none",
              cursor: "pointer",
              width: "130px",
              padding: "10px",
              color: "white",
              backgroundColor: "green",
              fontSize: "18px",
              borderRadius: "10px",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
