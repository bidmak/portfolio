import React from "react";
import AboutMeFull from "../../components/Common/AboutMeFull";
import MySkills from "../../components/Common/MySkills";

const AboutPage = ({ id, aboutDetails, mySkills }) => {
  return (
    <section id={id} className=" w-full clear-both bg-[#6244C5]">
      <div className="container ">
        <div className="flex space-x-16 content-space-y">
          <AboutMeFull
            aboutDetails={aboutDetails}
            className="w-[60%] relative"
          />
          <MySkills mySkills={mySkills} className="w-[40%]" />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
