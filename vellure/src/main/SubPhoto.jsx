import "../css/SubPhoto.css";

const Subphoto = (props) => {
  const { className, subData } = props;

  const { imgSrc, type, title, date, by } = subData;

  return (
    <>
      <div className={`Container ${className}`}>
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
