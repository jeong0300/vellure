import React from "react";
import "../css/BigPhoto.css";

const BigPhoto = (props) => {
  const { className, bigImgInfo } = props;
  const { imgSrc, title = "", subTitle = "", date = "" } = bigImgInfo;

  const titleLines = title ? title.split("\n") : [];

  return (
    <div className={`allContainer ${className || ""}`}>
      <div className={`${className}Box`}>
        <img className={`${className}Img`} src={imgSrc} alt="BigPhoto" />
      </div>

      <div className="photoTexts">
        {subTitle && (
          <span>
            {subTitle}
            {date && <span className="dateText"> | {date} </span>}
          </span>
        )}

        {title && (
          <h1>
            {titleLines.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < titleLines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
        )}
      </div>
    </div>
  );
};

export default BigPhoto;
