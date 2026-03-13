import React, { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import "./Admin.css";

const Admin = () => {
  const jobSchema = Yup.object({
    jobName: Yup.string().required("Job name required"),
    companyName: Yup.string().required("Company name required"),
    role: Yup.string().required("Role required"),
    jobType: Yup.string().required("Job type required"),
    exp: Yup.string().required("Experience required"),
    salary: Yup.number().required("Salary required"),
    location: Yup.string().required("Location required"),
    description: Yup.string().required("Description required"),
  });

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

    const formData = {
      jobName,
      exp,
      salary,
      location: location.trim().toLowerCase(),
      role,
      jobType,
      description,
      companyName,
      skills: skills.split(" "),
      tags: tags.split(" "),
    };

    try {
      await jobSchema.validate(formData);

      setLoading(true);

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/job/create`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      if (response.status === 200) {
        alert("Job Created Successfully");
      }
    } catch (error) {
      if (error.name === "ValidationError") {
        alert(error.message);
      } else {
        alert("Error creating job");
      }
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
    <div className="admin-container">
      <div className="admin-card">
        <h1>Create Job</h1>

        <form onSubmit={handleSubmit} className="admin-form">
          <input
            className="admin-input"
            value={jobName}
            placeholder="Enter job name"
            onChange={(e) => setJobName(e.target.value)}
          />

          <input
            className="admin-input"
            value={companyName}
            placeholder="Enter company name"
            onChange={(e) => setCompanyName(e.target.value)}
          />

          <select
            className="admin-input"
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
            className="admin-input"
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
            className="admin-input"
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
            className="admin-input"
            type="number"
            value={salary}
            placeholder="Salary"
            onChange={(e) => setSalary(e.target.value)}
          />

          <input
            className="admin-input"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />

          <textarea
            className="admin-input admin-textarea"
            value={description}
            placeholder="Job Description"
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            className="admin-input"
            value={skills}
            placeholder="Skills (space separated)"
            onChange={(e) => setSkills(e.target.value)}
          />

          <input
            className="admin-input"
            value={tags}
            placeholder="Enter tags"
            onChange={(e) => setTags(e.target.value)}
          />

          <button className="admin-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
