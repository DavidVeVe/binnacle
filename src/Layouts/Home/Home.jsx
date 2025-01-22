import { useEffect, useState } from "react";
import { Link } from "react-router";
import Avatar from "../../components/Avatar/Avatar";
import Text from "../../components/Text";
import { SERVER_URL } from "../../common/constants/profile";
import "./home.scss";

export default function Home() {
  const [homeProfiles, setHomeProfiles] = useState([]);

  useEffect(() => {
    const getProfiles = async () => {
      const response = await fetch(SERVER_URL);
      const { data } = await response.json();

      if (data && data.length > 0) {
        setHomeProfiles(data);
      }
    };

    getProfiles();
  }, []);

  const AvatarComponents = homeProfiles?.map(({ id, name }) => {
    return (
      <Link to={`/profile/${id}`} key={id}>
        <Avatar textComponent={<Text element="span">{name}</Text>} />
      </Link>
    );
  });

  return (
    <section className="home__hero">
      <article className="home__profiles">{AvatarComponents}</article>
    </section>
  );
}
