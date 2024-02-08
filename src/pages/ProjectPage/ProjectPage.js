import React from "react";
import ProjectGridItems from "../../components/Common/ProjectGridItems";

const ProjectPage = ({ id, projects, processPopup }) => {
  return (
    <section
      className="w-full clear-both bg-neutral-50 dark:bg-[#302f43]"
      id={id}
    >
      <div className="container">
        <div className="w-full content-space-y space-y-14">
          <div className="w-full">
            <h3 className="text-heading">My Projects</h3>
          </div>
          <div className="w-full h-auto">
            <ProjectGridItems projects={projects} processPopup={processPopup} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
