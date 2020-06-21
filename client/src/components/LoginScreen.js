import React from "react";
import styled from "styled-components/macro";
// const LOGIN_URI =

const LoginScreenStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginHeading = styled.h1`
  color: #1db954;
`;

const LoginButton = styled.button`
  background-color: #1db954;
  color: #fcfcfc;
  border-radius: 30px;
  padding: 10px 30px;
  margin-top: 20px;
`;

const LoginScreen = () => {
  //   async function loginClicked() {
  //     const res = fetch;
  //   }

  return (
    <LoginScreenStyle>
      <LoginHeading> Welcome to Spotify Stats</LoginHeading>
      <a href="http://localhost:5000/login">
        <button className="btn LoginButton">
          <h3>LOGIN TO SPOTIFY </h3>
        </button>
      </a>
    </LoginScreenStyle>
  );
};

export default LoginScreen;
