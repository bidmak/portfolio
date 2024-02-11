import React, { useState } from "react";
import { CgCloseR, CgCloseO } from "react-icons/cg";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Popup.css";

const Popup = ({ popup, setPopup, popItems }) => {
  const backgroundImageUrl = popItems.imgUrl;
  const [isHovered, setIsHovered] = useState(false);

  return popup ? (
    <div
      className="popup bg-black/[.8] lg:bg-black/[.85] z-30"
      onClick={() => setPopup(false)}
    >
      <div
        className="popup-inner top-[110px] bottom-[10px] sm:top-[80px] md:top-[60px] md:bottom-[60px] lg:top-[50px] lg:bottom-[50px] w-[320px] sm:w-[500px] md:w-[560px] lg:w-[760px] py-[20px] md:py-[30px] lg:py-[40px] rounded bg-white dark:bg-gray-500"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="fixed top-[-52px] right-0 text-[37px] lg:text-[42px] md:top-[-3px] md:right-[-50px] lg:right-[-60px] text-white hover:text-gray-100 z-40"
          onClick={(e) => {
            e.preventDefault();
            setIsHovered(false);
            setPopup(false);
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? <CgCloseO /> : <CgCloseR />}
        </button>
        <div className="popup-box">
          <div className="w-full h-full px-[20px] md:px-[30px] lg:px-[40px]">
            {backgroundImageUrl && (
              <div
                className="rounded w-full h-[160px] sm:h-[230px] md:h-[260px] lg:h-[360px] shadow-lg shadow-indigo-500/50 mb-5 bg-cover md:hover:bg-center ease-out duration-500"
                style={{ backgroundImage: `url(${backgroundImageUrl})` }}
              ></div>
            )}
            <div className="font-semibold text-[23px] sm:text-[26px] md:text-[28px] lg:text-[30px] mt-4 mb-1 flex justify-start items-center">
              <h3 className="pr-3 sm:pr-4  dark:text-white">
                {popItems.title}
              </h3>
              {popItems.title && popItems.projectLink && (
                <a
                  className="text-[20px] sm:text-[23px] md:text-[24px] lg:text-2xl lg:hover:text-3xl"
                  href={popItems.projectLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
            <div className="mb-[10px] sm:mb-[8px] md:mb-[10px] sm:flex justify-between items-center">
              <h3 className="font-medium text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-gray-600 dark:text-gray-200">
                {popItems.company}
              </h3>
              {popItems.startDate && popItems.endDate && (
                <span className="text-[15px] lg:text-base text-gray-700 dark:text-gray-200">
                  {popItems.startDate} - {popItems.endDate}
                </span>
              )}
            </div>
            <div className="description">
              {popItems.description &&
                popItems.description.map((line) => {
                  return (
                    <p className="mb-[15px] lg:mb-[16px] text-[15px] lg:text-base text-gray-600 dark:text-gray-300">
                      {line}
                    </p>
                  );
                })}
            </div>
            {popItems.additionalImages && (
              <div className="py-4 grid-container grid grid-cols-1 md:grid-cols-2 gap-6">
                {popItems.additionalImages.map((img, index) => {
                  return (
                    <div
                      className={`grid-item rounded shadow-md bg-cover ${
                        index === 0
                          ? "md:col-span-2 h-[160px] sm:h-[230px] md:h-[260px] lg:h-[360px]"
                          : "h-[160px] sm:h-[230px] md:h-[150px] lg:h-[200px]"
                      } ${
                        index % 2 === 0
                          ? "shadow-[#FFC448]/50"
                          : "shadow-indigo-500/50"
                      }
                      `}
                      style={{
                        backgroundImage: `url(${img})`,
                      }}
                    ></div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Popup;
