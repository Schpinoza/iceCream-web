import { configureStore } from "@reduxjs/toolkit";
import cartHelperReducer from "./cartHelper";
import modalReducer from "./modal";
import orderReducer from "./order";
const store = configureStore({
  reducer: {
    iceCreamHelper: cartHelperReducer,
    modal: modalReducer,
    orderPrice: orderReducer,
  },
});

export default store;
