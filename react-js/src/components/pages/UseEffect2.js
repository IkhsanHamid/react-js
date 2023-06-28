import React, { useEffect, useState } from "react";

const UseEffect2 = (props) => {
  const [pesan, setPesan] = useState("");
  const [tampil, setTampil] = useState("");
  //   const [isClick, setIsClick] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    setTampil(pesan);
  }, [isAdd, isDelete, isEdit]);

  return (
    <div>
      <h3>Pesan</h3>
      <input type="text" onChange={(e) => setPesan(e.target.value)} />
      <div>
        <button onClick={() => setIsAdd(!isAdd)}>ADD</button>
        <button onClick={() => setIsDelete(!isDelete)}>DELETE</button>
        <button onClick={() => setIsEdit(!isEdit)}>EDIT</button>
      </div>
      <div>
        <label>{tampil}</label>
      </div>
    </div>
  );
};

export default UseEffect2;
