import React, { useState } from "react";

const ListProduct = (props) => {
  const ProductList = [
    { id: 1, nama: "Laptop", harga: 2000, jumlah: 9, likes: 1 },
    { id: 2, nama: "Mouse", harga: 500, jumlah: 20, likes: 1 },
    { id: 3, nama: "Lemari", harga: 1000, jumlah: 5, likes: 1 },
    { id: 4, nama: "Sepeda", harga: 5000, jumlah: 3, likes: 1 },
    { id: 5, nama: "Kemeja", harga: 850, jumlah: 12, likes: 1 },
  ];
  const [product, setProduct] = useState(ProductList);
  const tambahProduct = (id) => {
    setProduct([
      ...product.map((p) => {
        if (p.id === id) {
          p.jumlah++;
          return p;
        } else {
          return p;
        }
      }),
    ]);
  };
  const kurangProduct = (id) => {
    setProduct([
      ...product.map((p) => {
        if (p.id === id) {
          p.jumlah--;
          return p;
        } else {
          return p;
        }
      }),
    ]);
  };
  const tambahLike = (id) => {
    setProduct([
      ...product.map((p) => {
        if (p.id === id) {
          p.likes++;
          return p;
        } else {
          return p;
        }
      }),
    ]);
  };
  const kurangLike = (id) => {
    setProduct([
      ...product.map((p) => {
        if (p.id === id) {
          p.likes--;
          return p;
        } else {
          return p;
        }
      }),
    ]);
  };
  return (
    <div>
      <h1>List Product</h1>
      {product.map((p) => {
        return (
          <>
            <ul>
              <h4>Nama : {p.nama}</h4>
              <li></li>
              Harga : {p.harga}
              <li>Jumlah : {p.jumlah}</li>
              <li>
                <button onClick={() => tambahProduct(p.id)}>+</button>
                <button onClick={() => kurangProduct(p.id)}>-</button>
              </li>
              <li>Likes : {p.likes}</li>
              <li>
                <button onClick={() => tambahLike(p.id)}>+</button>
                <button onClick={() => kurangLike(p.id)}>-</button>
              </li>
            </ul>
          </>
        );
      })}
    </div>
  );
};

export default ListProduct;
