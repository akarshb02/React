

import React, { useState } from "react";

function App() {
  const [fullName, setfname] = useState({
    fName: "",
    lName: ""
  });
  //const [lname,setLname]=useState("");

  // function First(event)
  // {
  //   setfname(event.target.value);
  // }
  // function Last(event){
  //   setLname(event.target.value)
  // }

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    setfname((previousVal) => {
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: previousVal.lName
        };
      } else if (inputName === "lName") {
        return {
          fName: previousVal.fName,
          lName: newValue
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          //value={fullName.fName}
        />
        <input name="lName" placeholder="Last Name" onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
