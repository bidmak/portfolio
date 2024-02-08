import React from "react";
import { TbArrowNarrowDown } from "react-icons/tb";
import PersonalInfo from "../../components/Common/PersonalInfo";
import FollowMe from "../../components/Common/FollowMe";
import developer from "../../assets/images/developer.svg";

const HomePage = ({ id, name, profession, aboutMe, followLinks }) => {
  const scrollToSection = (label, e) => {
    e.preventDefault();
    const section = document.getElementById(label);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${label}`);
    }
  };

  return (
    <section
      id={id}
      className="w-full h-auto  bg-neutral-50 dark:bg-neutral-800"
    >
      <div className="container">
        <div className="h-[100vh] flex items-center">
          <div className="pb-20 space-y-4">
            <PersonalInfo name={name} profession={profession} />
            <div className="max-w-[400px]">
              <p className="text-[15px] text-neutral-500 dark:text-neutral-400 font-light leading-[26px]">
                {aboutMe}
              </p>
            </div>
          </div>
        </div>
        <div className="follow absolute bottom-[110px] flex items-center">
          <FollowMe
            followLinks={followLinks}
            lnkStyle="w-[52px] h-[52px] bg-neutral-100 group-hover:bg-neutral-800 dark:bg-neutral-600 dark:hover:bg-neutral-50 rounded-full  "
            iconStyle="dark:fill-white group-hover:fill-white dark:group-hover:fill-black group-hover:text-2xl"
          />
        </div>
        <div className="absolute -translate-x-2/4 bottom-[28px] left-[50%] z-[10] rounded-full bg-transparent border-2 border-black dark:border-white ">
          <TbArrowNarrowDown size={22} className="animate-bounce mb-2 mt-2" />
          <button
            onClick={(e) => scrollToSection("about", e)}
            className="absolute inset-0"
          ></button>
        </div>
      </div>
      <div className="absolute w-1/2 bottom-0 top-0  right-0 ">
        <div
          className="w-full h-full bg-cover bg-center scale-x-[-1]"
          style={{ backgroundImage: `url(${developer})` }}
        ></div>
      </div>
    </section>
  );
};

export default HomePage;
