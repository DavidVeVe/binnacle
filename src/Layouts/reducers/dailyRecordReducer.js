const newServiceFormReducer = (state, action) => {
  const { minutes, hours, room, view } = action.payload;
  switch (action.type) {
    case "hours":
      return { ...state, hours: action.payload };
    case "minutes":
      return { ...state, minutes: action.payload };
    case "room":
      return { ...state, room: action.payload };
    case "changeView":
      return { ...state, view: action.payload };
    case "startService":
      return {
        ...state,
        minutes,
        hours,
        room,
        view
      };
    case "cancel":
      return { hours: 0, minutes: 0, room: null, view: "record" };
    default:
      break;
  }
};

export { newServiceFormReducer };
