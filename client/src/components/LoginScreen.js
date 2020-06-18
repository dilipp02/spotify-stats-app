import React from "react";

// const LOGIN_URI =

const LoginScreen = () => {
  //   async function loginClicked() {
  //     const res = fetch;
  //   }

  return (
    <div className="LoginScreen">
      <h1 className="LoginHeading">Welcome to Spotify Stats</h1>
      <a href="http://localhost:5000/login">
        <button className="btn LoginButton">
          <h3>LOGIN TO SPOTIFY </h3>
        </button>
      </a>
    </div>
  );
};

export default LoginScreen;
