import React, { useState } from "react";
import Tod from "./Tod";

function App() {
  const [name, setName] = useState("");
  const [items, setItems] = useState([]);

  function handle(event) {
    const hold = event.target.value;
    setName(hold);
  }

  function addItems() {
    setItems((pre) => {
      return [...pre, name];
    });
  }

  function deleteItem(id){

    setItems(prev =>{
      return prev.filter((item,index)=>{
        return index!=id

      })
    
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handle} />
        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todo, index) => (
            <Tod key={index} id={index} text={todo}
            onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
