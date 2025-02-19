import Button from "../../../components/Button";
import Text from "../../../components/Text";
import Timer from "../../../components/Timer";

export default function TimerLayout({ endServiceCB, newService, profileData }) {
  return (
    <>
      <section>
        <Timer newService={newService} />
        <Text element={"h4"} isInline={true}>
          <Text element="span">{profileData.name}</Text>
          <Text element={"span"}>&nbsp;está en servicio</Text>
        </Text>
        <Button onClick={endServiceCB}>Finalizar servicio</Button>
      </section>
    </>
  );
}
