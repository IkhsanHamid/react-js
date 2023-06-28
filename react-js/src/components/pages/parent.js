import React, { useState } from "react";
import ChildFunct from "./child";

const ParenFunct = (props) => {
  const [bunga, setNamaBunga] = useState("Matahari");
  const [nama, setNama] = useState("");
  const ubahNamaBunga = (namaBunga) => {
    setNamaBunga(namaBunga);
  };
  return (
    <div>
      <ChildFunct namaPengirim={nama} fungsiubah={ubahNamaBunga} />
      <input type="text" onChange={(e) => setNama(e.target.value)} />
      <h3>Nama Bunga: {bunga}</h3>
    </div>
  );
};

export default ParenFunct;
