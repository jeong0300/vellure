import { notification } from "antd";
import "../css/SubPhoto.css";

const Subphoto = (props) => {
  const { className, subData } = props;

  const { imgSrc, type, title, date, by } = subData;

  const alert = () => {
    notification.warning({
      message: "준비 중인 기능입니다!",
    });
  };

  return (
    <>
      <div className={`Container ${className}`} onClick={alert}>
        <img src={imgSrc} alt="vellure image" />
        <div className="subTodayTexts">
          <p>{type}</p>
          <h3>{title}</h3>
          <span>
            {date} | {by}
          </span>
        </div>
      </div>
    </>
  );
};

export default Subphoto;
