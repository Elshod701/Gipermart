import React from "react";
import { Outlet } from "react-router-dom";
// COMPONENTS
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="wrapper mt-[130px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
