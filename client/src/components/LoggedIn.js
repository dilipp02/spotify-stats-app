import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import styled from "styled-components/macro";

const AppDiv = styled.div`
  display: flex;
`;

const Content = styled.div`
  padding-left: 200px;
  width: 100%;
`;

const LoggedIn = () => {
  return (
    <AppDiv>
      <Navbar />
      <Content>
        <Profile />
      </Content>
    </AppDiv>
  );
};

export default LoggedIn;
