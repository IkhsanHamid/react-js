import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Nav from "./nav";
import Sidebar from "./sidebar";
import Main from "./main";
import  styled  from "styled-components";
import Footer from "./footer";

const Layout = (props) => {
  const Mainsidebar = styled.div`
    display:grid;
    margin:1rem auto;
    grid-template-columns: 180px 2fr;
    grid-template-areas:"aside main main";
    aside{
      grid-areas:aside;
    }
    main{
      grid-areas:main;
    }
  `
  return (
    <>
    <div>
      <Header/>
        <Nav/>
        <Mainsidebar>
          <Sidebar />

          <Main>
            {<Outlet />}
          </Main>
          </Mainsidebar>
      <Footer/>
    </div>
    </>
  );
};
export default Layout;
