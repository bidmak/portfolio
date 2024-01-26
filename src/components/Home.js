import React from "react";
import hand from "../hand.svg";
import instagram from "../instagram.svg";
import dev from "../dev.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="portfolio-home w-full min-h-[100vh] relative float-left"
    >
      <div className="details container px-24 mx-auto min-h-[100vh]">
        <div className="name  min-h-[100vh] relative flex items-center justify-between">
          <div className="pb-28">
            <div className="name-profession pb-3 details w-1/2 ">
              <h3 className="text-[65px] font-medium tracking-[-1px] mb-[11px] inline leading-none ">
                Samuel Makanjuola
                <img
                  src={hand}
                  alt=""
                  className="hand-wave ps-[10px] inline-block"
                />
              </h3>
              <span className="profession inline-block relative pl-20 mt-2 text-[20px] font-light text-gray-800">
                Software Engineer
              </span>
            </div>
            <div className="descriptiion font-light text-m w-4/5">
              <p className="text-[15px] text-[#5A5A5A] leading-[26px] max-w-[400px]">
                I'm a versatile{" "}
                <span className="font-medium ">Software Engineer</span>, based
                in Glasgow, UK, dedicated to bringing creative ideas to life
                through robust and user-friendly applications.
              </p>
            </div>
          </div>
        </div>
        <div className="follow absolute bottom-[80px] flex items-center">
          <span class="text-[16px] font-medium">Follow me:</span>
          <ul class="flex items-center relative top-[5px] ml-[20px]">
            <li>
              <a
                class="inline-block relative w-[56px] h-[56px] bg-[#F6F6F6] rounded-full  hover:bg-stone-300"
                href="#"
              >
                <img
                  src={instagram}
                  alt="instagram"
                  class="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute w-1/2 bottom-0 right-[20px] text-center">
        <div className="relative inline-block">
          <img src={dev} alt="developer" className="max-w-[600px]" />
        </div>
      </div>
    </section>
  );
};

export default Home;
