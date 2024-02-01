import React from "react";

const NavList = ({ navItems }) => {
  const navItemsArray = Object.values(navItems);

  return (
    <ul className="flex space-x-5 mr-16">
      {navItemsArray.map(({ page, label }) => {
        return (
          <li key={label}>
            <a className="pb-1 mr-5 hover:border-b-[2.5px] hover:border-gray-500">
              {page}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavList;
