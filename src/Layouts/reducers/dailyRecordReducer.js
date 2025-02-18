const newServiceFormReducer = (state, action) => {
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
      const { minutes, hours, room, view } = action?.payload;
      return {
        ...state,
        minutes,
        hours,
        room,
        view
      };
    case "cancel":
      return { hours: 0, minutes: 0, room: 0, view: "record" };
    default:
      break;
  }
};

export { newServiceFormReducer };
