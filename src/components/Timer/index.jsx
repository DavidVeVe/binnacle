import { useEffect, useState } from "react";
import {
  parseTimeUnit,
  serviceTimerCB,
  getTimerIntervalCondition
} from "./helper";

const SECOND_UNIT = 1000;

export default function Timer({ newService }) {
  const [serviceTimer, setServiceTimer] = useState({
    hours: +newService.hours,
    minutes: +newService.minutes,
    seconds: 0
  });

  const timerCondition = getTimerIntervalCondition(serviceTimer);

  useEffect(() => {
    const timer =
      timerCondition &&
      setInterval(
        () => setServiceTimer((prev) => serviceTimerCB(prev)),
        SECOND_UNIT
      );

    return () => clearInterval(timer);
  }, [serviceTimer.hours, serviceTimer.minutes, serviceTimer.seconds]);

  const parsedHours = parseTimeUnit(serviceTimer.hours);
  const parsedMinutes = parseTimeUnit(serviceTimer.minutes);
  const parsedSeconds = parseTimeUnit(serviceTimer.seconds);

  const content = `${parsedHours}:${parsedMinutes}:${parsedSeconds}`;

  return <p>{content}</p>;
}
