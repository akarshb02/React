import React from "react";
import ReactDOM from "react-dom";

const name = "Akarsh";
var year = new Date();
const img =
  "https://media.gettyimages.com/photos/sunset-at-vidhana-soudha-in-bangalore-karnataka-india-picture-id899271434?s=612x612";
ReactDOM.render(
  <div>
    <h1 className="h">Created by {name}</h1>
    <p>Copyright {year.getFullYear()}</p>

    <div>
      <img src={img} alt="2nd" />
      <img
        src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
        alt="2nd"
      />
      <img src="https://static.toiimg.com/photo/72975551.cms" alt="3rd " />
    </div>
  </div>,
  document.getElementById("root")
);
