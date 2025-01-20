import Avatar from "../../Avatar/Avatar";
import Text from "../../Text";

export default function Home() {
  const avatarClickHandler = () => {
    console.log("Avatar has been clicked");
  };
  return (
    <section>
      <article>
        <Avatar
          onClick={avatarClickHandler}
          profileId="Abril"
          textComponent={<Text element="span">Abril</Text>}
        />
      </article>
    </section>
  );
}
