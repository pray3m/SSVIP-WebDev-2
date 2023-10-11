import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state = state.push(action.payload);
    },
    remove(state, action) {
      state = state.filter((item) => item.id != action.payload.id);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
