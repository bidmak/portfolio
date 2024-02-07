import React from "react";
import "./HomePage.css";
import { HiArrowDown } from "react-icons/hi";
import PersonalInfo from "../../components/Common/PersonalInfo";
import AboutMe from "../../components/Common/AboutMe";
import FollowMe from "../../components/Common/FollowMe";
import developer from "../../assets/images/developer.svg";

const HomePage = ({ id, name, profession, aboutMe, followLinks }) => {
  return (
    <section
      id={id}
      className="w-full bg-neutral-50 dark:bg-neutral-800 max-h-[100vh] relative float-left"
    >
      <div className="details container min-h-[100vh] relative">
        <div className="name  min-h-[100vh] relative flex items-center justify-between">
          <div className="pb-20 space-y-4">
            <PersonalInfo name={name} profession={profession} />
            <AboutMe aboutMe={aboutMe} />
          </div>
        </div>
        <div className="follow absolute bottom-[80px] flex items-center">
          <FollowMe
            followLinks={followLinks}
            lnkStyle="w-[52px] h-[52px] bg-neutral-100 group-hover:bg-neutral-800 dark:bg-neutral-600 dark:hover:bg-neutral-50 rounded-full  "
            iconStyle="dark:fill-white group-hover:fill-white dark:group-hover:fill-black group-hover:text-2xl"
          />
        </div>
      </div>
      <div className="absolute w-1/2 bottom-0 top-0  right-0 ">
        <div
          className="w-full h-full bg-cover bg-center scale-x-[-1]"
          style={{ backgroundImage: `url(${developer})` }}
        ></div>
        <HiArrowDown size={32} className="animate-bounce	mb-4" />
      </div>
    </section>
  );
};

export default HomePage;
