import React, { useState, useEffect } from "react";
import "../style.css";
import LoginScreen from "./LoginScreen";
import LoggedIn from "./LoggedIn";
import { token } from "../spotify/index";

console.log(token);

function App() {
  const [state, setState] = useState(token);
  return <div>{token ? <LoggedIn /> : <LoginScreen />}</div>;
}

export default App;
