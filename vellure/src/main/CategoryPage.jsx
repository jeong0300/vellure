import "../css/CategoryPage.css";
import Header from "./Header";
import Footer from "./Footer";
import Stories from "./Stories";
import SubPhoto from "./SubPhoto";
import {
  fashionData,
  beautyData,
  lifeData,
  cultureData,
  videoData,
} from "../data/categoryData";

import rightImg from "../image/categorySticky.jpeg";
import notVideoImg from "../image/stickyImg.jpeg";

const CategoryPage = (props) => {
  const { category, categories } = props;

  const categoryData = {
    FASHION: fashionData,
    BEAUTY: beautyData,
    LIFESTYLE: lifeData,
    CULTURE: cultureData,
    VIDEO: videoData,
  };

  const subPhotos = categoryData[category] || {};

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
              <Stories title="" category={category} />
            </div>
            <div className="leftCategory">
              {Object.entries(subPhotos).map(([categoryName, items]) => (
                <div key={categoryName} className="categorySection">
                  <h2 className="categoryTitle">{categoryName}</h2>
                  <div className="categorys">
                    {items.map((data, index) => (
                      <SubPhoto
                        key={index}
                        className="mustBox"
                        subData={data}
                      />
                    ))}
                  </div>
                </div>
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
