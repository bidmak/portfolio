import React from "react";
import ExperienceJob from "./ExperienceJob";
import ExperienceDescription from "./ExperienceDescription";
import { BsArrowUpRight } from "react-icons/bs";

const Experience = ({ experiences, processPopup }) => {
  return (
    <ul className="relative z-[2]">
      {experiences.map(
        (
          { startDate, endDate, company, title, description, imgUrl },
          index
        ) => {
          return (
            <li
              key={index}
              className="current relative group hover:bg-[#6244C5] transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300"
            >
              <div
                className={`list-border dark:border-neutral-200 ${
                  index === 0 ? "list-first" : ""
                } w-full flex items-center justify-between relative py-[25px] pl-[25px] pr-[35px] `}
              >
                <div className="left w-[40%] flex items-center group-hover:text-white pr-4">
                  <span class="number inline-block text-[#6244C5] text-[24px] font-dm group-hover:text-white">
                    {"0"}
                    {index + 1}
                  </span>
                  <ExperienceJob title={title} />
                </div>
                <div className="right w-[60%] flex items-center justify-between group-hover:text-white">
                  <ExperienceDescription description={description} />
                  <div className="">
                    <BsArrowUpRight className=" w-[22px] h-[22px]" />
                  </div>
                </div>
                <button
                  className=" absolute inset-0 z-[5]"
                  onClick={(e) => {
                    e.preventDefault();
                    processPopup({
                      startDate,
                      endDate,
                      company,
                      imgUrl,
                      title,
                      description,
                    });
                  }}
                ></button>
              </div>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default Experience;
