import React, { useState, useEffect } from "react";
import { Select, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "../css/Header.css";

import logoImg from "../image/headerLogo.png";

const Header = () => {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

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

  return (
    <>
      <div className="header-placeholder"></div>
      <div className={`header ${visible ? "visible" : "hidden"}`}>
        <div className="logoBtns">
          <div className="logo">
            <img className="logoImg" src={logoImg} alt="vellure logo" />
          </div>
          <div className="btns">
            <Select
              defaultValue="KOREA"
              className="custom-select"
              onChange={() => {}}
              options={[
                { value: "ADRIA", label: "ADRIA" },
                { value: "CHINA", label: "CHINA" },
                { value: "BRASIL", label: "BRASIL" },
                { value: "ARABIA", label: "ARABIA" },
                { value: "AUSTRALIA", label: "AUSTRALIA" },
              ]}
            />

            <div className="btn">구독하기</div>

            <Button
              type="text"
              icon={
                <MenuOutlined style={{ fontSize: "28px", color: "#333" }} />
              }
            />
          </div>
        </div>
        <div className="category">
          <h3> FASHION </h3>
          <h3> BEAUTY </h3>
          <h3> LIFESTYLE </h3>
          <h3> CULTURE </h3>
          <h3> VIDEO </h3>
        </div>
      </div>
    </>
  );
};

export default Header;
