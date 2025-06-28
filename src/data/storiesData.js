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

import fashionCate from "../image/category_all1.webp";
import fashionCate2 from "../image/category_all2.webp";
import fashionCate3 from "../image/category_all3.webp";
import fashionCate4 from "../image/category_all4.webp";
import fashionCate5 from "../image/category_all5.webp";

import beautyCate1 from "../image/beautyCate1.webp";
import beautyCate2 from "../image/beautyCate2.webp";
import beautyCate3 from "../image/beautyCate3.webp";
import beautyCate4 from "../image/beautyCate4.webp";
import beautyCate5 from "../image/beautyCate5.webp";

import lifeImg1 from "../image/lifeBig1.webp";
import lifeImg2 from "../image/lifeBig2.webp";
import lifeImg3 from "../image/lifeBig3.webp";
import lifeImg4 from "../image/lifeBig4.webp";
import lifeImg5 from "../image/lifeBig5.webp";

import culture1 from "../image/cultureImg1.webp";
import culture2 from "../image/cultureImg2.webp";
import culture3 from "../image/cultureImg3.webp";
import culture4 from "../image/cultureImg4.webp";
import culture5 from "../image/cultureImg5.webp";

import video1 from "../image/videoImg1.webp";
import video2 from "../image/videoImg2.webp";
import video3 from "../image/videoImg3.webp";
import video4 from "../image/videoImg4.webp";
import video5 from "../image/videoImg5.webp";

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
  imgSrc: fashionCate,
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

// 카테고리 별 데이터
const fashionBigCate = {
  imgSrc: fashionCate,
  title: "필릭스의 봄",
  subTitle: "패션 화보",
  date: "2025.03.18",
};

const fashionSubCate = [
  {
    imgSrc: fashionCate2,
    type: "패션 뉴스",
    title:
      "예술가의 창의성을 지키는 안전한 피난처, 2025 포토보그 패스티벌 폐막",
    date: "2025.03.21",
    by: "by 황혜원, Caterina De Biasio",
  },
  {
    imgSrc: fashionCate3,
    type: "패션 화보",
    title: "고민시의 이상한 놀이",
    date: "2025.03.21",
    by: "by 권민지",
  },
  {
    imgSrc: fashionCate4,
    type: "패션 뉴스",
    title: "탑샵이 쏘아 올린 부활의 신호탄",
    date: "2025.03.21",
    by: "by 오기쁨",
  },
  {
    imgSrc: fashionCate5,
    type: "패션 뉴스",
    title: "셀린느가 선보이는 필라테스 컬렉션",
    date: "2025.03.21",
    by: "by 오기쁨",
  },
];

const beautyBigCate = {
  imgSrc: beautyCate1,
  title: "필릭스의 봄",
  subTitle: "패션 화보",
  date: "2025.03.18",
};

const beautySubCate = [
  {
    imgSrc: beautyCate2,
    type: "패션 뉴스",
    title:
      "예술가의 창의성을 지키는 안전한 피난처, 2025 포토보그 패스티벌 폐막",
    date: "2025.03.21",
    by: "by 황혜원, Caterina De Biasio",
  },
  {
    imgSrc: beautyCate3,
    type: "패션 화보",
    title: "고민시의 이상한 놀이",
    date: "2025.03.21",
    by: "by 권민지",
  },
  {
    imgSrc: beautyCate4,
    type: "패션 뉴스",
    title: "탑샵이 쏘아 올린 부활의 신호탄",
    date: "2025.03.21",
    by: "by 오기쁨",
  },
  {
    imgSrc: beautyCate5,
    type: "패션 뉴스",
    title: "셀린느가 선보이는 필라테스 컬렉션",
    date: "2025.03.21",
    by: "by 오기쁨",
  },
];

const lifeBigCate = {
  imgSrc: lifeImg1,
  title: "일하고 사랑하고 때론 슬퍼하며 삶을 이어갈 여성들에게",
  subTitle: "뷰 포인트",
  date: "2025.03.18",
};

const lifeSubCate = [
  {
    imgSrc: lifeImg2,
    type: "여행",
    title: "에메랄드빛 해변에서의 달콤한 꿈",
    date: "2025.03.22",
    by: "by 김나랑",
  },
  {
    imgSrc: lifeImg3,
    type: "여행",
    title: "음악 따라 떠나는 여행, 클래식 축제 3",
    date: "2025.03.21",
    by: "by 이정미",
  },
  {
    imgSrc: lifeImg4,
    type: "리빙",
    title: "7년을 견딘 우정의 단단함",
    date: "2025.03.20",
    by: "by 오기쁨",
  },
  {
    imgSrc: lifeImg5,
    type: "리빙",
    title: "운동에도 에티켓이 필요하다",
    date: "2025.03.20",
    by: "by 오기쁨",
  },
];

const cultureBigCate = {
  imgSrc: culture1,
  title: "인류애를 충전해드립니다, ‘폭싹 속았수다’",
  subTitle: "엔터테인먼트",
  date: "2025.03.20",
};

const cultureSubCate = [
  {
    imgSrc: culture2,
    type: "엔터테인먼트",
    title: "눈을 뗄 수 없는 강렬함 ‘소년의 시간’",
    date: "2025.03.24",
    by: "by 오기쁨",
  },
  {
    imgSrc: culture3,
    type: "엔터테인먼트",
    title: "아리아나 그란데, 단편영화 공개한다",
    date: "2025.03.24",
    by: "by 오기쁨",
  },
  {
    imgSrc: culture4,
    type: "셀럽 뉴스",
    title: "가죽 재킷 마니아 젠슨 황이 받은 특별한 선물",
    date: "2025.03.24",
    by: "by 오기쁨",
  },
  {
    imgSrc: culture5,
    type: "엔터테인먼트",
    title: "애드리언 브로디가 받아들인 것",
    date: "2025.03.22",
    by: "by VOGUE",
  },
];

const videoBigCate = {
  imgSrc: video1,
  title: "있지 류진이 1초 만에 간장계란밥 만드는 법? | BEAUTY ESSENTIALS",
  subTitle: "Video",
  date: "2025.03.19",
};

const videoSubCate = [
  {
    imgSrc: video2,
    type: "Video",
    title: "손예진이 10년째 비밀을 유지한 향수 정보 단독 입수! | MY VOGUE",
    date: "2025.03.07",
    by: "by 장소라, 허단비",
  },
  {
    imgSrc: video3,
    type: "Video",
    title: "벽돌 가방 속 찐템만! 송은이의 왓츠 인 마이 백💖| MY VOGUE",
    date: "2025.02.27",
    by: "by 이인정, 허단비, 한다혜",
  },
  {
    imgSrc: video4,
    type: "Video",
    title: "이창섭은 정말 극내성일까? 그의 모든 소문을 밝힌다! | VOGUEMEETS",
    date: "2025.02.13",
    by: "by 장소라, 한다혜",
  },
  {
    imgSrc: video5,
    type: "Video",
    title: "디올 뷰티 디렉터가 K-팝 아이돌 해린을 메이크업한다면? | VOGUEMEETS",
    date: "2025.02.06",
    by: "by 장소라, 한다혜",
  },
];

export {
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
};
