import React, { useState } from "react";
import { CgCloseR, CgCloseO } from "react-icons/cg";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Popup.css";

const Popup = ({ popup, setPopup, popItems }) => {
  const backgroundImageUrl = popItems.imgUrl;

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
  };

  const [isHovered, setIsHovered] = useState(false);

  return popup ? (
    <div className="popup bg-black/[.9] z-30" onClick={() => setPopup(false)}>
      <div
        className="popup-inner rounded bg-white dark:bg-gray-500"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close text-white hover:text-gray-100 z-40"
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
          <div className="popup-informations">
            {backgroundImageUrl && (
              <div
                className="image rounded shadow-md mb-5 bg-cover hover:bg-center ease-out duration-500"
                style={containerStyle}
              ></div>
            )}
            <div className="title mt-4 flex justify-start items-center">
              <h3 className="pr-4 dark:text-white">{popItems.title}</h3>
              {popItems.title && popItems.projectLink && (
                <a
                  className="text-2xl hover:text-3xl"
                  href={popItems.projectLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
            <div className="company mb-2  flex justify-between items-center">
              <h3 className="text-gray-600 dark:text-gray-200">
                {popItems.company}
              </h3>
              {popItems.startDate && popItems.endDate && (
                <span className="text-gray-700 dark:text-gray-200">
                  {popItems.startDate} - {popItems.endDate}
                </span>
              )}
            </div>
            <div className="pop-description">
              <ul className="list-none">
                {popItems.description &&
                  popItems.description.map((line) => {
                    return (
                      <>
                        <li className="text-gray-950 dark:text-gray-300">
                          {line}
                        </li>
                        <br />
                      </>
                    );
                  })}
              </ul>
            </div>
            {popItems.additionalImages && (
              <div className="grid-container grid grid-cols-2 gap-6">
                {popItems.additionalImages.map((img, index) => {
                  return (
                    <div
                      className={`grid-item rounded shadow-md bg-cover ${
                        index === 0 ? "col-span-2 h-[360px]" : "h-[200px]"
                      }`}
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
