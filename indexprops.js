import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import contacts from "./contacts";

ReactDOM.render(
  <div>
    <h1 className="heading">My Contacts</h1>
    <App
      name="XYZ"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="123456"
      email="xyz@gmail.com"
    />

    <App
      name={contacts[1].name}
      img={contacts[1].imgURL}
      tel={contacts[1].phone}
      email="yzz@gmail.com"
    />
  </div>,
  document.getElementById("root")
);
