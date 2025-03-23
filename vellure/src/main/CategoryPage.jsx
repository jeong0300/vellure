import "../css/CategoryPage.css";
import Header from "./Header";
import Footer from "./Footer";
import Stories from "./Stories";
import SubPhoto from "./SubPhoto";

// 이미지
import rightImg from "../image/categorySticky.jpeg";
import notVideoImg from "../image/stickyImg.jpeg";

subPhotos;

const CategoryPage = (props) => {
  const { category, categories } = props;

  const isFashion = category === "FASHION";
  const isBeauty = category === "BEAUTY";
  const isLifeStyle = category === "LIFESTYLE";
  const isCulture = category === "CULTURE";
  const isVideo = category === "VIDEO";

  const subPhotos = isFashion
    ? fashionData
    : isBeauty
    ? beautyData
    : isLifeStyle
    ? lifeData
    : isCulture
    ? cultureData
    : videoData;
  return (
    <>
      <Header type="category" />
      <div className="categoryItems">
        <div className="categoryPageName"> {category} </div>
        <div className="categorySubName">
          {categories ? (
            categories.map((c, index) => (
              <div key={index} className="subName">
                {c}
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>
        <div className="catagoryContainer">
          <div className="catagoryContent">
            <div className="leftStories">
              <Stories title="" />
            </div>
            <div className="leftCategory">
              {subPhotos.map((data, index) => (
                <SubPhoto key={index} className="mustBox" subData={data} />
              ))}
            </div>
          </div>
          <div className="rightCategory">
            <img
              src={Math.random() < 0.5 ? notVideoImg : rightImg}
              alt="vellure image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CategoryPage;
