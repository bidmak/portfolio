import React from "react";

const MySkills = ({ mySkills, className }) => {
  return (
    <div className={className ?? "lg:w-[50%]"}>
      <div className="mb-[22px] lg:mb-[30px]">
        <h3 className="text-white text-heading">My Skills</h3>
      </div>
      <ul className="flex flex-wrap flex-row ">
        {mySkills.map((skill, index) => {
          return (
            <li
              key={index}
              className="bg-[#FFC448] text-[#6244C5] dark:text-neutral-900 px-5 py-2 mr-2 mt-2 rounded-sm font-semibold"
            >
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MySkills;
