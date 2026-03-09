import React from "react";

const Table = () => {
  return (
    <div
      style={{
        width: "auto",
        margin: "0px auto",
        padding: "10px",
        borderRadius: "10px",
        // boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        background: "#fff",
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ textAlign: "left", borderBottom: "1px solid #ddd" }}>
            <th>Job Role</th>
            <th>Company</th>
            <th>Status</th>
            <th>Applied On</th>
          </tr>
        </thead>

        <tbody>
          <tr style={{ borderBottom: "1px solid #eee" }}>
            <td>Frontend Developer</td>
            <td>Tech Corp</td>
            <td>
              <span
                style={{
                  background: "#f3e8ff",
                  color: "#9333ea",
                  padding: "4px 8px",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              >
                Pending
              </span>
            </td>
            <td>2 days ago</td>
          </tr>

          <tr style={{ borderBottom: "1px solid #eee" }}>
            <td>UI/UX Designer</td>
            <td>Design Studio</td>
            <td>
              <span
                style={{
                  background: "#dcfce7",
                  color: "#15803d",
                  padding: "4px 8px",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              >
                Selected
              </span>
            </td>
            <td>1 week ago</td>
          </tr>

          <tr>
            <td>Marketing Exec</td>
            <td>MarketHub</td>
            <td>
              <span
                style={{
                  background: "#fee2e2",
                  color: "#b91c1c",
                  padding: "4px 8px",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              >
                Rejected
              </span>
            </td>
            <td>3 weeks ago</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
