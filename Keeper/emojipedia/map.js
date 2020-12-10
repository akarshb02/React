
import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function emoji(emoj) {
  return (<Entry
   emoji={emoj.emoji} name={emoj.name} desc={emoj.meaning} 
  />
  );
}

function App() {
  return <div>
    
  <dl className="dictionary">{emojipedia.map(emoji)}</dl>
  </div>;
}

export default App;
