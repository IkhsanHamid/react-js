import React, { useEffect, useState } from "react";

const UseEffect1 = (props) => {
  //   const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setCount(count + 1);
  //     }, 1000);
  //   }, []);
  //   return (
  //     <div>
  //       <h4>Count = {count}</h4>
  //     </div>
  //   );

  const [nama, setNama] = useState("");
  const [tampil, setTampil] = useState(false);
  useEffect(() => {
    alert("Hallo !");
  }, [tampil]);
  return (
    <div>
      <h4>Nama = {nama}</h4>
      <input type="text" onChange={(e) => setNama(e.target.value)} />
      <button onClick={() => setTampil(!tampil)}>Tampilkan alert</button>
    </div>
  );
};

export default UseEffect1;
