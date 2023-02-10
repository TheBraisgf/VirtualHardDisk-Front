import defaultAvatar from "../../assets/userIcon.png";
import "./style.css";

// Pinta el avatar del usuario o, si no tiene, el avatar por defecto
const Avatar = ({ avatar, username, setShowModal }) => {
  return (
    <img
      className="avatarImg"
      onClick={(event) => {
        event.preventDefault();

        setShowModal(true);
      }}
      src={avatar ? `http://localhost:4000/${avatar}` : defaultAvatar}
      alt={`${username} avatar`}
    />
  );
};

export default Avatar;
