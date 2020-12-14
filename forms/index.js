import React, { useState } from "react";

function App() {
  const [name, setValue] = useState(" ");

  const [hedText, set] = useState(" ");

  function head(event) {
    setValue(event.target.value);
  }

  function sett(event) {
    set(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {hedText}</h1>

      <form onSubmit={sett}>
        <input
         placeholder="What's your name?"
          onChange={head}
          type="text"
         //value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;



