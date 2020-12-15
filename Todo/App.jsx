
import React, { useState } from "react";

function App() {
  const [name, setVal] = useState("");
  const [items, setItems] = useState([]);

  function handling(event) {
    const neww = event.target.value;
    setVal(neww);
  }

  function addItem() {
    setItems((previous) => {
      return [...previous, name];
    });
    setVal("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handling} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
