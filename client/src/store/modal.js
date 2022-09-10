import { createSlice } from "@reduxjs/toolkit";

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

export const { shownModal } = modalSlice.actions;
export default modalSlice.reducer;
