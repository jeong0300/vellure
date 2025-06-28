import React, { useState, useEffect } from "react";

import "../css/Carosel.css";
import caroselImg from "../image/caroselImg.jpg";
import caroselImgMedia from "../image/caroselmg(media).jpg";

const Carosel = () => {
  const [currentLogo, setCurrentLogo] = useState(caroselImg);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCurrentLogo(caroselImgMedia);
      } else {
        setCurrentLogo(caroselImg);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="carosel">
        <img className="mainImg" src={currentLogo} alt="carosel image" />
        <div className="texts">
          <div className="flexText">
            Fasion <div className="optext">| 2025.03.20</div>
          </div>
          <div className="title"> 최수영이 부치는 밀라노발 엽서 </div>
        </div>
      </div>
    </>
  );
};

export default Carosel;
