import { useState } from "react";
import CompC from "./CompC";
const CompB = (props) => {
  
  const myFunction = () =>{
    props.updater();
  };

  return (
    <>
      <div>{props.propKaNaam.key1} in B</div>
      <div>{props.propKaNaam.key2} in B</div>
      <div>{props.propKaNaam.key3} in B</div>

      <button onClick={myFunction}>Click to update prop</button>
      <CompC propoC={props.propKaNaam}/>
    </>
  );
};

export default CompB;