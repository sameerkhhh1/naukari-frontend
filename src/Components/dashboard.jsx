import React, { useEffect, useState } from "react";

import { VscGitStashApply } from "react-icons/vsc";
import { IoIosStar } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLocationOutline } from "react-icons/io5";
import { FaAmazon } from "react-icons/fa";
import { SiTcs } from "react-icons/si";
import Table from "./table";

const Dashboard = () => {
  let [username, setUsername] = useState("");
  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  }, []);
  return (
    <div
      style={{
        // border: "1px solid red",
        width: "625px",
        padding: "30px",
        // marginLeft: "45px",
      }}
    >
      <div style={{ display: "flex" }}>
        <FaUserCircle size={55} style={{ marginTop: "12px" }} />
        <h3 style={{ margin: "25px 0px 0px 20px", fontSize: "24px" }}>
          Welcome, {username}
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          gap: "15px",
          // border: "1px solid black",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            height: "90px",
            width: "120px",
            textAlign: "center",
            fontSize: "20px",
            marginTop: "20px",
            borderRadius: "10px",
          }}
        >
          <span style={{ marginTop: "4px", padding: "5px" }}>Applied</span>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "80px",
              // justifyContent: "center",
              marginLeft: "10px",
            }}
          >
            <VscGitStashApply
              size={30}
              color="green"
              style={{ marginTop: "10px" }}
            />
            <span style={{ marginTop: "10px", fontSize: "25px" }}>12</span>
          </div>
        </div>
        <div
          style={{
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            height: "90px",
            width: "120px",
            textAlign: "center",
            fontSize: "20px",
            marginTop: "20px",
            borderRadius: "10px",
          }}
        >
          <span style={{ marginTop: "4px", padding: "5px" }}>Shortlisted</span>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "80px",
              // justifyContent: "center",
              marginLeft: "10px",
            }}
          >
            <IoIosStar
              size={30}
              color="#F7B222"
              style={{ marginTop: "10px" }}
            />
            <span style={{ marginTop: "10px", fontSize: "25px" }}>5</span>
          </div>
        </div>
        <div
          style={{
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            height: "90px",
            width: "120px",
            textAlign: "center",
            fontSize: "20px",
            marginTop: "20px",
            borderRadius: "10px",
          }}
        >
          <span style={{ marginTop: "4px", padding: "5px" }}>Interviews</span>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "80px",
              // justifyContent: "center",
              marginLeft: "10px",
            }}
          >
            <FaUserTie
              style={{ marginTop: "10px" }}
              size={30}
              color="#0156C7"
            />
            <span style={{ marginTop: "10px", fontSize: "25px" }}>2</span>
          </div>
        </div>
      </div>
      <div
        style={{
          height: "auto",
          width: "420px",
          // boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          padding: "10px",
          marginTop: "15px",
          borderRadius: "10px",
        }}
      >
        <span
          style={{
            fontSize: "25px",
            fontWeight: "700",
            marginLeft: "15px",
            marginTop: "10px",
          }}
        >
          Recommended Jobs
        </span>
        <div>
          <div
            style={{
              // border: "1px solid grey",
              display: "flex",
              alignItems: "center",
              height: "80px",
              padding: "10px",
              // flexDirection: "column",
            }}
          >
            <FaUserCircle size={60}></FaUserCircle>
            <div
              style={{
                // border: "2px solid red",
                height: "70%",
                width: "230px",
                marginLeft: "10px",
              }}
            >
              <span style={{ fontWeight: "700" }}>Product manager</span>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    // border: "1px solid pink",
                    width: "40%",
                    display: "flex",
                    // justifyContent: "center",
                    height: "33px",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <FcGoogle size={20} />
                  <p style={{ marginLeft: "5px" }}>Google</p>
                </div>
                <div
                  style={{
                    // border: "1px solid pink",
                    width: "40%",
                    display: "flex",
                    // justifyContent: "center",
                    height: "33px",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <IoLocationOutline size={20} />
                  <p style={{ marginLeft: "5px" }}>Mumbai</p>
                </div>
              </div>
            </div>
            <div
              style={{
                // border: "1px solid blue",
                height: "50px",
                width: "90px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  fontSize: "16px",
                  height: "30px",
                  border: "none",
                  backgroundColor: "#F0F5FD",
                  color: "#0057D0",
                  fontWeight: "700",
                  width: "80px",
                  borderRadius: "5px",
                }}
              >
                Apply
              </button>
            </div>
          </div>
          <div
            style={{
              // border: "1px solid grey",
              display: "flex",
              alignItems: "center",
              height: "80px",
              padding: "10px",
              // flexDirection: "column",
            }}
          >
            <FaUserCircle size={60}></FaUserCircle>
            <div
              style={{
                // border: "2px solid red",
                height: "70%",
                width: "230px",
                marginLeft: "10px",
              }}
            >
              <span style={{ fontWeight: "700" }}>HR Executive</span>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    // border: "1px solid pink",
                    width: "40%",
                    display: "flex",
                    // justifyContent: "center",
                    height: "33px",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <SiTcs size={20} />
                  <p style={{ marginLeft: "5px" }}>TCS</p>
                </div>
                <div
                  style={{
                    // border: "1px solid pink",
                    width: "40%",
                    display: "flex",
                    // justifyContent: "center",
                    height: "33px",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <IoLocationOutline size={20} />
                  <p style={{ marginLeft: "5px" }}>patna</p>
                </div>
              </div>
            </div>
            <div
              style={{
                // border: "1px solid blue",
                height: "50px",
                width: "90px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  fontSize: "16px",
                  height: "30px",
                  border: "none",
                  backgroundColor: "#F0F5FD",
                  color: "#0057D0",
                  fontWeight: "700",
                  width: "80px",
                  borderRadius: "5px",
                }}
              >
                Apply
              </button>
            </div>
          </div>
          <div
            style={{
              // border: "1px solid grey",
              display: "flex",
              alignItems: "center",
              height: "80px",
              padding: "10px",
              // flexDirection: "column",
            }}
          >
            <FaUserCircle size={60}></FaUserCircle>
            <div
              style={{
                // border: "2px solid red",
                height: "70%",
                width: "230px",
                marginLeft: "10px",
              }}
            >
              <span style={{ fontWeight: "700" }}>DevOps Engineer</span>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    // border: "1px solid pink",
                    width: "40%",
                    display: "flex",
                    // justifyContent: "center",
                    height: "33px",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <FaAmazon size={20} />
                  <p style={{ marginLeft: "5px" }}>Amazon</p>
                </div>
                <div
                  style={{
                    // border: "1px solid pink",
                    width: "40%",
                    display: "flex",
                    // justifyContent: "center",
                    height: "33px",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <IoLocationOutline size={20} />
                  <p style={{ marginLeft: "5px" }}>Delhi</p>
                </div>
              </div>
            </div>
            <div
              style={{
                // border: "1px solid blue",
                height: "50px",
                width: "90px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  fontSize: "16px",
                  height: "30px",
                  border: "none",
                  backgroundColor: "#F0F5FD",
                  color: "#0057D0",
                  fontWeight: "700",
                  width: "80px",
                  borderRadius: "5px",
                }}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          height: "auto",
          width: "420px",
          borderRadius: "10px",
          padding: "10px",
          marginTop: "10px",
        }}
      >
        <h2 style={{ margin: "10px 0px 15px 5px" }}>My Applications</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            // boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            backgroundColor: "",
            padding: "10px",
            fontSize: "20px",
            fontWeight: "700",
          }}
        >
          <span>Applied</span>
          <span>Shortlisted</span>
          <span>Interviews</span>
        </div>
        <hr
          style={{
            border: "1px solid #F2F1F4",
            width: "80%",
            // margin: "20px auto",
            height: "0px",
            margin: "3px 0px 0px 35px",
          }}
        ></hr>
        <Table />
        <div
          style={{
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          <button
            style={{
              border: "#ffffffd2",
              width: "250px",
              height: "35px",
              padding: "10px",
              borderRadius: "7px",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            View All Applications
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
