import React from "react";
import "./ExperiencePage.css";
import Experience from "../../components/Common/Experience";

const ExperiencePage = ({ id, experiences, processPopup }) => {
  return (
    <section
      class=" w-full clear-both bg-neutral-100 dark:bg-[#252439] "
      id={id}
    >
      <div class="container">
        <div class="w-full space-y-10 content-space-y dark:text-neutral-500 ">
          <div class="w-full">
            <h3 class="text-heading">Experiences</h3>
          </div>
          <div class=" w-full h-auto  relative">
            <Experience experiences={experiences} processPopup={processPopup} />
            <span class="ccc"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
