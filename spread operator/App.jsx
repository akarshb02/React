import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handling(event){
    const {value,name} =event.target;

    setContact (oldVal => {


      return {...oldVal,
        [name] : value
      }
    });
  }
        // if(name==="fName"){
        //   return{
        //     fName :value,
        //     lName : oldVal.lName,
        //     email : oldVal.email
        //   }
        //   }else if(name==="lName"){
        //     return {
        //     fName :oldVal.fName,
        //     lName : value,
        //     email :oldVal.email
        //     }
        //   }
        //     else{
        //       return {
        //         fName :oldVal.fName,
        //         lName : oldVal.lName,
        //         email :value
        //       }
        //     }
        //   });
        // }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" onChange={handling} />
        <input name="lName" placeholder="Last Name" onChange={handling} />
        <input name="email" placeholder="Email" onChange={handling} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;


