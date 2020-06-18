import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";

const LoggedIn = () => {
  return (
    <div className="App-div">
      <Navbar />
      <Profile />
    </div>
  );
};

export default LoggedIn;
