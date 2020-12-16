import React, {useState} from "react";

function Tod(props) {
 const [isDone, setDone] = useState(false);

  function handle() {
    setDone((pre) => {
      return !pre;
    });
  }

  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li
        onClick={handle}
        style={{ textDecoration: isDone ? "line-through" : "none" }}
      >
        {props.text}
      </li>
    </div>
  );
}

export default Tod;
