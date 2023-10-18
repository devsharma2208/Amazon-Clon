export const initialState = {
  basket: ["brad", "checken"],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      break;
    case "REMOVE_FROM_BASKET":
      break;

    default:
      return state;
  }
}
export default reducer;
