import { useState } from "react";
import CompB from "./CompB";
import CompD from "./CompD";
const CompA = () =>{
  const [obj,setObj]=useState({
    key1:0,
    key2:100,
    key3:200
  });

  const stateUpdater = () => {
    setObj({
      ...obj,
      key1:300,
      key2:400
    })
  }

  return <div>
    <CompB propKaNaam = {obj} updater={stateUpdater}/>

    <CompD propKaNaam1 = {obj}/>

    </div>;
};

export default CompA;