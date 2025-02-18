import Button from "../../components/Button";
import Timer from "../../components/Timer";

export default function TimerLayout({ setViewCB, newService }) {
  return (
    <>
      <section>
        <Timer newService={newService} />
        <Button
          onClick={() => {
            setViewCB("record");
          }}
        >
          Finalizar servicio
        </Button>
      </section>
    </>
  );
}
