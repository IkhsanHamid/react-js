import React from "react";

const ChildFunctCalculator = (props) => {
  return (
    <div>
      <button onClick={props.penjumlahan}>+</button>
      <button onClick={props.pengurangan}>-</button>
      <button onClick={props.perkalian}>*</button>
      <button onClick={props.pembagian}>/</button>
    </div>
  );
};

export default ChildFunctCalculator;
