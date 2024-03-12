import React from "react";
import NavTop from "./components/nav-top";
import NavBottom from "./components/nav-bottom";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <NavTop />
          <NavBottom />
        </div>
      </header>
    </>
  );
};

export default Header;
