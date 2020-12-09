import React from "react";
function App() {
  const time = new Date();

  let hr = time.getHours();
  let mm = time.getMinutes();
  let sec = time.getSeconds();

  var custom = {
    color: "black"
  };

  var current = hr + "-" + mm + "-" + sec;

  var checking;

  if (current < 12) {
    checking = "Morning";
    custom.color = "Green";
  } else if (current < 18) {
    checking = "Afternoon";
    custom.color = "Blue";
  } else {
    checking = "Evening";
    custom.color = "Yellow";
  }

  return <h1 style={custom}>{checking} </h1>;
}

export default App;
