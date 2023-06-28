import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarStyled = styled.aside`
    background-color: #F7F7F7;
    ul{
      list-style-type: none  
    }
    ul li a{
        display: inline-block;
        text-decoration: none;
        width:60%;
        padding: 0% .75rem 1rem;
        color:#212f54;
        border-bottom:solid 1px rgba(255,255,255,.5rem);
        transition:0ms .14s ease-in-out;
    }
    li a:hover{
        color:#36bae6;
        background:#e0e5eb;
    }
    `;

const Sidebar = (props) => {
  return (
    <SidebarStyled>
      <ul>
        <li>
          <Link to="/DataObject">Data Object</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/listProduct">List Product</Link>
        </li>
        <li>
          <Link to="/UseEffect2">Use Effect 2</Link>
        </li>
        <li>
          <Link to="" className="btn">
            Sign In
          </Link>
        </li>
      </ul>
    </SidebarStyled>
  );
};

export default Sidebar;
