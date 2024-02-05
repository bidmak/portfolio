import React from "react";
import AboutSvg from "./AboutSvg";

const AboutMeFull = ({ aboutDetails, className }) => {
  return (
    <div className={className ?? "w-[50%] relative"}>
      <span className=" element absolute top-0 right-full  mt-[-20px]">
        <AboutSvg className="w-[80px] h-[80px]" />
      </span>
      <div className=" w-full float-left mb-[30px]">
        <h3 className="text-white tracking-[-1px] text-[56px] font-bold">
          <span className="relative">About Me</span>
        </h3>
      </div>
      <div className="text w-full float-left mb-[50px]">
        <p className="text-neutral-300 leading-loose">{aboutDetails}</p>
      </div>
    </div>
  );
};

export default AboutMeFull;
