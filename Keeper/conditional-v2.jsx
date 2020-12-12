
import React from "react";
import  Login from "./Login";

var islogin = true;

// function login() {
//   if (islogin === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login/>;
  
//   }
// }


function App() {
  return <div className="container">
  { islogin==true ? <h1>Hello</h1> : <Login/> 
  }</div>;
}

export default App;
