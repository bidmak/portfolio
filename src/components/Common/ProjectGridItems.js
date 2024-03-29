import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

const ProjectGridItems = ({ projects, processPopup }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {projects.map(
        (
          {
            projectName,
            projectType,
            description,
            imgUrl,
            additionalImages,
            projectLink,
            stacks,
          },
          index
        ) => {
          const isHovered = hovered === index;
          return (
            <div
              key={index}
              className="group relative rounded shadow-lg shadow-indigo-500/50"
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
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="rounded h-52 sm:h-80 md:h-96 lg:h-72 w-full bg-cover bg-left-top sm:bg-center"
                style={{
                  backgroundImage: `url(${imgUrl})`,
                }}
              ></div>
              {isHovered && (
                <div
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
                  className="absolute rounded inset-0 bg-black/[.9] cursor-pointer flex items-center justify-center"
                >
                  <div className="text-center text-neutral-50 space-y-8">
                    <div className=" space-y-2">
                      <h3 className="text-xl font-semibold">{projectName}</h3>
                      <h3 className="text-neutral-400 text-lg font-medium">
                        {projectType}
                      </h3>
                      <h3 className="flex justify-center divide-x-2 divide-indigo-400 text-indigo-300 text-lg font-medium">
                        {stacks.map((stack, index) => {
                          return (
                            <p className="px-2" key={index}>
                              {stack}
                            </p>
                          );
                        })}
                      </h3>
                    </div>
                    <div className="flex justify-center">
                      <div className="border-b w-fit">
                        <span className="font-normal text-sm">Read More</span>
                        <BsArrowUpRight className="inline-block w-[18px] h-[18px] ms-2 mt-[2px]" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        }
      )}
    </div>
  );
};

export default ProjectGridItems;
