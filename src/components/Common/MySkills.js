import React from "react";

const MySkills = ({ mySkills, className }) => {
  return (
    <div className={className ?? "w-[50%]"}>
      <div className=" mb-[30px]">
        <h3 className="text-white text-[56px] tracking-[-1px] font-bold">
          <span className="relative">My Skills</span>
        </h3>
      </div>
      <div className="flex flex-wrap flex-row ">
        {mySkills.map((skill) => {
          return (
            <p className="bg-[#FFC448] text-[6244C5] px-4 py-2 mr-2 mt-2 rounded font-semibold">
              {skill}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default MySkills;
