import React from "react";
import '../style/Spinner.css'

const Spinner = () => {
  return (
    <div className="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
