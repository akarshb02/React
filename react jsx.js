import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render( <
    div >
    <
    h1 > Hello World....! < /h1>,<p>This is Paragraph</p >
    <
    /div>,
    document.getElementById("root")
);


import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render( <
    div >
    <
    h1 > Fav Foods < /h1> <
    ul >
    <
    li > kebab < /li> <
    li > chicken 65 < /li> <
    li > Grill < /li> < /
    ul > <
    /div>,
    document.getElementById("root")
);


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