import AvatarImage from "../../assets/woman.png";
import "./avatar.scss";

export default function Avatar({ onClick }) {
  return (
    <div onClick={onClick} className="avatar">
      <figure className="avatar__image-wrapper">
        <img src={AvatarImage} />
      </figure>
    </div>
  );
}
