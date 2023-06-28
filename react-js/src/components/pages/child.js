import React from "react";

const ChildFunct = (props) => {
  return (
    <div>
      <h3>Nama Pengirim : {props.namaPengirim}</h3>
      <div>
        <button onClick={() => props.fungsiubah("Ros")}>Ros</button>
        <button onClick={() => props.fungsiubah("Melati")}>Melati</button>
        <button onClick={() => props.fungsiubah("Mawar")}>Mawar</button>
        <button onClick={() => props.fungsiubah("Raflesia")}>Raflesia</button>
      </div>
    </div>
  );
};

export default ChildFunct;
