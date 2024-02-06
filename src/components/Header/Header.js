import React, { useState, useEffect } from "react";
import NavList from "../Common/NavList";
import Company from "../Common/Company";

const Header = ({ navItems, companyName }) => {
  const navItemsArray = Object.values(navItems);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (label, e) => {
    e.preventDefault();
    const section = document.getElementById(label);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
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
    <header id="header" className="z-40 shadow fixed bg-white w-full">
      <nav className="container justify-between flex align-center my-5 px-20">
        <Company companyName={companyName} scrollToSection={scrollToSection} />
        <div className="md:flex md:space-x-12 mr-10 items-center">
          <NavList
            navItemsArray={navItemsArray}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
