import React from "react";
import ProjectGridItems from "../../components/Common/ProjectGridItems";

const ProjectPage = ({ id, projects, processPopup }) => {
  return (
    <section
      className="orido_tm_section w-full h-auto clear-both float-left bg-gray-300"
      id={id}
    >
      <div className="orido_tm_news w-full h-auto clear-both float-left py-[120px]">
        <div className="container px-24">
          <div className="orido_tm_main_title w-full float-left">
            <h3 className="tracking-[-2px] text-[56px] font-bold">
              <span className="relative">My Projects</span>
            </h3>
          </div>
          <div className="news_list w-full h-auto clear-both float-left mt-[100px]">
            <ProjectGridItems projects={projects} processPopup={processPopup} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
