import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";

export const Store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof Store.getState>;

export type AppDispatch = typeof Store.dispatch;
