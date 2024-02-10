import React from "react";
import "./NavList.css";

const NavList = ({ navItemsArray, activeSection, scrollToSection }) => {
  return (
    <ul className="lg:flex lg:space-x-10 lg:mr-16">
      {navItemsArray.map(({ page, label }) => {
        return (
          <li
            key={label}
            className="transition duration-200 ease-out lg:hover:scale-[1.12] "
          >
            <a
              href={`#${label}`}
              className={` lg:dark:border-neutral-100 dark:text-neutral-100 ${
                label === activeSection
                  ? "lg:border-b-2 lg:border-neutral-950 "
                  : ""
              }`}
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
