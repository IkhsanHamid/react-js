import React, { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const [nama, setNama] = useState("");
  const penambahan = () => {
    setCount(count + 1);
  };
  const pengurangan = () => {
    setCount(count - 1);
  };
  const showNama = (e) => {
    setNama(e.target.value);
  };
  return (
    <div>
      <h4>Count:{count}</h4>
      <div>
        <button onClick={penambahan}>+</button>
        <button onClick={pengurangan}>-</button>
      </div>
      <h4>Nama:{nama}</h4>
      <input type="text" onChange={showNama} />
    </div>
  );
};

export default Counter;
