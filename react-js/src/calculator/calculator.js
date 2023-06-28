import React, { useState } from "react";

const Calculator = (props) => {
  const [angka1, setAngka1] = useState(0);
  const [angka2, setAngka2] = useState(0);
  const [hasil, setHasil] = useState(0);

  const penjumlahan = () => {
    setHasil(+angka1 + +angka2);
  };
  const pengurangan = () => {
    setHasil(+angka1 - +angka2);
  };
  const perkalian = () => {
    setHasil(+angka1 * +angka2);
  };
  const pembagian = () => {
    setHasil(+angka1 / +angka2);
  };
  return (
    <div>
      <h5>Angka 1: </h5>
      <input type="text" onChange={(e) => setAngka1(e.target.value)} />
      <h5>Angka 2: </h5>
      <input type="text" onChange={(e) => setAngka2(e.target.value)} />
      <div>
        <h4>Hasil: {hasil}</h4>
      </div>
      <div>
        <button onClick={penjumlahan}>+</button>
        <button onClick={pengurangan}>-</button>
        <button onClick={perkalian}>*</button>
        <button onClick={pembagian}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
