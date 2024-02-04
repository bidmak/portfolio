import React from "react";
import "./ExperienceDescription.css";

const ExperienceDescription = ({ description }) => {
  return (
    <div className="description pr-[150px]">
      {description && description[0]}
    </div>
  );
};

export default ExperienceDescription;
