import React from "react";
import "./ExperiencePage.css";
import Experience from "../../components/Common/Experience";

const ExperiencePage = ({ id, experiences, processPopup }) => {
  return (
    <section class=" w-full h-auto clear-both float-left bg-neutral-50" id={id}>
      <div class=" w-full h-auto clear-both float-left px-0 py-[120px]">
        <div class="container px-24 mx-auto">
          <div class=" w-full float-left">
            <h3 class=" text-[36px] font-bold">Experiences</h3>
          </div>
          <div class=" w-full h-auto clear-both float-left mt-[70px] relative">
            <Experience experiences={experiences} processPopup={processPopup} />
            <span class="ccc"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
