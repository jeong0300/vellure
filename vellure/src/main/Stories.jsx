import BigPhoto from "../main/BigPhoto";
import Subphoto from "./SubPhoto";
import "../css/Stories.css";

import {
  todayBigImgInfo,
  todaySubPhotos,
  beautyBigImgInfo,
  beautySubPhotos,
  fashionBigImgInfo,
  fashionSubPhotos,
  fashionBigCate,
  fashionSubCate,
  beautyBigCate,
  beautySubCate,
  lifeBigCate,
  lifeSubCate,
  cultureBigCate,
  cultureSubCate,
  videoBigCate,
  videoSubCate,
} from "../data/storiesData";
import { Link } from "react-router-dom";

const Stories = (props) => {
  const { title, category } = props;

  const isToday = title === "TODAY’S STORIES";
  const isBeauty = title === "BEAUTY";
  const isFashion = title === "FASHION";
  const isNone = title === "";

  const bigImgInfo = isBeauty
    ? beautyBigImgInfo
    : isFashion
    ? fashionBigImgInfo
    : isToday
    ? todayBigImgInfo
    : fashionBigCate;

  const subPhotos = isBeauty
    ? beautySubPhotos
    : isFashion
    ? fashionSubPhotos
    : isToday
    ? todaySubPhotos
    : fashionSubCate;

  return (
    <>
      <div className={`stories ${isBeauty ? "beauty" : ""}`}>
        {!isNone ? (
          <div className="storiesTypeName">
            <h1>{title}</h1>
            {isBeauty || isFashion ? (
              <Link to={`/${title}`} onClick={() => window.scrollTo(0, 0)}>
                <div className="moreText"> MORE {">"} </div>
              </Link>
            ) : (
              ""
            )}
          </div>
        ) : (
          <div></div>
        )}

        <div className="PhotosContainer">
          {isBeauty || isToday || isNone ? (
            <>
              <BigPhoto
                className="todayImage"
                bigImgInfo={
                  category === "FASHION"
                    ? bigImgInfo
                    : category === "BEAUTY"
                    ? beautyBigCate
                    : category === "LIFESTYLE"
                    ? lifeBigCate
                    : category === "CULTURE"
                    ? cultureBigCate
                    : category === "VIDEO"
                    ? videoBigCate
                    : bigImgInfo
                }
              />
              <div className="subPhotosContainer">
                {subPhotos.map((_, index) => {
                  const selectedSubData =
                    category === "FASHION"
                      ? fashionSubCate[index]
                      : category === "BEAUTY"
                      ? beautySubCate[index]
                      : category === "LIFESTYLE"
                      ? lifeSubCate[index]
                      : category === "CULTURE"
                      ? cultureSubCate[index]
                      : category === "VIDEO"
                      ? videoSubCate[index]
                      : subPhotos[index];

                  return (
                    <Subphoto
                      key={index}
                      className="todayBox"
                      subData={selectedSubData}
                    />
                  );
                })}
              </div>
            </>
          ) : (
            <div className="fashionContainer">
              <div className="subPhotosContainer">
                {subPhotos.map((subData, index) => (
                  <Subphoto
                    key={index}
                    className="todayBox"
                    subData={subData}
                  />
                ))}
              </div>
              <BigPhoto className="todayImage" bigImgInfo={bigImgInfo} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Stories;
