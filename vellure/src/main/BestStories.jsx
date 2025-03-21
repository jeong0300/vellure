import "../css/BestStories.css";

import Subphoto from "./SubPhoto";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

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
      type: "패션 아이템",
      title: "방금 LA에서 돌아왔는데 모두가 '이 운동화'를 신고 있었습니다",
      date: "2025.03.20",
      by: "by 이소미, Daisy Jones",
    },
    {
      imgSrc: bestImg5,
      type: "셀러브리티 스타일",
      title: "앤 해서웨이의 운동화에 자꾸만 눈이 가는 이유",
      date: "2025.03.18",
      by: "by 이소미",
    },
    {
      imgSrc: bestImg6,
      type: "패션 트랜드",
      title: "봄옷이 고민이라면, 우선 재킷과 청바지를 꺼내세요",
      date: "2025.03.18",
      by: "by 안건호",
    },
    {
      imgSrc: bestImg7,
      type: "셀러브리티 스타일",
      title: "올봄 멋 부리고 싶은 날은 이모 조끼에 청바지!",
      date: "2025.03.18",
      by: "by 활혜원",
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
        <div className="bestTypeName">
          <h1>BEST STORIES</h1>
          <div className="imgBtn"></div>
        </div>
        <div className="bestImgs">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={4}
            slidesPerGroup={4}
            breakpoints={{
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              500: {
                slidesPerView: 2,
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
