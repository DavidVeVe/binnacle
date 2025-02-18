import Button from "../../components/Button";
import Timer from "../../components/Timer";

export default function TimerLayout({ endServiceCB, newService }) {
  return (
    <>
      <section>
        <Timer newService={newService} />
        <Button onClick={endServiceCB}>Finalizar servicio</Button>
      </section>
    </>
  );
}
