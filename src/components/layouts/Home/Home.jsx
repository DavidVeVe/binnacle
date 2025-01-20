import Avatar from "../../Avatar/Avatar";

export default function Home() {
  const avatarClickHandler = () => {
    console.log("Avatar has been clicked");
  };
  return (
    <section>
      <article>
        <Avatar onClick={avatarClickHandler} />
      </article>
    </section>
  );
}
