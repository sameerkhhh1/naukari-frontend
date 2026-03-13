import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import "../Components/Jobs.css";
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
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [salary, setSalary] = useState(20);
  const [selectedExp, setSelectedExp] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [selectedSearch, setSelectedSearch] = useState("");
  const [locations, setLocations] = useState([]);

  const navigate = useNavigate();

  const render = useCallback(async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/job/all`,
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

      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [
    salary,
    selectedExp,
    selectedLocation,
    selectedSearch,
    selectedSort,
    selectedType,
  ]);

  useEffect(() => {
    render();
  }, [selectedExp, selectedSort, render]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/job/locations`)
      .then((res) => setLocations(res.data));
  }, []);

  const handleApply = async (id) => {
    try {
      setLoading(true);

      await axios.post(`${process.env.REACT_APP_API_URL}/job/apply/${id}`);

      setData(data.filter((el) => el._id !== id));
    } catch (error) {
      alert("Apply failed");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="jobs-page">
      <div className="jobs-container">
        {/* HERO */}
        <div className="jobs-hero">
          <h1>
            Find Your <span>Dream Job</span>
          </h1>

          <p>Top companies are hiring. Apply now!</p>

          <div className="search-box">
            <input
              value={selectedSearch}
              onChange={(e) => setSelectedSearch(e.target.value)}
              placeholder="Job Title, Skills"
            />

            <button onClick={render}>Search Jobs</button>
          </div>
        </div>

        <div className="jobs-body">
          {/* FILTERS */}
          <div className="filters">
            <h3>Location</h3>

            {locations.slice(0, 5).map((loc) => (
              <label key={loc.location}>
                <input
                  type="checkbox"
                  value={loc.location}
                  checked={selectedLocation.includes(loc.location)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedLocation([...selectedLocation, loc.location]);
                    } else {
                      setSelectedLocation(
                        selectedLocation.filter((l) => l !== loc.location),
                      );
                    }
                  }}
                />
                {loc.location} ({loc.count})
              </label>
            ))}

            <button className="apply-filter" onClick={render}>
              Apply Location
            </button>

            <h3>Experience</h3>

            <div className="exp-grid">
              {["0-1 yr", "1-3 yrs", "3-5 yrs", "5+ yrs"].map((exp) => (
                <button
                  key={exp}
                  className={selectedExp === exp ? "exp-btn active" : "exp-btn"}
                  onClick={() => setSelectedExp(exp)}
                >
                  {exp}
                </button>
              ))}
            </div>

            <h3>Salary</h3>

            <p>₹0 - ₹{salary} LPA</p>

            <input
              type="range"
              min="0"
              max="50"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />

            <button className="apply-filter" onClick={render}>
              Apply Salary
            </button>

            <h3>Job Type</h3>

            {["Full Time", "Part Time", "Remote", "Internship"].map((type) => (
              <label key={type}>
                <input
                  type="checkbox"
                  value={type}
                  checked={selectedType.includes(type)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedType([...selectedType, type]);
                    } else {
                      setSelectedType(selectedType.filter((t) => t !== type));
                    }
                  }}
                />
                {type}
              </label>
            ))}

            <button className="apply-filter" onClick={render}>
              Apply Type
            </button>
          </div>

          {/* JOBS */}
          <div className="jobs-list">
            <div className="jobs-header">
              <span>Job Listings</span>

              <select
                className="jobs-select"
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
              >
                <option value="">Latest</option>
                <option value="HTL">High to Low</option>
                <option value="LTH">Low to High</option>
              </select>
            </div>

            <div className="jobs-grid">
              {data.map((el) => {
                const IconComponent = roleIconMap[el.role] || FaLaptopCode;

                return (
                  <div
                    key={el._id}
                    className="job-card"
                    onClick={() => navigate(`/job/${el._id}`)}
                  >
                    <div className="job-top">
                      <IconComponent className="job-icon" />

                      <div>
                        <h3>{el.jobName}</h3>
                        <p>Tech Corp Pvt. Ltd.</p>
                      </div>
                    </div>

                    <div className="job-meta">
                      📍 {el.location} • 🕒 {el.exp} • 💼 {el.jobType}
                    </div>

                    <div className="job-salary">₹{el.salary} LPA</div>

                    <button
                      className="apply-btn"
                      onClick={(e) => {
                        e.stopPropagation();
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
