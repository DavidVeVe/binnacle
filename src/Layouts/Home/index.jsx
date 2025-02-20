import { useEffect, useState } from "react";
import { Link } from "react-router";
import Avatar from "../../components/Avatar";
import Text from "../../components/Text";
import { SERVER_URL } from "../../common/constants/profile";
import "./home.scss";

export default function Home() {
  const [homeProfiles, setHomeProfiles] = useState([]);

  useEffect(() => {
    const getProfiles = async () => {
      console.log(SERVER_URL)
      const response = await fetch(SERVER_URL);
      const { data } = await response.json();

      if (data && data.length > 0) {
        setHomeProfiles(data);
      }
    };

    getProfiles();
  }, []);

  const AvatarComponents = homeProfiles?.map(({ id, name }) => {
    const avatarName = <Text element="span">{name}</Text>;

    return (
      <Link to={`/profile/${id}`} key={id}>
        <Avatar textComponent={avatarName} />
      </Link>
    );
  });

  return (
    <section className="home__hero">
      <article className="home__profiles">{AvatarComponents}</article>
    </section>
  );
}
