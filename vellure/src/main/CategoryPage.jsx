import { useEffect, useState } from "react";

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

import topBtn from "../image/topBtn.png";

const CategoryPage = (props) => {
  const { category, categories } = props;

  // top 버튼
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(80);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 위에서 40% 일 때 보여주기
      setShowTopBtn(scrollY > windowHeight * 0.4);

      // 아래에서 40% 일 때 없애기
      if (scrollY + windowHeight >= documentHeight - windowHeight * 0.4) {
        setBottomOffset(-50);
      } else {
        setBottomOffset(80);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    let scrollPosition = window.scrollY;
    const scrollStep = scrollPosition / 30;

    const scrollInterval = setInterval(() => {
      if (scrollPosition > 0) {
        scrollPosition -= scrollStep;
        window.scrollTo(0, scrollPosition);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  // 카테고리 별 데이터 출력
  const categoryData = {
    FASHION: fashionData,
    BEAUTY: beautyData,
    LIFESTYLE: lifeData,
    CULTURE: cultureData,
    VIDEO: videoData,
  };

  const subPhotos = categoryData[category] || {};

  return (
    <div className="categoryPage">
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

      <img
        className="topBtnImg"
        src={topBtn}
        alt="Top Button"
        style={{
          opacity: showTopBtn ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
          bottom: `${bottomOffset}px`,
        }}
        onClick={scrollToTop}
      />
      <Footer />
    </div>
  );
};

export default CategoryPage;
