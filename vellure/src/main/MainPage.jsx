import { useState, useEffect } from "react";

import "../css/MainPage.css";
import Header from "./Header";
import Carosel from "./Carosel";
import Footer from "./Footer";
import Stories from "./Stories";
import BestStories from "./BestStories";
import GridNews from "./GridNews";
import PeopleNow from "./PeopleNow";
import Latest from "./Latest";

import topBtn from "../image/topBtn.png";

const MainPage = () => {
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
    const scrollStep = scrollPosition / 40;

    const scrollInterval = setInterval(() => {
      if (scrollPosition > 0) {
        scrollPosition -= scrollStep;
        window.scrollTo(0, scrollPosition);
      } else {
        clearInterval(scrollInterval);
      }
    }, 20);
  };

  return (
    <>
      <div className="mainPage">
        {/* 헤더 */}
        <Header />

        {/* 메인 이미지 */}
        <Carosel />

        <div className="backColor">
          {/* Today’s Stories */}
          <Stories title="TODAY’S STORIES" />

          {/* Best Stories */}
          <BestStories />
        </div>

        {/* Must Read */}
        <GridNews title="MUST READ" />

        {/* People Now */}
        <PeopleNow />

        {/* Fashion */}
        <Stories title="FASHION" />

        {/* Beauty */}
        <Stories title="BEAUTY" />

        {/* Life Style */}
        <GridNews title="LIFESTYLE" />

        {/* Culture */}
        <GridNews title="CULTURE" />

        {/* Latest Stories */}
        <Latest />

        {/* footer */}
        <Footer />

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
      </div>
    </>
  );
};

export default MainPage;
