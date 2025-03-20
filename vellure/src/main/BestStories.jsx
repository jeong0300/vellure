import "../css/BestStories.css";

import Subphoto from "./SubPhoto";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

//이미지
import bestImg1 from "../image/bestPhoto1.webp";
import bestImg2 from "../image/bestPhoto2.webp";
import bestImg3 from "../image/bestPhoto3.webp";
import bestImg4 from "../image/bestPhoto4.webp";
import bestImg5 from "../image/bestPhoto5.webp";
import bestImg6 from "../image/bestPhoto6.webp";
import bestImg7 from "../image/bestPhoto7.webp";
import bestImg8 from "../image/bestPhoto8.webp";

const BestStories = () => {
  const bestPhotos = [
    {
      imgSrc: bestImg1,
      type: "Lifestyle",
      title: "메종 페리에 주에가 선보이는 예술에 대한 찬사",
      date: "2025.03.14",
      by: "by 이재은",
    },
    {
      imgSrc: bestImg2,
      type: "패션 트렌드",
      title: "올봄 안 입고는 못 배길 청바지, 스키니 부츠컷!",
      date: "2025.03.20",
      by: "by 이소미",
    },
    {
      imgSrc: bestImg3,
      type: "패션 아이템",
      title: "미니멀 스타일이 지겹던 참이라면, '이 로고'에 주목해보세요",
      date: "2025.03.20",
      by: "by 박소연",
    },
    {
      imgSrc: bestImg4,
      type: "아트",
      title: "봄에 찾아온 사진전 3",
      date: "2025.03.20",
      by: "by 이정미",
    },
    {
      imgSrc: bestImg5,
      type: "아트",
      title: "봄에 찾아온 사진전 3",
      date: "2025.03.20",
      by: "by 이정미",
    },
    {
      imgSrc: bestImg6,
      type: "아트",
      title: "봄에 찾아온 사진전 3",
      date: "2025.03.20",
      by: "by 이정미",
    },
    {
      imgSrc: bestImg7,
      type: "아트",
      title: "봄에 찾아온 사진전 3",
      date: "2025.03.20",
      by: "by 이정미",
    },
    {
      imgSrc: bestImg8,
      type: "아트",
      title: "봄에 찾아온 사진전 3",
      date: "2025.03.20",
      by: "by 이정미",
    },
  ];

  return (
    <>
      <div className="bestStories">
        <div className="typeName">
          <h1>BEST STORIES</h1>
          <div className="imgBtn"></div>
        </div>
        <div className="bestImgs">
          <Swiper
            spaceBetween={bestPhotos.length}
            slidesPerView={4}
            breakpoints={{
              1024: {
                slidesPerGroup: 4,
              },
              768: {
                slidesPerGroup: 3,
              },
              500: {
                slidesPerGroup: 2,
              },
            }}
            navigation
          >
            {bestPhotos.map((bestData, index) => (
              <SwiperSlide key={index}>
                <Subphoto className="bestBox" subData={bestData} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default BestStories;
