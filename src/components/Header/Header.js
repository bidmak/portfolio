import React, { useState, useEffect } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import NavList from "../Common/NavList";
import Company from "../Common/Company";

const Header = ({ navItems, companyName }) => {
  const navItemsArray = Object.values(navItems);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(localStorage.theme === "dark");
  const [menu, setMenu] = useState(false);

  const toggleMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  const scrollToSection = (label, e) => {
    e.preventDefault();
    const section = document.getElementById(label);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${label}`);
    }
  };

  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && prefersDarkMode.matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, [prefersDarkMode.matches]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Determine the active section based on scroll position
      const active = navItemsArray.find(({ label }) => {
        const section = document.getElementById(label);
        if (section) {
          const sectionTop = section.offsetTop - 230;
          const sectionBottom = sectionTop + section.offsetHeight;
          return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
        }
        return false;
      });

      // Update the active section in state
      if (active && active.label !== activeSection) {
        setActiveSection(active.label);
      }

      // To update the header max-width
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItemsArray, activeSection]);

  return (
    <header className="fixed z-20  bg-neutral-50 dark:bg-neutral-800 w-full">
      <nav
        className={`container lg:flex justify-between my-5 lg:my-5 duration-300 ${
          isScrolled ? "header-container ease-in my-7 lg:my-3" : "ease-out"
        }`}
        style={{ alignItems: "center" }}
      >
        <div className="flex items-center justify-between">
          <Company
            companyName={companyName}
            className="font-bold text-3xl text-[#6244C5] dark:text-neutral-100"
            scrollToSection={scrollToSection}
          />
          <div className="text-3xl lg:hidden" onClick={() => setMenu(!menu)}>
            {menu ? <CgClose /> : <CgMenu />}
          </div>
        </div>
        <div
          className={`${
            menu ? "block" : "hidden"
          } lg:flex space-x-12 items-center`}
          onClick={() => setMenu(false)}
        >
          <NavList
            navItemsArray={navItemsArray}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />
        </div>
        <div className="flex">
          <div
            className={`${
              menu ? "block" : "hidden"
            } w-max group p-2 rounded-full lg:hover:bg-neutral-950 lg:dark:hover:bg-neutral-50`}
            onClick={toggleMode}
          >
            {isDarkMode ? (
              <MdOutlineLightMode className="h-6 w-6 cursor-pointer fill-white lg:group-hover:fill-black" />
            ) : (
              <MdDarkMode className="h-6 w-6 cursor-pointer lg:group-hover:fill-white" />
            )}
          </div>
          {menu && (
            <div
              className="lg:hidden w-full"
              onClick={() => setMenu(false)}
            ></div>
          )}
        </div>
        {menu && (
          <div
            onMouseDown={() => setMenu(false)}
            className="absolute bg-transparent h-[100vh] w-full lg:hidden"
          ></div>
        )}
      </nav>
    </header>
  );
};

export default Header;
