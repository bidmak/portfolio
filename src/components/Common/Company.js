import React from "react";

const Company = ({ companyName }) => {
  return (
    <div className="group">
      <h3 className="font-bold text-2xl text-[#6244C5] ">
        {companyName} <i class="fa-brands fa-centercode text-amber-600"></i>
      </h3>
    </div>
  );
};

export default Company;
