import Button from "../../components/Button";
import Timer from "../../components/Timer";

export default function TimerLayout({ setViewCB, serviceTime }) {
  return (
    <>
      <section>
        <Timer serviceTime={serviceTime} />
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
