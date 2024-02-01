import React from "react";
import NavList from "../Common/NavList";
import Company from "../Common/Company";

const Header = ({ navItems, companyName }) => {
  return (
    <header className="z-50 shadow fixed bg-white w-full">
      <nav className="container justify-between flex align-center my-5 px-20">
        <Company companyName={companyName} />
        <div className="md:flex md:space-x-12 mr-10 items-center">
          <NavList navItems={navItems} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
