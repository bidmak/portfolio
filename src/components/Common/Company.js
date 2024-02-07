import React from "react";

const Company = ({ companyName, className, scrollToSection }) => {
  return (
    <div
      className={`group ${scrollToSection ? "cursor-pointer" : ""}`}
      onClick={(e) => {
        scrollToSection && scrollToSection("home", e);
      }}
    >
      <h3
        className={`${
          className
            ? className
            : "font-bold text-3xl text-[#6244C5] dark:text-neutral-100"
        }`}
      >
        {companyName}{" "}
        <i className="fa-brands fa-typo3 text-[#6244C5] dark:text-[#6244C5]"></i>
      </h3>
    </div>
  );
};

export default Company;
