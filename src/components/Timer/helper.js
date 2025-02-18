const parseTimeUnit = (unit) => (unit < 10 ? "0" + unit : unit);

const serviceTimerCB = (prev) => {
  const { hours, minutes, seconds } = prev;
  if (seconds > 0)
    return { hours: hours, minutes: minutes, seconds: seconds - 1 };
  if (seconds === 0 && minutes > 0)
    return { hours: hours, minutes: minutes - 1, seconds: 60 };
  if (minutes === 0 && hours > 0)
    return { hours: hours - 1, minutes: 60, seconds: 60 };
};

const getTimerIntervalCondition = (serviceTimerState) => {
  const { minutes, hours, seconds } = serviceTimerState;
  return hours > 0 || minutes > 0 || seconds > 0;
};

export { parseTimeUnit, serviceTimerCB, getTimerIntervalCondition };
