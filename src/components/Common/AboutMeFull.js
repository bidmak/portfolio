import React from "react";
import AboutSvg from "./AboutSvg";

const AboutMeFull = ({ aboutDetails, className }) => {
  return (
    <div className={className ?? "w-[50%] relative"}>
      <span className="hidden xl:block absolute top-0 right-full  mt-[-20px]">
        <AboutSvg className="w-[80px] h-[80px]" />
      </span>
      <div className="mb-[30px]">
        <h3 className="text-white text-heading">About Me</h3>
      </div>
      <div className="w-full">
        <p className="text-neutral-200 dark:text-neutral-300 leading-loose">
          {aboutDetails}
        </p>
      </div>
    </div>
  );
};

export default AboutMeFull;
