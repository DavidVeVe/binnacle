import { useReducer } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Form/Input";
import Label from "../../../components/Form/Label";

const START_NEW_SERVICE = "Iniciar servicio";
const CANCEL_NEW_SERVICE = "Cancelar";

export default function NewServiceForm({
  showModalHandler,
  serviceTime,
  startServiceHandler,
  dispatchInputHandler
}) {
  const { hours, minutes } = serviceTime;

  const cancelNewService = (e) => {
    e.preventDefault();
    showModalHandler();
  };

  const onInputChangeHandler = (e, type) => {
    dispatchInputHandler({ type, payload: +e.target.value });
  };

  return (
    <form>
      <section className="new_service_form__inputs">
        <Label>{"Horas"}</Label>
        <Input
          type="number"
          id="hours"
          name="hours"
          value={hours}
          onChange={(e) => onInputChangeHandler(e, "hours")}
        />
        <Label>{"Minutos"}</Label>
        <Input
          type="number"
          id="minutes"
          name="minutes"
          value={minutes}
          onChange={(e) => onInputChangeHandler(e, "minutes")}
        />
      </section>
      <section className="new_service_form__buttons">
        <Button type="button" onClick={startServiceHandler}>
          {START_NEW_SERVICE}
        </Button>
        <Button type="button" onClick={cancelNewService}>
          {CANCEL_NEW_SERVICE}
        </Button>
      </section>
    </form>
  );
}
