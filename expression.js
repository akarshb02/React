import React from "react";
import ReactDOM from "react-dom";
const fname = "Akarsh";
const lName = "B"
const luckyN0 = 2 + 3;
ReactDOM.render( <
    div >
    <
    h1 > Hello { fname + " " + lName } < /h1> <
    p > Your Lucky Number is { luckyN0 } < /p> < /
    div > ,
    document.getElementById("root")
);
