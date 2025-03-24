import "../css/GridNews.css";

import SubPhoto from "./SubPhoto";

import { mustData, lifeData, cultureData } from "../data/GridNewsData";
import { Link } from "react-router-dom";

const GridNews = (props) => {
  const { title } = props;

  const isMust = title === "MUST READ";
  const isLifeStyle = title === "LIFESTYLE";
  const isCulture = title === "CULTURE";

  const subPhotos = isMust ? mustData : isLifeStyle ? lifeData : cultureData;

  return (
    <>
      <div
        className={`mustContainer ${
          isLifeStyle || isCulture ? "noneMargin" : ""
        }`}
      >
        <div className="mustTypeName">
          <h1>{title}</h1>
          {isLifeStyle || isCulture ? (
            <Link to={`/${title}`} onClick={() => window.scrollTo(0, 0)}>
              <div className="moreText"> MORE {">"} </div>
            </Link>
          ) : (
            ""
          )}
        </div>
        <div className="mustImgBox">
          {subPhotos.map((data, index) => (
            <SubPhoto key={index} className="mustBox" subData={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GridNews;
