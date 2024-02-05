import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const ProjectGridItems = ({ projects, processPopup }) => {
  return (
    <div className="grid-container grid grid-cols-2 gap-8">
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
              <div className="relative text-start group rounded-lg bg-white divide-y-2 divide-gray-300 ">
                <div
                  className="h-[240px] w-full rounded-t-lg bg-cover duration-300 ease-out hover:bg-center"
                  style={{
                    backgroundImage: `url(${imgUrl})`,
                  }}
                ></div>
                <div className="flex font-semibold py-4 px-6">
                  <div className="flex-1 space-y-2">
                    <h3 className="  text-xl font-semibold">{projectName}</h3>
                    <h3 className=" text-neutral-500 text-lg font-medium">
                      {projectType}
                    </h3>
                  </div>
                  <div className="flex text-base group-hover:underline group-hover:underline-offset-2 ">
                    <span className="font-normal group-hover:font-semibold">
                      Read More
                    </span>
                    <BsArrowUpRight className="w-[20px] h-[20px] group-hover:stroke-1 mt-[2px]" />
                  </div>
                </div>
              </div>
            </button>
          );
        }
      )}
    </div>
  );
};

export default ProjectGridItems;
