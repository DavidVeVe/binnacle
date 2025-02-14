import { useReducer } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Form/Input";
import Label from "../../../components/Form/Label";
import { newServiceFormReducer } from "../../reducers/dailyRecordReducer";
import { SERVER_URL } from "../../../common/constants/profile";
import { useParams } from "react-router";

const START_NEW_SERVICE = "Iniciar servicio";
const CANCEL_NEW_SERVICE = "Cancelar";

const getSddServiceOptions = (data) => {
  return {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };
};

const getEndTime = (startTime, hours, minutes) => {
  const defaultHourMilisecond = 3600000;
  const realHoursMiliseconds = (hours + minutes / 60) * defaultHourMilisecond;
  return startTime + realHoursMiliseconds;
};

export default function NewServiceForm({ showModalHandler }) {
  const { profileId } = useParams();
  const [serviceHoursState, dispatch] = useReducer(newServiceFormReducer, {
    hours: 0,
    minutes: 0
  });

  const startServiceHandler = async (e) => {
    e.preventDefault();
    const { hours, minutes } = serviceHoursState;

    const today = new Date();
    today.setTime(today.getTime());

    const endTime = getEndTime(today.getTime(), +hours, +minutes);

    dispatch({
      type: "startService",
      payload: {
        minutes: +minutes,
        hours: +hours
      }
    });

    const bodyObj = {
      ...serviceHoursState,
      date: today,
      startTime: today.getTime(),
      endTime
    };

    const response = await fetch(
      `${SERVER_URL}/profile/${profileId}/addService`,
      getSddServiceOptions({ id: profileId, data: bodyObj })
    );
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
          value={serviceHoursState.hours}
          onChange={(e) => onInputChangeHandler(e, "hours")}
        />
        <Label>{"Minutos"}</Label>
        <Input
          type="number"
          id="minutes"
          name="minutes"
          value={serviceHoursState.minutes}
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
