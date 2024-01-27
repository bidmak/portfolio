import React from "react";
import logo from "../logo.jpg";

const Header = () => {
  const NAV_LINKS = [
    {
      page: "Home",
      label: "home",
    },
    {
      page: "About",
      label: "about",
    },
    {
      page: "Experience",
      label: "experience",
    },
    {
      page: "Projects",
      label: "projects",
    },
    {
      page: "Contact",
      label: "contact",
    },
  ];

  return (
    <header className="z-50 shadow position: fixed bg-white w-full">
      <nav className="justify-between flex align-center my-5 px-20">
        <div className="">
          <h3 className="font-bold text-xl" >Sameul Bidmak</h3>
        </div>
        <div className="md:flex md:space-x-12 mr-10 items-center">
          <ul className="flex space-x-5 mr-16">
          {
            NAV_LINKS.map(item => {
              return (
                <li>
                  <a className="p-3 px-5 hover:bg-[#6244C5] hover:rounded-2xl hover:text-white hover:font-medium" key={item.label} >{item.page}</a>
                </li>
              )
            })
          }
          </ul>
          
        </div>
      </nav>
    </header>
  );
};

export default Header;
