import React, { useState, useEffect } from "react";
import BigPhoto from "../main/BigPhoto";
import Subphoto from "./SubPhoto";
import "../css/Stories.css";

// 이미지
import bigImg from "../image/todayBigImg.webp";
import subImg1 from "../image/todaySmallImg1.webp";
import subImg2 from "../image/todaySmallImg2.webp";
import subImg3 from "../image/todaySmallImg3.webp";
import subImg4 from "../image/todaySmallImg4.webp";

const Stories = () => {
  const [className, setClassName] = useState("todayImage");
  const [subClassName, setSubClassName] = useState("todayBox");

  const bigImgInfo = {
    title: '코모의 햇살 아래, \n 정해인의 "이탈리안 뷰티"',
    subTitle: "패션 화보",
    date: "2025.03.20",
  };

  const subPhotos = [
    {
      imgSrc: subImg1,
      type: "Lifestyle",
      title: "메종 페리에 주에가 선보이는 예술에 대한 찬사",
      date: "2025.03.14",
      by: "by 이재은",
    },
    {
      imgSrc: subImg2,
      type: "패션 트렌드",
      title: "올봄 안 입고는 못 배길 청바지, 스키니 부츠컷!",
      date: "2025.03.20",
      by: "by 이소미",
    },
    {
      imgSrc: subImg3,
      type: "패션 아이템",
      title: "미니멀 스타일이 지겹던 참이라면, '이 로고'에 주목해보세요",
      date: "2025.03.20",
      by: "by 박소연",
    },
    {
      imgSrc: subImg4,
      type: "아트",
      title: "봄에 찾아온 사진전 3",
      date: "2025.03.20",
      by: "by 이정미",
    },
  ];

  return (
    <>
      <div className="stories">
        <div className="typeName">
          <h1>TODAY’S STORIES</h1>
        </div>
        <div className="PhotosContainer">
          <BigPhoto
            className={className}
            bigImg={bigImg}
            bigImgInfo={bigImgInfo}
          />
          <div className="subPhotosContainer">
            {subPhotos.map((subData, index) => (
              <Subphoto
                key={index}
                className={subClassName}
                subData={subData}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stories;
