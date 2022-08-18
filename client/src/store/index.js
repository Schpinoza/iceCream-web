import { createSlice, configureStore } from "@reduxjs/toolkit";

const IceCreaminitialState = { iceCreams: [] };


const cartSlice = createSlice({
  name: "iceCreamCart",
  initialState: IceCreaminitialState,
  reducers: {
    addIceCream: (state, action) => {
      const existingCartIceCreamIndex = state.iceCreams.findIndex((iceCream) => {
        return iceCream._id === action.payload._id;
      });
      const existingCartIceCream = state.iceCreams[existingCartIceCreamIndex];
      if (existingCartIceCream) {
        const updatedIceCream = {
          ...existingCartIceCream,
          amount: existingCartIceCream.amount + action.payload.amount,
        };
        
        state.iceCreams[existingCartIceCreamIndex] = updatedIceCream;
      } else {
        state.iceCreams = [...state.iceCreams, action.payload];
      }
    },

    removeIceCream: (state, action) => {
      const existingCartIceCreamIndex = state.iceCreams.findIndex((iceCream) => {
        return iceCream.id === action.payload.id;
      });
      if (state.iceCreams[existingCartIceCreamIndex].amount > 1) {
        state.iceCreams[existingCartIceCreamIndex] = { ...state.iceCreams[existingCartIceCreamIndex], amount: action.payload.amount - 1 };
      } else {
        state.iceCreams = state.iceCreams.filter(iceCream=>iceCream._id !== action.payload._id)
    }
  },

    resetIceCreamCart: (state,action) =>{

      state.iceCreams = action.payload
    }
}
});

const shippingModalInitialState = { modalStatus: false}

const modalSlice = createSlice({
  name:"modalStatus",
  initialState:shippingModalInitialState,
  reducers:{
    shownModal:(state,action)=>{
      state.modalStatus = action.payload; 
    }
  }
})

const TotalPrice = { orderTotalPrice: 0}

const totalOrderPrice = createSlice({
  name:"totalPrice",
  initialState:TotalPrice,
  reducers:{
    setTotalPrice:(state,action)=>{
      state.orderTotalPrice = action.payload; 
    }
  }

})
const store = configureStore({
  reducer: {
    iceCreamCart: cartSlice.reducer,
    modal: modalSlice.reducer,
    TotalPrice: totalOrderPrice.reducer
  },
});

export const { addIceCream, removeIceCream, resetIceCreamCart } = cartSlice.actions;
export const { shownModal }=modalSlice.actions
export const {setTotalPrice}=totalOrderPrice.actions
export default store;
