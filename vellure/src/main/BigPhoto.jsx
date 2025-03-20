import React from "react";
import "../css/BigPhoto.css";

const BigPhoto = (props) => {
  const { className, bigImg, bigImgInfo } = props;
  const { title, subTitle, date } = bigImgInfo;

  const titleLines = title.split("\n");

  return (
    <>
      <div className={`allContainer ${className || ""}`}>
        <div className={`${className}Box`}>
          <img className={`${className}Img`} src={bigImg} alt={bigImg} />
        </div>

        <div className="photoTexts">
          <span>
            {subTitle}
            <span className="dateText"> | {date} </span>
          </span>
          <h1>
            {titleLines.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < titleLines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
        </div>
      </div>
    </>
  );
};

export default BigPhoto;
