import React from "react";

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
    <header className="z-50 shadow fixed bg-white w-full">
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
                  <a className="pb-1 mr-5 hover:border-b-[2.5px] hover:border-gray-500" key={item.label} >{item.page}</a>
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
