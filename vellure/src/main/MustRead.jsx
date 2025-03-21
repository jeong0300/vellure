import "../css/MustRead.css";

import SubPhoto from "./SubPhoto";

// 이미지
import mustImg1 from "../image/mustRead1.webp";
import mustImg2 from "../image/mustRead2.webp";
import mustImg3 from "../image/mustRead3.webp";
import mustImg4 from "../image/mustRead4.webp";

const MustRead = () => {
  const mustData = [
    {
      imgSrc: mustImg1,
      type: "셀러브리티 스타일",
      title: "2025년의 청바지는 '여기'가 찢어져야 합니다",
      date: "2025.03.14",
      by: "by 이소미, Selene Olive",
    },
    {
      imgSrc: mustImg2,
      type: "패션 아이템",
      title: "올봄 스타일의 중심을 잡아줄 바지 5",
      date: "2025.03.18",
      by: "by 이소미",
    },
    {
      imgSrc: mustImg3,
      type: "패션 트렌드",
      title: "이제 봄마다 당연하게 꺼내 입어야할 색",
      date: "2025.03.17",
      by: "by 이소미",
    },
    {
      imgSrc: mustImg4,
      type: "셀러브리티 스타일",
      title: "더 로우 올슨 자매처럼 우아한 봄 룩을 완성하는 비결 6",
      date: "2025.03.17",
      by: "by 이소미, Cortne Bonilla",
    },
  ];
  return (
    <>
      <div className="mustContainer">
        <div className="typeName">
          <h1>MUST READ</h1>
        </div>
        <div className="mustImgBox">
          {mustData.map((must, index) => (
            <SubPhoto key={index} className="mustBox" subData={must} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MustRead;
