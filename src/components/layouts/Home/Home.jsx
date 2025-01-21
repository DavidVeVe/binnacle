import { useEffect, useState } from "react";
import Avatar from "../../Avatar/Avatar";
import Text from "../../Text";
import "./home.scss";

export default function Home() {
  const [profiles, setProfiles] = useState([]);
  const avatarClickHandler = () => {
    console.log("Avatar has been clicked");
  };

  useEffect(() => {
    const getProfiles = async () => {
      const response = await fetch("http://localhost:3000");
      const { data } = await response.json();
      setProfiles(data);
    };

    getProfiles();
  }, []);

  const AvatarComponents = profiles?.map(({ id, name }) => {
    return (
      <Avatar
        onClick={avatarClickHandler}
        profileId={id}
        textComponent={<Text element="span">{name}</Text>}
        key={id}
      />
    );
  });

  return (
    <section className="home__hero">
      <article className="home__profiles">{AvatarComponents}</article>
    </section>
  );
}
