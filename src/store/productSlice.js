import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: STATUSES.IDLE,
  },
  reducers: {},
});
