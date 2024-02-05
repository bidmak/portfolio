import React, { useState, useEffect } from "react";
import "./NavList.css";

const NavList = ({ navItems }) => {
  const navItemsArray = Object.values(navItems);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (label, event) => {
    event.preventDefault(); // Prevent the default anchor link behavior
    const section = document.getElementById(label);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      // Update the URL hash manually
      window.history.pushState(null, "", `#${label}`);
    }
  };

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
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItemsArray, activeSection]);

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
              onClick={(event) => scrollToSection(label, event)}
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
