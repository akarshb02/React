import React, { useState } from "react";


function CreateArea(props) {
  const [notes,setNotes] = useState({
    title : "",
    content:""
  })

  function submitNote(event){

    props.onAdd(notes);

    event.preventDefault();
  }

  function change(event){

    const {name,value} = event.target;
    setNotes(pre => {
      return {
        ...pre,
        [name]:value
      }
    });
  }
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={change} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={change} />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
