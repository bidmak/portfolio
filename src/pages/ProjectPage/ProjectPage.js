import React from "react";
import ProjectGridItems from "../../components/Common/ProjectGridItems";

const ProjectPage = ({ id, projects, processPopup }) => {
  return (
    <section
      className=" w-full h-auto clear-both float-left bg-neutral-50"
      id={id}
    >
      <div className=" w-full h-auto clear-both float-left py-[120px]">
        <div className="container px-24">
          <div className=" w-full float-left">
            <h3 className="tracking-[-1px] text-[40px] font-bold">
              My Projects
            </h3>
          </div>
          <div className=" w-full h-auto clear-both float-left mt-[80px]">
            <ProjectGridItems projects={projects} processPopup={processPopup} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
