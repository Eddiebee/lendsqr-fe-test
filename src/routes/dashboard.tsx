import React from "react";
import { Navigate } from "react-router-dom";
import { userIsLoggedIn } from "./root";

const Dashboard = () => {
  let userIsLoggedIn = !!localStorage.getItem("loggedInUser");
  return userIsLoggedIn ? (
    <div>dashboard</div>
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default Dashboard;
