import React from "react";
import dev from "../../assets/images/dev.jpg";

const HomeImage = () => {
  return (
    <div className="relative inline-block">
      <img src={dev} alt="developer" className="max-w-[600px]" />
    </div>
  );
};

export default HomeImage;
