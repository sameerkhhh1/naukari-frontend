import "./App.css";
import SignUp from "./Components/signUp";
import Login from "./Components/login";
import { Route, Routes } from "react-router-dom";

import Admin from "./Components/admin";
import Jobs from "./Components/Jobs";
import Navbar from "./Navbar/navbar";
import Logout from "./Components/logout";
import Apply from "./Components/apply";
import JobDetail from "./Components/jobDetail";

function App() {
  function PrivateRoute({ children }) {
    let token = localStorage.getItem("token");
    if (token) {
      return children;
    } else {
      return <h1>Protected Route, Pass token to see this route</h1>;
    }
  }

  function AdminRoute({ children }) {
    let storedRole = localStorage.getItem("role");
    let token = localStorage.getItem("token");
    if (token && storedRole === "admin") {
      return children;
    } else {
      return <h1>Protected Route, The admin only access this route</h1>;
    }
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "60px",
        }}
      >
        <Navbar />
        <h3 style={{ margin: "10px 80px 0px 0px ", fontSize: "30px" }}>
          Dashboard
          <hr
            style={{
              border: "3px solid #F2F1F4",
              width: "80%",
              margin: "20px auto",
              height: "0px",
            }}
          ></hr>
        </h3>
      </div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<SignUp />}></Route>
        <Route
          path="/jobs"
          element={
            <PrivateRoute>
              <Jobs />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/logout"
          element={
            <PrivateRoute>
              <Logout />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        ></Route>
        <Route
          path="/apply"
          element={
            <PrivateRoute>
              <Apply />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/job/:id" element={<JobDetail />} />
      </Routes>
    </div>
  );
}

export default App;
