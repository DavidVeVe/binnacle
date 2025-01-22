import AvatarImage from "../../assets/woman.png";
import "./avatar.scss";

export default function Avatar({ textComponent }) {
  return (
    <div className="avatar">
      <figure className="avatar__image-wrapper">
        <img src={AvatarImage} />
      </figure>
      {textComponent && textComponent}
    </div>
  );
}
