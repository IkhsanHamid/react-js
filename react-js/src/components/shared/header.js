import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Hero = styled.div`
  background: url("../../oke.jfif") no-repeat center;
  background-size: cover;
  color: #fff;
  font-size: 20px;
  text-align: center;
  display: grid;
  grid-template-columns: 5px 1fr 5px;
  grid-template-rows: 2fr 1fr 10px;
  grid-gap: 2px;
  img {
    margin: auto;
    padding-top: 1rem;
    grid-column: 2/3;
    grid-row: 1/2;
    height: 165px;
  }
  article {
    grid-column: 2/3;
    grid-row: 2/3;
  }
  article p {
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    color: #fff;
  }
  button {
    background-color: #fff;
    border-radius: 4px;
    border: #fff;
    color: #2abadf;
    font-size: 1rem;
    padding: 5px 10px;
    margin: 0.75rem auto 0;
    cursor: pointer;
  }
  h2{
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 600;
  }
`;

const Header = (props) => {
  return (
    <Hero>
      <img src="../../logo192.png" alt="gambar e-commerce" />
      <article>
        <h2>Welcome to Website Ikhsan</h2>
        <p>Halo Halo Halo Halo, Hai Hai Hai</p>
        <button>
          Getting Started
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </button>
      </article>
    </Hero>
  );
};

export default Header;
