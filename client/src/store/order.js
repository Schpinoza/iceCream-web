import { createSlice } from "@reduxjs/toolkit";

const orderPrice = { orderTotalPrice: 0 };

const totalOrderPriceSlice = createSlice({
  name: "orderPrice",
  initialState: orderPrice,
  reducers: {
    setOrderPrice: (state, action) => {
      state.orderTotalPrice = action.payload;
    },
  },
});

export const { setOrderPrice } = totalOrderPriceSlice.actions;
export default totalOrderPriceSlice.reducer;
