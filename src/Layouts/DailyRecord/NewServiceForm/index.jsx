import Button from "../../../components/Button";
import Input from "../../../components/Form/Input";
import Label from "../../../components/Form/Label";
import { ERRORS_MESSAGE } from "../../helper";

const START_NEW_SERVICE = "Iniciar servicio";
const CANCEL_NEW_SERVICE = "Cancelar";

export default function NewServiceForm({
  newService,
  startServiceHandler,
  dispatchInputHandler,
  cancelNewService
}) {
  const { hours, minutes, room, error } = newService;

  const onInputChangeHandler = (e, type) => {
    dispatchInputHandler({ type, payload: e.target.value });
  };
  const errorMessage = error && ERRORS_MESSAGE[newService.errorType];

  return (
    <form>
      <p>{errorMessage}</p>
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
        <Label>{"Habitación"}</Label>
        <Input
          type="number"
          id="room"
          name="room"
          value={room}
          onChange={(e) => onInputChangeHandler(e, "room")}
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
