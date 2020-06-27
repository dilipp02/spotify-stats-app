import React from "react";
import styled from "styled-components/macro";
import theme from "../style/theme";
const { colors } = theme;
// const LOGIN_URI =

const LoginScreenStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginHeading = styled.h1`
  font-size: 48px;
  color: #1db954;
  margin-bottom: 20px;
`;

const LoginButton = styled.button`
  background-color: ${colors.green};
  padding: 10px 30px;
  &:hover {
    background-color: ${colors.highlightgreen};
  }
  &:focus {
    border: none;
  }
`;

const LoginScreen = () => {
  //   async function loginClicked() {
  //     const res = fetch;
  //   }

  return (
    <LoginScreenStyle>
      <LoginHeading> Welcome to Spotify Stats</LoginHeading>
      <a href="http://localhost:5000/login">
        <LoginButton>
          <h1>LOGIN TO SPOTIFY </h1>
        </LoginButton>
      </a>
    </LoginScreenStyle>
  );
};

export default LoginScreen;
