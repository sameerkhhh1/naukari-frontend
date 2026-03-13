import "./App.css";
import { Routes, Route } from "react-router-dom";

import SignUp from "./Components/signUp";
import Login from "./Components/login";
import Admin from "./Components/admin";
import Jobs from "./Components/Jobs";
import Apply from "./Components/apply";
import Logout from "./Components/logout";
import JobDetail from "./Components/jobDetail";
import Navbar from "./Navbar/navbar";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <h1>Please Login First</h1>;
}

function AdminRoute({ children }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  return token && role === "admin" ? children : <h1>Admin Access Only</h1>;
}

function App() {
  return (
    <div className="app-container">
      <div className="top-bar">
        <Navbar />

        <div className="dashboard-title">
          <span>Dashboard</span>
          <hr />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/jobs"
          element={
            <PrivateRoute>
              <Jobs />
            </PrivateRoute>
          }
        />

        <Route
          path="/apply"
          element={
            <PrivateRoute>
              <Apply />
            </PrivateRoute>
          }
        />

        <Route
          path="/logout"
          element={
            <PrivateRoute>
              <Logout />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />

        <Route path="/job/:id" element={<JobDetail />} />
      </Routes>
    </div>
  );
}

export default App;
