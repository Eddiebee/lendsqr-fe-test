import React, { useEffect } from "react";
import Dashboard from "./dashboard";
import Login from "./login";
import { Navigate } from "react-router-dom";

// we'll check if the user is logged in first,
// if we have a logged in user we send such to the dashboard
// otherwise we redirect to the login page... cool, right?!

export let userIsLoggedIn = !!localStorage.getItem("loggedInUser");

const Root = () => {
  return userIsLoggedIn ? (
    <Navigate to="/dashboard" replace={true} />
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default Root;
