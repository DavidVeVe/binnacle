import AvatarImage from "../../assets/woman.png";
import { Link } from "react-router";
import "./avatar.scss";

export default function Avatar({ onClick, profileId }) {
  return (
    <Link to={`/profile/${profileId}`}>
      <div onClick={onClick} className="avatar">
        <figure className="avatar__image-wrapper">
          <img src={AvatarImage} />
        </figure>
      </div>
    </Link>
  );
}
