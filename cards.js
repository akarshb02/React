import React from "react";
import ReactDOM from "react-dom";

function Cards(props) {
  console.log(props);

  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="phot" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <Cards
      name="Beyonc"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="1234566"
    />

    <Cards
      name="Nature"
      img="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"
      email="ajnsjbnd@gmail.com"
    />
  </div>,
  document.getElementById("root")
);
