import footImg from "../image/footerLogo.png";

import "../css/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <img className="footLogo" src={footImg} alt="logo image" />
        <ul className="footTexts">
          <li>정기구독</li>
          <li>회사소개</li>
          <li>광고/제휴</li>
          <li>개인정보 처리방침</li>
          <li>공지사항</li>
        </ul>
        <p>VELLURE.CO.KR IS OPERATED BY DOOSAN MAGAZINE</p>
      </div>
    </>
  );
};

export default Footer;
