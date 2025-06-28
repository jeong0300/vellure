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
  const [selectedSub, setSelectedSub] = useState("전체");

  // top 버튼
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(80);

  // 헤더
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

  // 카테고리 클릭 시 "전체"로 초기화
  useEffect(() => {
    setSelectedSub("전체");
  }, [category]);

  const categoryData = {
    FASHION: fashionData,
    BEAUTY: beautyData,
    LIFESTYLE: lifeData,
    CULTURE: cultureData,
    VIDEO: videoData,
  };

  const subPhotos = categoryData[category] || {};

  // 데이터 필터링 (선택된 서브 카테고리)
  let filteredPhotos = [];
  if (selectedSub === "전체") {
    filteredPhotos = Object.entries(subPhotos);
  } else {
    filteredPhotos = Object.entries(subPhotos).filter(
      ([categoryName]) => categoryName === selectedSub
    );
  }

  // 서브 카테고리 중 아트, 최신 뉴스는 Latest stories 내용만 출력
  const getLatestCategory = () => {
    if (category === "FASHION" && subPhotos["LATEST STORIES"]) {
      return subPhotos["LATEST STORIES"];
    } else if (category === "LIFESTYLE" && subPhotos["LATEST STORIOS"]) {
      return subPhotos["LATEST STORIOS"];
    } else if (category === "CULTURE" && subPhotos["LATEST STORIOS"]) {
      return subPhotos["LATEST STORIOS"];
    }

    return [];
  };

  // 맨 위로 스크롤
  const scrollToTop = () => {
    let scrollPosition = window.scrollY;
    const scrollStep = scrollPosition / 20;

    const scrollInterval = setInterval(() => {
      if (scrollPosition > 0) {
        scrollPosition -= scrollStep;
        window.scrollTo(0, scrollPosition);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  return (
    <div className="categoryPage">
      <Header type="category" />
      <div className="categoryItems">
        <div className="categoryPageName">{category}</div>

        {/* 서브 카테고리 네비게이션 */}
        <div className="categorySubName">
          {categories &&
            categories.map((c, index) => (
              <div
                key={index}
                className={`subName ${selectedSub === c ? "active" : ""}`}
                onClick={() => setSelectedSub(c)}
              >
                {c}
              </div>
            ))}
        </div>

        <div className="catagoryContainer">
          <div className="catagoryContent">
            {selectedSub === "전체" && (
              <div className="leftStories">
                <Stories title="" category={category} />
              </div>
            )}

            <div className="leftCategory">
              {filteredPhotos.map(([categoryName, items]) => (
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

              {/* 최신 뉴스, 셀럽 뉴스, 아트 카테고리는 "LATEST STORIES"로 출력 */}
              {(selectedSub === "최신 뉴스" ||
                selectedSub === "셀럽 뉴스" ||
                selectedSub === "아트") && (
                <div className="categorySection">
                  <h2 className="categoryTitle">LATEST STORIES</h2>
                  <div className="categorys">
                    {getLatestCategory().map((data, index) => (
                      <SubPhoto
                        key={index}
                        className="mustBox"
                        subData={data}
                      />
                    ))}
                  </div>
                </div>
              )}
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
