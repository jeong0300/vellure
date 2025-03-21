import "../css/MainPage.css";
import Header from "./Header";
import Carosel from "./Carosel";
import Footer from "./Footer";
import Stories from "./Stories";
import BestStories from "./BestStories";
import MustRead from "./MustRead";
import PeopleNow from "./PeopleNow";

const MainPage = () => {
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
        <MustRead />

        {/* People Now */}
        <PeopleNow />

        {/* Beauty */}
        <Stories title="BEAUTY" />

        {/* footer */}
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
