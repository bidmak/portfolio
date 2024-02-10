import React from "react";
import { TbArrowNarrowDown } from "react-icons/tb";
import FollowMe from "../../components/Common/FollowMe";
import developer from "../../assets/images/developer.svg";
import hand from "../../assets/icons/hand.svg";
import "./HomePage.css";

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
      <div className="container relative home-content">
        <div className="home-content flex items-center">
          <div className="pb-40 lg:pb-20 space-y-4 lg:w-1/2">
            <div className=" space-y-5  ">
              <div className="max-w-[300px] lg:max-w-full">
                <h3 className="text-[38px] lg:text-[65px] font-semibold tracking-[-0.5px] mb-[11px] inline leading-none dark:text-white">
                  {name}
                  <img
                    src={hand}
                    alt="hand-wave"
                    className="inline-block w-[43px] lg:w-[58px] hand-wave ps-[10px]"
                  />
                </h3>
              </div>
              <span className="profession block relative pl-20 mt-2 text-[20px] font-light text-neutral-800 lg:text-neutral-700 before:bg-neutral-700 dark:text-neutral-200 dark:before:bg-neutral-200">
                {profession}
              </span>
            </div>
            <div className="max-w-[460px] lg:max-w-[400px]">
              <p className="text-[15px] text-neutral-700 lg:text-neutral-600 dark:text-neutral-400 font-light leading-[26px]">
                {aboutMe}
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[210px] lg:bottom-[110px] flex items-center">
          <FollowMe
            followLinks={followLinks}
            lnkStyle="w-[46px] h-[46px] lg:w-[52px] lg:h-[52px] bg-neutral-200/[.5] lg:group-hover:bg-neutral-800 dark:bg-neutral-600 lg:dark:hover:bg-neutral-50 rounded-full  "
            iconStyle="dark:fill-white lg:group-hover:fill-white lg:dark:group-hover:fill-black lg:group-hover:text-2xl"
          />
        </div>
        <div className="absolute -translate-x-2/4 bottom-[110px] lg:bottom-[28px] left-[50%] z-[10] rounded-full bg-transparent border-2 border-black dark:border-white ">
          <TbArrowNarrowDown size={22} className="animate-bounce mb-2 mt-2" />
          <button
            onClick={(e) => scrollToSection("about", e)}
            className="absolute inset-0"
          ></button>
        </div>
        <div className="hidden lg:block lg:absolute lg:-translate-x-[50%] lg:left-[75%] lg:w-[45%] lg:h-[80%] lg:bottom-[80px] xl:w-[50%] xl:h-full xl:bottom-0 2xl:h-[90%] 2xl:bottom-[60px] 2xl:left-[70%]  ">
          <div
            className="w-full h-full bg-cover bg-center scale-x-[-1]"
            style={{ backgroundImage: `url(${developer})` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
