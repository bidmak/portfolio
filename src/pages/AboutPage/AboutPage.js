import React from "react";
import AboutMeFull from "../../components/Common/AboutMeFull";
import MySkills from "../../components/Common/MySkills";

const AboutPage = ({ id, aboutDetails, mySkills }) => {
  return (
    <section class=" w-full h-auto clear-both float-left" id={id}>
      <div class="w-full h-auto clear-both float-left bg-[#6244C5] text-neutral-950 px-24 mx-auto py-[80px]">
        <div class=" w-full h-auto max-w-[1070px] mx-auto my-0 flex items-start space-x-10">
          <AboutMeFull
            aboutDetails={aboutDetails}
            className="w-[65%] relative pr-[38px]"
          />
          <MySkills mySkills={mySkills} className="w-[35%]" />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
