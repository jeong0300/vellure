import BigPhoto from "../main/BigPhoto";
import Subphoto from "./SubPhoto";
import "../css/Stories.css";

// 이미지
import bigImg from "../image/todayBigImg.webp";
import subImg1 from "../image/todaySmallImg1.webp";
import subImg2 from "../image/todaySmallImg2.webp";
import subImg3 from "../image/todaySmallImg3.webp";
import subImg4 from "../image/todaySmallImg4.webp";

import bigBeautyImg from "../image/beauty1.webp";
import subBeautyImg1 from "../image/beauty2.webp";
import subBeautyImg2 from "../image/beauty3.webp";
import subBeautyImg3 from "../image/beauty4.webp";
import subBeautyImg4 from "../image/beauty5.webp";

import bigFashionImg from "../image/fashion1.webp";
import subFashionImg1 from "../image/fashion2.webp";
import subFashionImg2 from "../image/fashion3.webp";
import subFashionImg3 from "../image/fashion4.webp";
import subFashionImg4 from "../image/fashion5.webp";

// today 데이타
const todayBigImgInfo = {
  imgSrc: bigImg,
  title: '코모의 햇살 아래, \n 정해인의 "이탈리안 뷰티"',
  subTitle: "패션 화보",
  date: "2025.03.20",
};

const todaySubPhotos = [
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

// beauty 데이터
const beautyBigImgInfo = {
  imgSrc: bigBeautyImg,
  title: "올봄 우리가 반드시 꽃놀이를 \n 가야 하는 정신적인 이유",
  subTitle: "웰니스",
  date: "2025.03.20",
};

const beautySubPhotos = [
  {
    imgSrc: subBeautyImg1,
    type: "뷰티 트랜드",
    title: "지지 하디드는 황금기를 맞고 있다",
    date: "2025.03.20",
    by: "by 황혜원, Margaux Anboba",
  },
  {
    imgSrc: subBeautyImg2,
    type: "웰니스",
    title: "할머니의 취미가 유행하고 있습니다",
    date: "2025.03.18",
    by: "by 황혜원, Jeanne Ballion",
  },
  {
    imgSrc: subBeautyImg3,
    type: "뷰티 트렌드",
    title: "얼굴에 콕, 매력 점! 3월 셋째 주의 뷰티 인스타그램",
    date: "2025.03.18",
    by: "by 이정미",
  },
  {
    imgSrc: subBeautyImg4,
    type: "뷰티 트렌드",
    title: "손끝에 반짝이 보석, 네일 피어싱!",
    date: "2025.03.18",
    by: "by 김초롱",
  },
];

// fashion 데이터
const fashionBigImgInfo = {
  imgSrc: bigFashionImg,
  title: "지수, 프린세스 디올",
  subTitle: "패션 화보",
  date: "2025.03.19",
};

const fashionSubPhotos = [
  {
    imgSrc: subFashionImg1,
    type: "패션 아이템",
    title: "올봄 우아해지는, 올봄 가냘픈 신발",
    date: "2025.03.21",
    by: "by 이소미",
  },
  {
    imgSrc: subFashionImg2,
    type: "패션 화보",
    title: "CARPE DIEM!",
    date: "2025.03.21",
    by: "by 최보경",
  },
  {
    imgSrc: subFashionImg3,
    type: "Fashion",
    title: "Behind the Field",
    date: "2025.03.21",
    by: "by 서명희",
  },
  {
    imgSrc: subFashionImg4,
    type: "패션 뉴스",
    title: '"회의 중에 휴대폰이 울려서 봤더니 톰 포드더군요" 하이더 아커만',
    date: "2025.03.21",
    by: "by 김다혜",
  },
];

const Stories = (props) => {
  const { title } = props;

  const isToday = title === "TODAY’S STORIES";
  const isBeauty = title === "BEAUTY";
  const isFashion = title === "FASHION";
  const isNone = title === "";

  const bigImgInfo = isBeauty
    ? beautyBigImgInfo
    : isFashion
    ? fashionBigImgInfo
    : todayBigImgInfo;
  const subPhotos = isBeauty
    ? beautySubPhotos
    : isFashion
    ? fashionSubPhotos
    : todaySubPhotos;

  return (
    <>
      <div className={`stories ${isBeauty ? "beauty" : ""}`}>
        {!isNone ? (
          <div className="storiesTypeName">
            <h1>{title}</h1>
            {isBeauty || isFashion ? (
              <div className="moreText"> MORE {">"} </div>
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
