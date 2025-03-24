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

  let bigImgInfo;
  let subPhotos;

  // title 별 데이터 및 컴포넌트 순서 변경 -> MainPage
  if (isBeauty) {
    bigImgInfo = beautyBigImgInfo;
    subPhotos = beautySubPhotos;
  } else if (isFashion) {
    bigImgInfo = fashionBigImgInfo;
    subPhotos = fashionSubPhotos;
  } else if (isToday) {
    bigImgInfo = todayBigImgInfo;
    subPhotos = todaySubPhotos;
  } else {
    bigImgInfo = fashionBigCate;
    subPhotos = fashionSubCate;
  }

  // category 별 데이터 변경 -> CategoryPage
  if (category === "FASHION") {
    bigImgInfo = fashionBigCate;
    subPhotos = fashionSubCate;
  } else if (category === "BEAUTY") {
    bigImgInfo = beautyBigCate;
    subPhotos = beautySubCate;
  } else if (category === "LIFESTYLE") {
    bigImgInfo = lifeBigCate;
    subPhotos = lifeSubCate;
  } else if (category === "CULTURE") {
    bigImgInfo = cultureBigCate;
    subPhotos = cultureSubCate;
  } else if (category === "VIDEO") {
    bigImgInfo = videoBigCate;
    subPhotos = videoSubCate;
  }

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
              <BigPhoto className="todayImage" bigImgInfo={bigImgInfo} />
              <div className="subPhotosContainer">
                {subPhotos.map((subData, index) => (
                  <Subphoto
                    key={index}
                    className="todayBox"
                    subData={subData}
                  />
                ))}
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
