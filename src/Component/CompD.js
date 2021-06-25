import { useState } from "react";
const CompD = (props) => {
  return (
    <div>
      <div>{props.propKaNaam1.key1} in D</div>
      <div>{props.propKaNaam1.key2} in D</div>
      <div>{props.propKaNaam1.key3} in D</div>
    </div>
  );
};

export default CompD;