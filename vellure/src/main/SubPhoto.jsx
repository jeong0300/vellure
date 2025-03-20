import React, { useState, useEffect } from "react";
import "../css/SubPhoto.css";

const Subphoto = (props) => {
  const { className, subData } = props;

  const { imgSrc, type, title, date, by } = subData;

  return (
    <>
      <div className={className}>
        <div className={`${className}Imgs`}>
          <img className={`${className}Img`} src={imgSrc} alt="vellure image" />
        </div>
      </div>
    </>
  );
};

export default Subphoto;
