import React, { useState, useEffect } from "react";
import LoginScreen from "./LoginScreen";
import LoggedIn from "./LoggedIn";
import { token } from "../spotify/index";
import GlobalStyle from "../style/GlobalStyle";

function App() {
  const [state, setState] = useState(token);
  return (
    <div>
      <GlobalStyle />
      {token ? <LoggedIn /> : <LoginScreen />}
    </div>
  );
}

export default App;
