import "./nonote.css";
import img from "../../assets/img/nonote.png";
const NoNote = () => {
  return (
    <div className="nonote">
      <div className="container">
        <div className="img__container">
          <img src={img} alt="" srcset="" className="nonote__img" />
        </div>
        <h1 className="nonote__title">Pocket Notes</h1>
        <p className="note__description">
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>
      <div className="footer">
        <p>end-to-end encrypted</p>
      </div>
    </div>
  );
};

export default NoNote;
