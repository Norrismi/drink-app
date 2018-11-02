export default function(state = {}, action) {
  switch (action.type) {
    case "GET_DRINKS":
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
}
