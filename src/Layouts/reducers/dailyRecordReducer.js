const newServiceFormReducer = (state, action) => {
  switch (action.type) {
    case "hours":
      return { ...state, hours: action.payload };
    case "minutes":
      return { ...state, minutes: action.payload };
    case "startService":
      return {
        ...state,
        minutes: action.payload.minutes,
        hours: action.payload.hours
      };
    case "cancel":
      return { hours: 0, minutes: 0 };
    default:
      break;
  }
};

export { newServiceFormReducer };
