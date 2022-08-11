import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { items: [] };

const cartSlice = createSlice({
  name: "iceCreamCart",
  initialState,
  reducers: {
    addIceCream: (state, action) => {
    
      ;
      const existingCartIceCreamIndex = state.items.findIndex((iceCream) => {
        return iceCream.id === action.payload.id;
      });
      const existingCartIceCream = state.items[existingCartIceCreamIndex];
      if (existingCartIceCream) {
        const updatedItem = {
          ...existingCartIceCream,
          amount: existingCartIceCream.amount + action.payload.amount,
        };
        
        state.items[existingCartIceCreamIndex] = updatedItem;
      } else {
        state.items = [...state.items, action.payload];
      }
    },

    removeIceCream: (state, action) => {
      const existingCartIceCreamIndex = state.items.findIndex((iceCream) => {
        return iceCream.id === action.payload.id;
      });
      if (state.items[existingCartIceCreamIndex].amount > 1) {
        state.items[existingCartIceCreamIndex] = { ...state.items[existingCartIceCreamIndex], amount: action.payload.amount - 1 };
      } else {
        state.items = state.items.filter(item=>item.id !== action.payload.id)
    }
  },

    resetIceCreamCart: (state,action) =>{

      state.items = action.payload
    }
}
});
const store = configureStore({
  reducer: {
    iceCreamCart: cartSlice.reducer,
    removeIceCream: cartSlice.reducer,
    resetIceCreamCart: cartSlice.reducer,
  },
});

export const { addIceCream, removeIceCream, resetIceCreamCart } = cartSlice.actions;
export default store;
