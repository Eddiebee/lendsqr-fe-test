import React from "react";
import { Navigate } from "react-router-dom";
import { userIsLoggedIn } from "./root";

// let userIsLoggedIn = !!localStorage.getItem("loggedInUser");

const Dashboard = () => {
  return userIsLoggedIn ? (
    <div>dashboard</div>
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default Dashboard;
