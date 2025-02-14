const newServiceFormReducer = (state, action) => {
  const { minutes, hours } = action.payload;
  switch (action.type) {
    case "hours":
      return { ...state, hours: action.payload };
    case "minutes":
      return { ...state, minutes: action.payload };
    case "startService":
      return {
        ...state,
        minutes,
        hours
      };
    case "cancel":
      return { hours: 0, minutes: 0 };
    default:
      break;
  }
};

export { newServiceFormReducer };
