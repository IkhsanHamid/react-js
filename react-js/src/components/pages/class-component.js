import React, { Component } from "react";

class TampilNama extends Component {
  state = { nama: "" };
  tampilNama = (e) => {
    // alert(e.target.value);
    this.setState({ nama: e.target.value });
  };
  render() {
    return (
      <div>
        <h3>Nama:{this.state.nama}</h3>
        <input
          type="text"
          defaultValue={this.state.nama}
          onChange={this.tampilNama}
        />
        {/* <button onClick={this.tampilNama}>Tampilkan Nama</button> */}
      </div>
    );
  }
}

// berhasil
// class TampilNama extends React.Component {
//     constructor(props) {
//       super(props);
//       this.inputRef = React.createRef();
//     }

//     state = { nama: "" };

//     tampilNama = () => {
//       const nama = this.inputRef.current.value;
//       alert(nama);
//       this.setState({ nama });
//     };

//     render() {
//       return (
//         <div>
//           <label>Nama: {this.state.nama}</label>
//           <input
//             type="text"
//             defaultValue={this.state.nama}
//             ref={this.inputRef}
//           />
//           <button onClick={this.tampilNama}>Tampilkan Nama</button>
//         </div>
//       );
//     }
//   }

export default TampilNama;
