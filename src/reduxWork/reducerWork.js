const initialState = {
  cart_Data: [],
  user: null,
  isAthenticated: true,
};

export const reducerWork = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart_Data: [...state.cart_Data, action.payload] };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.cart_Data];
      const index = state.cart_Data.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      }
      return {
        ...state,
        cart_Data: newBasket,
      };
    default:
      return state;
  }
};
