import React from "react";
import "./NavList.css";

const NavList = ({ navItemsArray, activeSection, scrollToSection }) => {
  return (
    <ul className="flex space-x-10 mr-16">
      {navItemsArray.map(({ page, label }) => {
        return (
          <li
            key={label}
            className="transition duration-200 ease-out hover:scale-[1.12] "
          >
            <a
              href={`#${label}`}
              className={`${label === activeSection ? "active-border" : ""}`}
              onClick={(e) => scrollToSection(label, e)}
            >
              {page}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavList;
