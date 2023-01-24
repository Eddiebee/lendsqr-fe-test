import React from "react";
import Dashboard from "./dashboard";
import Login from "./login";

// we'll check if the user is logged in first,
// if we have a logged in user we send such to the dashboard
// otherwise we redirect to the login page... cool, right?!

let userIsLoggedIn = !!localStorage.getItem("loggedInUser");

const Root = () => {
  return userIsLoggedIn ? <Dashboard /> : <Login />;
};

export default Root;
