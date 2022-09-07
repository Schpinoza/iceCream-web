import { createSlice, configureStore } from "@reduxjs/toolkit";

const IceCreaminitialState = { iceCreams: [] };

const cartSlice = createSlice({
  name: "iceCreamHelper",
  initialState: IceCreaminitialState,
  reducers: {
    addIceCream: (state, action) => {
      const chosenIceCreamIndex = state.iceCreams.findIndex((iceCream) => {
        return iceCream._id === action.payload._id;
      });
      const chosenCartIceCream = state.iceCreams[chosenIceCreamIndex];
      if (chosenCartIceCream) {
        const updatedIceCream = {
          ...chosenCartIceCream,
          amount: chosenCartIceCream.amount + action.payload.amount,
        };

        state.iceCreams[chosenIceCreamIndex] = updatedIceCream;
      } else {
        state.iceCreams = [...state.iceCreams, action.payload];
      }
    },

    removeIceCream: (state, action) => {
      const chosenCartIceCreamIndex = state.iceCreams.findIndex(
        (iceCream) => {
          return iceCream.id === action.payload.id;
        }
      );
      if (state.iceCreams[chosenCartIceCreamIndex].amount > 1) {
        state.iceCreams[chosenCartIceCreamIndex] = {
          ...state.iceCreams[chosenCartIceCreamIndex],
          amount: action.payload.amount - 1,
        };
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

const shippingModalInitialState = { modalStatus: false };

const modalSlice = createSlice({
  name: "modalStatus",
  initialState: shippingModalInitialState,
  reducers: {
    shownModal: (state, action) => {
      state.modalStatus = action.payload;
    },
  },
});

const TotalPrice = { orderTotalPrice: 0 };

const totalOrderPrice = createSlice({
  name: "totalPrice",
  initialState: TotalPrice,
  reducers: {
    setTotalPrice: (state, action) => {
      state.orderTotalPrice = action.payload;
      console.log("state", state.orderTotalPrice, "action", action.payload);
    },
  },
});
const store = configureStore({
  reducer: {
    iceCreamHelper: cartSlice.reducer,
    modal: modalSlice.reducer,
    totalPrice: totalOrderPrice.reducer,
  },
});

export const { addIceCream, removeIceCream, resetIceCreamCart } =
  cartSlice.actions;
export const { shownModal } = modalSlice.actions;
export const { setTotalPrice } = totalOrderPrice.actions;
export default store;
