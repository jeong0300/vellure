import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./main/MainPage";
import Category from "./main/CategoryPage";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

const categories = {
  FASHION: ["전체", "패션 트렌드", "패션 아이템", "최신 뉴스"],
  BEAUTY: ["전체", "뷰티 트렌드", "뷰티 아이템", "웰니스"],
  LIFESTYLE: ["전체", "리빙", "뷰 포인트", "최신 뉴스"],
  CULTURE: ["전체", "엔터테인먼트", "아트", "셀럽 뉴스"],
  VIDEO: [""],
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/fashion"
          element={
            <Category category="FASHION" categories={categories.FASHION} />
          }
        />
        <Route
          path="/beauty"
          element={
            <Category category="BEAUTY" categories={categories.BEAUTY} />
          }
        />
        <Route
          path="/lifestyle"
          element={
            <Category category="LIFESTYLE" categories={categories.LIFESTYLE} />
          }
        />
        <Route
          path="/culture"
          element={
            <Category category="CULTURE" categories={categories.CULTURE} />
          }
        />
        <Route path="/video" element={<Category category="VIDEO" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
