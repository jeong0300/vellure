import "../css/Latest.css";
import SubPhoto from "./SubPhoto";

import latestImg1 from "../image/latest1.webp";
import latestImg2 from "../image/latest2.webp";
import latestImg3 from "../image/latest3.webp";
import latestImg4 from "../image/latest4.webp";
import latestImg5 from "../image/latest5.webp";
import latestImg6 from "../image/latest6.webp";
import latestImg7 from "../image/latest7.webp";
import latestImg8 from "../image/latest8.webp";
import latestImg9 from "../image/latest9.webp";
import latestImg10 from "../image/latest10.webp";
import latestImg11 from "../image/latest11.webp";
import latestImg12 from "../image/latest12.webp";

import stickyImg from "../image/stickyImg.jpeg";

const latestSubPhotos = [
  {
    imgSrc: latestImg1,
    type: "패션 아이템",
    title: "미니멀 스타일이 지겹던 참이라면, '이 로고'에 주목해보세요",
    date: "2025.03.20",
    by: "by 한건호",
  },
  {
    imgSrc: latestImg2,
    type: "패션 뉴스",
    title: "유럽에서 가장 높은 런웨이에 착륙한 몽클레르 그레노블",
    date: "2025.03.20",
    by: "by 가남희",
  },
  {
    imgSrc: latestImg3,
    type: "패션 트렌드",
    title: "올봄 안 입고는 못 배길 청바지, 스키니 부츠컷!",
    date: "2025.03.20",
    by: "by 이소미",
  },
  {
    imgSrc: latestImg4,
    type: "패션 뉴스",
    title:
      '"어떤 반응이든 받아들일 준비가 되어 있었습니다" 드리스 반 노튼의 줄리앙 클라우스너',
    date: "2025.03.21",
    by: "by 김다혜",
  },
  {
    imgSrc: latestImg5,
    type: "패션 뉴스",
    title: "다니엘 리가 건넨 7일, 버버리 비하인드 신",
    date: "2025.03.21",
    by: "by 김다혜",
  },
  {
    imgSrc: latestImg6,
    type: "패션 뉴스",
    title: '"여성 스스로를 위한 즐거움을 창출하는 옷" 로렌조 세라피니',
    date: "2025.03.21",
    by: "by 김다혜",
  },
  {
    imgSrc: latestImg7,
    type: "패션 뉴스",
    title: '"지방시는 곧 실루엣이에요" 사라 버튼',
    date: "2025.03.21",
    by: "by 김다혜",
  },
  {
    imgSrc: latestImg8,
    type: "패션 아이템",
    title: "방금 LA에서 돌아왔는데 모두가 '이 운동화'를 신고 있었습니다",
    date: "2025.03.20",
    by: "by 이소미, Daisy Jones",
  },
  {
    imgSrc: latestImg9,
    type: "Fashion",
    title: "모든 분류 체계가 무너지는 곳, 피에르 위그의 '리미널'",
    date: "2025.03.20",
    by: "by 안건호",
  },
  {
    imgSrc: latestImg10,
    type: "Fashion",
    title: "자라와 앤더슨벨이 그리는 초심",
    date: "2025.03.21",
    by: "by 이채은",
  },
  {
    imgSrc: latestImg11,
    type: "패션 뉴스",
    title: "에어프랑스 퍼스트 클래스 승객을 위한 자크뮈스 파자마",
    date: "2025.03.20",
    by: "by 오기쁨",
  },
  {
    imgSrc: latestImg12,
    type: "패션 아이템",
    title: "2025년 봄 '제철 셔츠'는 이것!",
    date: "2025.03.19",
    by: "by 안건호",
  },
];

const Latest = () => {
  return (
    <>
      <div className="latest">
        <div className="latestTypeName">
          <h1> LATEST STORIES </h1>
        </div>
        <div className="latestContainer">
          <div className="leftSub">
            {latestSubPhotos.map((latest, idx) => (
              <SubPhoto key={idx} subData={latest} className="latestBox" />
            ))}
          </div>
          <div className="rightSticky">
            <img src={stickyImg} alt="vellure image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Latest;
