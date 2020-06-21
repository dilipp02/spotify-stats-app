import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import styled from "styled-components/macro";

const AppDiv = styled.div`
  display: flex;
`;

const LoggedIn = () => {
  return (
    <AppDiv>
      <Navbar />
      <Profile />
    </AppDiv>
  );
};

export default LoggedIn;
