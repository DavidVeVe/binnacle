import { useEffect, useState } from "react";
import Avatar from "../../components/Avatar/Avatar";
import Text from "../../components/Text";
import { getSingleProfile } from "../../requestHandlers/profiles";
import "./home.scss";

const SERVER_URL = "http://localhost:3000";

export default function Home() {
  const [profiles, setProfiles] = useState([]);

  const avatarClickHandler = async (profileId) => {
    await getSingleProfile(SERVER_URL, {
      method: "GET",
      body: JSON.stringify(profileId),
      headers: {
        "Content-Type": "application/json"
      }
    });
  };

  useEffect(() => {
    const getProfiles = async () => {
      const response = await fetch(SERVER_URL);
      const { data } = await response.json();
      setProfiles(data);
    };

    getProfiles();
  }, []);

  const AvatarComponents = profiles?.map(({ id, name }) => {
    return (
      <Avatar
        onClick={() => avatarClickHandler(id)}
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
