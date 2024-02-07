import React from "react";
import { ImCancelCircle } from "react-icons/im";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Popup.css";

const Popup = ({ popup, setPopup, popItems }) => {
  const backgroundImageUrl = popItems.imgUrl;

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
  };
  return popup ? (
    <div className="popup z-40" onClick={() => setPopup(false)}>
      <div
        className="popup-inner rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="popup-box">
          <div className="close">
            <button
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPopup(false);
              }}
            >
              <ImCancelCircle />
            </button>
          </div>
          <div className="popup-informations">
            {backgroundImageUrl && (
              <div
                className="image rounded-lg shadow-md mb-5 bg-cover hover:bg-center ease-out duration-300"
                style={containerStyle}
              ></div>
            )}
            <div className="title mt-4 flex justify-start items-center">
              <h3 className="pr-4">{popItems.title}</h3>
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
              <h3 className="text-gray-600">{popItems.company}</h3>
              {popItems.startDate && popItems.endDate && (
                <span className="text-gray-700">
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
                        <li className="text-gray-950">{line}</li>
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
                      className={`grid-item rounded-lg shadow-md bg-cover hover:bg-center ease-out duration-300 ${
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
