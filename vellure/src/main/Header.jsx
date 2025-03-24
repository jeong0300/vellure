import React, { useState, useEffect } from "react";
import { Select, Button, notification } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import "../css/Header.css";

import logoImg from "../image/headerLogo.png";
import footImg from "../image/footerLogo.png";
import close from "../image/close.png";

const handleLogoClick = () => {
  window.scrollTo(0, 0);
};

const Header = (props) => {
  const { type } = props;

  // 화면 크기 상태
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 스크롤 시 컨트롤
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  // 토글 안 내용
  const [toggle, setToggle] = useState(false);

  // 카테고리 관련 상태
  const [activeCategory, setActiveCategory] = useState("FASHION");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleOpen = () => {
    setToggle(true);
  };

  const toggleClose = () => {
    setToggle(false);
  };

  const alert = () => {
    notification.warning({
      message: "준비 중인 기능입니다!",
    });
  };

  // 화면 크기 업데이트
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  // 이동 시 맨 위로
  const moveCategory = () => {
    window.scrollTo(0, 0);
  };

  // 반응형 통일
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 헤더 위치 상태에 따라 보이게/안보이게
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < prevScrollY) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  const categories = {
    FASHION: [
      "전체",
      "패션 트렌드",
      "패션 아이템",
      "셀러브리티 스타일",
      "패션 화보",
      "패션 뉴스",
      "워치 & 주얼리",
    ],
    BEAUTY: ["전체", "뷰티 트렌드", "뷰티 아이템", "웰니스", "뷰티 화보"],
    LIFESTYLE: ["전체", "여행", "푸드", "리빙", "뷰 포인트"],
    CULTURE: ["전체", "엔터테인먼트", "아트", "셀럽 뉴스"],
    VIDEO: [""],
  };

  return (
    <>
      <div className={`toggleMenu ${toggle ? "visible" : ""}`}>
        <div className="LogoBox">
          <img className="toggleLogo" src={footImg} alt="vellure logo" />
          <div className="closeImg">
            <img
              className="closeIcon"
              src={close}
              alt="close image"
              onClick={toggleClose}
            />
          </div>
        </div>
        <div className="categorys">
          <div className="categoryTitle">
            {Object.keys(categories).map((category) => (
              <div
                key={category}
                className="categoryFont"
                onMouseEnter={() => setActiveCategory(category)}
                onMouseLeave={() =>
                  setActiveCategory(selectedCategory || activeCategory)
                }
                onClick={() => handleCategoryClick(category)}
                style={{
                  opacity: selectedCategory
                    ? 1
                    : activeCategory === category
                    ? 1
                    : 0.5,
                }}
              >
                {category}
              </div>
            ))}
          </div>
          {activeCategory && !selectedCategory && (
            <div className="categoryName">
              {categories[activeCategory].map((sub, index) => (
                <div key={index} className="activeCategory">
                  {sub}
                </div>
              ))}
            </div>
          )}
          <div className="searchBox"></div>
        </div>
      </div>

      {windowWidth < 850 || type === "main" ? (
        <>
          <div className="header-placeholder"></div>
          <div className={`header ${visible ? "visible" : "hidden"}`}>
            <div className="logoBtns">
              <Link to="/" className="logo" onClick={handleLogoClick}>
                <img className="logoImg" src={logoImg} alt="vellure logo" />
              </Link>
              <div className="btns">
                <Select
                  defaultValue="KOREA"
                  className="custom-select"
                  options={[
                    { value: "ADRIA", label: "ADRIA" },
                    { value: "CHINA", label: "CHINA" },
                    { value: "BRASIL", label: "BRASIL" },
                    { value: "ARABIA", label: "ARABIA" },
                    { value: "AUSTRALIA", label: "AUSTRALIA" },
                  ]}
                />

                <div className="btn" onClick={alert}>
                  구독하기
                </div>

                <Button
                  type="text"
                  icon={
                    <MenuOutlined style={{ fontSize: "28px", color: "#333" }} />
                  }
                  onClick={toggleOpen}
                />
              </div>
            </div>
            <div className="category">
              <h3>
                <Link
                  to="/fashion"
                  className="category-link"
                  onClick={moveCategory}
                >
                  FASHION
                </Link>
              </h3>
              <h3>
                <Link
                  to="/beauty"
                  className="category-link"
                  onClick={moveCategory}
                >
                  BEAUTY
                </Link>
              </h3>
              <h3>
                <Link
                  to="/lifestyle"
                  className="category-link"
                  onClick={moveCategory}
                >
                  LIFESTYLE
                </Link>
              </h3>
              <h3>
                <Link
                  to="/culture"
                  className="category-link"
                  onClick={moveCategory}
                >
                  CULTURE
                </Link>
              </h3>
              <h3>
                <Link
                  to="/video"
                  className="category-link"
                  onClick={moveCategory}
                >
                  VIDEO
                </Link>
              </h3>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="category-placeholder"></div>
          <div
            className={`header categoryHeader ${
              visible ? "visible" : "hidden"
            }`}
          >
            <div className="logoBtns categoryBtns">
              <Link
                to="/"
                className="categoryLogoImg"
                onClick={handleLogoClick}
              >
                <img
                  className="categoryHImg"
                  src={logoImg}
                  alt="vellure logo"
                />
              </Link>

              <div className="category">
                <h3>
                  <Link
                    to="/fashion"
                    className="category-link"
                    onClick={moveCategory}
                  >
                    FASHION
                  </Link>
                </h3>
                <h3>
                  <Link
                    to="/beauty"
                    className="category-link"
                    onClick={moveCategory}
                  >
                    BEAUTY
                  </Link>
                </h3>
                <h3>
                  <Link
                    to="/lifestyle"
                    className="category-link"
                    onClick={moveCategory}
                  >
                    LIFESTYLE
                  </Link>
                </h3>
                <h3>
                  <Link
                    to="/culture"
                    className="category-link"
                    onClick={moveCategory}
                  >
                    CULTURE
                  </Link>
                </h3>
                <h3>
                  <Link
                    to="/video"
                    className="category-link"
                    onClick={moveCategory}
                  >
                    VIDEO
                  </Link>
                </h3>
              </div>

              <div className="categorySelect">
                <Select
                  defaultValue="KOREA"
                  className="custom-select"
                  options={[
                    { value: "ADRIA", label: "ADRIA" },
                    { value: "CHINA", label: "CHINA" },
                    { value: "BRASIL", label: "BRASIL" },
                    { value: "ARABIA", label: "ARABIA" },
                    { value: "AUSTRALIA", label: "AUSTRALIA" },
                  ]}
                />

                <div className="btn" onClick={alert}>
                  구독하기
                </div>

                <Button
                  type="text"
                  icon={
                    <MenuOutlined style={{ fontSize: "28px", color: "#333" }} />
                  }
                  onClick={toggleOpen}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
