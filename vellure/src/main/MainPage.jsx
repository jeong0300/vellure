import "../css/MainPage.css";
import Header from "./Header";
import Carosel from "./Carosel";
import Footer from "./Footer";
import Stories from "./Stories";

const MainPage = () => {
  return (
    <>
      <div className="mainPage">
        {/* 헤더 */}
        <Header />

        {/* 메인 이미지 */}
        <Carosel />

        {/* Today’s Stories */}
        <Stories />

        {/* footer */}
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
