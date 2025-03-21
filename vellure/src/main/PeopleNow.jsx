import "../css/PeopleNow.css";
import BigPhoto from "./BigPhoto";

// 이미지
import peopleImg1 from "../image/PeopleNow1.webp";
import peopleImg2 from "../image/PeopleNow2.webp";
import peopleImg3 from "../image/PeopleNow3.webp";

const peopleBigImgInfo = [
  {
    imgSrc: peopleImg1,
    title: "송은이와 김숙, \n 광대는 그렇게 태어난다",
    subTitle: "엔터테인먼트",
    date: "",
  },
  {
    imgSrc: peopleImg2,
    title: '정유미, "그렇게 일 잘하는 사람들을 곁에서 볼 수 있어 행운이었죠"',
    subTitle: "패션 화보",
    date: "",
  },
  {
    imgSrc: peopleImg3,
    title: "GD, 권지용, 지드래곤 🙂",
    subTitle: "엔터테인먼트",
    date: "",
  },
];

const PeopleNow = () => {
  return (
    <>
      <div className="pepleBackColor">
        <div className="peopleContainer">
          <div className="peopleTexts">
            <div className="typeName">
              <h1> PEOPLE NOW </h1>
            </div>

            <p>지금, 보그가 주목하는 인물</p>
          </div>
          <div className="peopleImg">
            {peopleBigImgInfo.map((people, idx) => (
              <BigPhoto key={idx} className="peopleImage" bigImgInfo={people} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PeopleNow;
