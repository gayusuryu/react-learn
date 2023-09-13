import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //In Vanilla (Older) Redux we cant mutate state like this instead we create a newState and returning is mandatory
      //   const newState = [...state];
      //   newState.items.push(action.payload);
      //   return newState;

      //Redux Toolkit - Here react with the help of Immer library takes care of the mutated state and gives us a new state
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      //If we want to log state use like below
    //   console.log(current(state));
      //RTK says either mutate state or return a new state. So here either do line 26 or 27

      //   state.items.length = 0;
      return {items:[]};
    },
  },
});

export const { addItem, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
