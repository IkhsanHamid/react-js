import React, { useState } from "react";
const DataObject = (props) => {
  const [person, setPerson] = useState({
    nama: "ikhsan",
    alamat: "jakarta",
    usia: 23,
  });
  const changeHandler = (e) => {
    setPerson((prev) => {
      return {
        ...prev,
        [e.target.name]: [e.target.value],
      };
    });
  };
  return (
    <div>
      <div>
        <input type="type" name="nama" onChange={changeHandler} />
        <input type="type" name="alamat" onChange={changeHandler} />
        <input type="type" name="usia" onChange={changeHandler} />
      </div>
      <p>Nama:{person.nama}</p>
      <p>Alamat:{person.alamat}</p>
      <p>Usia:{person.usia}</p>
    </div>
  );
};
export default DataObject;
