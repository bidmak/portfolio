import React from "react";

const AboutMe = ({ aboutMe }) => {
  return (
    <div className="descriptiion w-4/5">
      <p className="text-[15px] text-neutral-500 dark:text-neutral-400 font-light leading-[26px] max-w-[400px]">
        {aboutMe}
      </p>
    </div>
  );
};

export default AboutMe;
