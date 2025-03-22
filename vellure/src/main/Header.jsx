import React, { useState, useEffect } from "react";
import { Select, Button, notification } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import "../css/Header.css";

import logoImg from "../image/headerLogo.png";

const handleLogoClick = () => {
  window.scrollTo(0, 0);
};

const Header = () => {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  const alert = () => {
    notification.warning({
      message: "준비 중인 기능입니다!",
    });
  };

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
          <Link to="/" className="logo" onClick={handleLogoClick}>
            <img className="logoImg" src={logoImg} alt="vellure logo" />
          </Link>
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

            <div className="btn" onClick={alert}>
              구독하기
            </div>

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
