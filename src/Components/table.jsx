import React from "react";
import "./Table.css";

const Table = () => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Job Role</th>
            <th>Company</th>
            <th>Status</th>
            <th>Applied On</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Frontend Developer</td>
            <td>Tech Corp</td>

            <td>
              <span className="status pending">Pending</span>
            </td>

            <td>2 days ago</td>
          </tr>

          <tr>
            <td>UI/UX Designer</td>
            <td>Design Studio</td>

            <td>
              <span className="status selected">Selected</span>
            </td>

            <td>1 week ago</td>
          </tr>

          <tr>
            <td>Marketing Exec</td>
            <td>MarketHub</td>

            <td>
              <span className="status rejected">Rejected</span>
            </td>

            <td>3 weeks ago</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
