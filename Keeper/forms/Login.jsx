
import React from "react";
import Inputs from "./Inputs";

function Login(props) {
  return (
    <form className="form">
      <Inputs type="text" placeholder="username" />
      <Inputs type="text" placeholder="password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;

