import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const ProjectGridItems = ({ projects, processPopup }) => {
  return (
    <div className="grid-container grid grid-cols-2 gap-4">
      {projects.map(
        ({
          projectName,
          projectType,
          description,
          imgUrl,
          additionalImages,
          projectLink,
        }) => {
          return (
            <button
              onClick={(e) => {
                e.preventDefault();
                processPopup({
                  title: projectName,
                  company: projectType,
                  description,
                  imgUrl,
                  additionalImages,
                  projectLink,
                });
              }}
            >
              <div className="grid-item group bg-slate-50 flex justify-between items-center p-2 rounded-lg border-[1px] border-slate-400 transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
                <div className="details font-semibold text-lg ps-2">
                  <h3 className="text-start mb-4">{projectType}</h3>
                  <h3 className="text-start mb-4">{projectName}</h3>
                  <div className="flex font-normal text-base group-hover:underline group-hover:underline-offset-4 group-hover:text-blue-800">
                    <span className="mr-2">Read More</span>
                    <BsArrowUpRight className="w-[16px] h-[16px]" />
                  </div>
                </div>
                <div
                  className="grid-img h-[240px] w-[70%] relative border-[1px] border-slate-400 rounded-e-lg  bg-cover group-hover:bg-center ease-out duration-300"
                  style={{
                    backgroundImage: `url(${imgUrl})`,
                  }}
                ></div>
              </div>
            </button>
          );
        }
      )}
    </div>
  );
};

export default ProjectGridItems;
