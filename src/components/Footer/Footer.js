import React from "react";
import Company from "../Common/Company";

const Footer = ({ companyName }) => {
  return (
    <div className="w-full h-auto bg-[#FFC448] clear-both">
      <div className="container">
        <div className="flex items-center justify-between py-6">
          <Company
            companyName={companyName}
            className="font-bold text-2xl text-[#6244C5]"
          />
          <p className="dark:text-neutral-950 font-medium">
            &copy; 2024 by Bidmak. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
