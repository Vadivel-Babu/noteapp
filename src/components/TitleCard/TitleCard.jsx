import "./titlecard.css";
const TitleCard = ({ name }) => {
  return (
    <div className="titlecard active">
      <div className="titlecard__profile">{name[0].toUpperCase()}</div>
      <div className="titlecard__name"> {name}</div>
    </div>
  );
};

export default TitleCard;
