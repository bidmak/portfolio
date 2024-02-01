import React from "react";
import hand from "../../assets/icons/hand.svg";
import "./PersonalInfo.css";

const PersonalInfo = ({ name, profession }) => {
  return (
    <div className="name-profession pb-3 details w-1/2 ">
      <h3 className="text-[65px] font-medium tracking-[-1px] mb-[11px] inline leading-none ">
        {name}
        <img src={hand} alt="" className="hand-wave ps-[10px] inline-block" />
      </h3>
      <span className="profession inline-block relative pl-20 mt-2 text-[20px] font-light text-gray-800">
        {profession}
      </span>
    </div>
  );
};

export default PersonalInfo;
