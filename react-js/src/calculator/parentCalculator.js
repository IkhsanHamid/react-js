import React, { useState } from "react";
import ChildFunctCalculator from "./childCalculator";

const ParentFunctCalculator = (props) => {
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
      <ChildFunctCalculator
        penjumlahan={penjumlahan}
        pengurangan={pengurangan}
        perkalian={perkalian}
        pembagian={pembagian}
      />
      <h4>Hasil: {hasil}</h4>
    </div>
  );
};

export default ParentFunctCalculator;
