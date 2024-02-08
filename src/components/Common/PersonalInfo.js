import React from "react";
import hand from "../../assets/icons/hand.svg";
import "./PersonalInfo.css";

const PersonalInfo = ({ name, profession }) => {
  return (
    <div className="name-profession space-y-5 details w-1/2 ">
      <h3 className="text-[65px] font-semibold tracking-[-0.5px] mb-[11px] inline leading-none dark:text-white">
        {name}
        <img src={hand} alt="" className="hand-wave ps-[10px] inline-block" />
      </h3>
      <span className="profession inline-block relative pl-20 mt-2 text-[20px] font-light text-neutral-700 before:bg-neutral-700 dark:text-neutral-200 dark:before:bg-neutral-200">
        {profession}
      </span>
    </div>
  );
};

export default PersonalInfo;
