import React, { useState } from "react";

function App() {
  let [time, setTime] = useState(0);

  function clicked() {
    setTime((time = new Date().toLocaleTimeString()));
  }
  function pres (){
    setInterval(clicked, 1000);
  }
  

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={clicked,pres}>Get Time</button>
    </div>
  );
}

export default App;
