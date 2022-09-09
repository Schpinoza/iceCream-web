import { createSlice } from "@reduxjs/toolkit";

const iceCreamInitialState = { iceCreams: [] };

const cartSlice = createSlice({
  name: "iceCreamHelper",
  initialState: iceCreamInitialState,
  reducers: {
    addIceCream: (state, action) => {
      const chosenIceCream = state.iceCreams.find(
        (iceCream) => iceCream._id === action.payload._id
      );
      if (!chosenIceCream) {
        state.iceCreams.push({ ...action.payload });
      } else {
        chosenIceCream.amount = action.payload.amount + chosenIceCream.amount;
      }
    },

    removeIceCream: (state, action) => {
      const chosenIceCream = state.iceCreams.find(
        (iceCream) => iceCream._id === action.payload._id
      );
      if (chosenIceCream.amount > 1) {
        chosenIceCream.amount = chosenIceCream.amount - 1;
      } else {
        state.iceCreams = state.iceCreams.filter(
          (iceCream) => iceCream._id !== action.payload._id
        );
      }
    },

    resetIceCreamCart: (state, action) => {
      state.iceCreams = action.payload;
    },
  },
});

export const { addIceCream, removeIceCream, resetIceCreamCart } =
  cartSlice.actions;

export default cartSlice.reducer;
