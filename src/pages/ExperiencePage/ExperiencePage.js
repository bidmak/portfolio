import React from "react";
import Experience from "../../components/Common/Experience";

const ExperiencePage = ({ id, experiences, processPopup }) => {
  return (
    <section
      className=" w-full clear-both bg-neutral-100 dark:bg-[#252439]"
      id={id}
    >
      <div className="container">
        <div className="w-full space-y-14 content-space-y">
          <div className="w-full">
            <h3 className="text-heading dark:text-white ">Experiences</h3>
          </div>
          <div>
            <Experience experiences={experiences} processPopup={processPopup} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
