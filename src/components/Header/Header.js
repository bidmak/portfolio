import React, { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import NavList from "../Common/NavList";
import Company from "../Common/Company";

const Header = ({ navItems, companyName }) => {
  const navItemsArray = Object.values(navItems);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(localStorage.theme === "dark");

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
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Determine the active section based on scroll position
      const active = navItemsArray.find(({ label }) => {
        const section = document.getElementById(label);
        if (section) {
          const sectionTop = section.offsetTop - 150;
          const sectionBottom = sectionTop + section.offsetHeight;
          return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
        }
        return false;
      });

      // Update the active section in state
      if (active && active.label !== activeSection) {
        setActiveSection(active.label);
      }

      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItemsArray, activeSection]);

  return (
    <header
      id="header"
      className="fixed z-40  bg-neutral-50 dark:bg-neutral-800 w-full"
    >
      <nav
        className={`flex justify-between my-5 duration-300 ${
          isScrolled ? "header-container ease-in my-3" : "container ease-out"
        }`}
        style={{ alignItems: "center" }}
      >
        <Company companyName={companyName} scrollToSection={scrollToSection} />
        <div className="flex space-x-12 items-center">
          <NavList
            navItemsArray={navItemsArray}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />
        </div>
        <div
          className=" group p-2 rounded-full hover:bg-neutral-950 dark:hover:bg-neutral-50"
          onClick={toggleMode}
        >
          {isDarkMode ? (
            <MdOutlineLightMode className="h-6 w-6 cursor-pointer fill-white group-hover:fill-black" />
          ) : (
            <MdDarkMode className="h-6 w-6 cursor-pointer group-hover:fill-white" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
