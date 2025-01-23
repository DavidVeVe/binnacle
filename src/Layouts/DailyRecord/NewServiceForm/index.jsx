import { useReducer } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Form/Input";
import Label from "../../../components/Form/Label";
import { newServiceFormReducer } from "../../reducers/dailyRecordReducer";

const START_NEW_SERVICE = "Iniciar servicio";
const CANCEL_NEW_SERVICE = "Cancelar";

export default function NewServiceForm({ showModalHandler }) {
  const [state, dispatch] = useReducer(newServiceFormReducer, {
    hours: 0,
    minutes: 0
  });

  console.log(state);

  const startServiceHandler = (e) => {
    e.preventDefault();

    dispatch({
      type: "startService",
      payload: { minutes: state.minutes, hours: state.hours }
    });
  };

  const cancelNewService = (e) => {
    e.preventDefault();
    showModalHandler();
  };

  const onInputChangeHandler = (e, type) => {
    dispatch({ type, payload: e.target.value });
  };

  return (
    <form>
      <section className="new_service_form__inputs">
        <Label>{"Horas"}</Label>
        <Input
          type="number"
          id="hours"
          name="hours"
          value={state.hours}
          onChange={(e) => onInputChangeHandler(e, "hours")}
        />
        <Label>{"Minutos"}</Label>
        <Input
          type="number"
          id="minutes"
          name="minutes"
          value={state.minutes}
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
