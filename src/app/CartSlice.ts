import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./Store";
import { toast } from "react-hot-toast";

interface CounterState {
  cartState: any;
  cartItems: any;
}

const initialState: CounterState = {
  cartState: false,
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart") ?? "")
    : [], // Let suppose Database
};

export const cartSlice = createSlice({
  name: "cart",

  initialState,
  reducers: {
    setOpenCart: (state, action: PayloadAction<any>) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action: PayloadAction<any>) => {
      state.cartState = action.payload.cartState;
    },
    setAddItemToCart: (state, action: PayloadAction<any>) => {
      const itemIndex = state.cartItems.findIndex(
        (item: any) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;

        toast.success(`Item quantity Increased`);
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);

        toast.success(`${action.payload.title} added to Cart`);
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setRemoveItemFromCart: (state, action: PayloadAction<any>) => {
      const removeItem = state.cartItems.filter(
        (item: any) => item.id !== action.payload.id
      );

      state.cartItems = removeItem;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));

      toast.success(`${action.payload.title} Removed from Cart`);
    },
    setIncreaseItemQTY: (state, action: PayloadAction<any>) => {
      const itemIndex = state.cartItems.findIndex(
        (item: any) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;

        toast.success(`Item QTY Increased`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setDecreaseItemQTY: (state, action: PayloadAction<any>) => {
      const itemIndex = state.cartItems.findIndex(
        (item: any) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.success(`Item QTY Decreased`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setClearCartItems: (state, action: PayloadAction<any>) => {
      state.cartItems = [];
      toast.success(`Cart Cleared`);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
});

export const {
  setOpenCart,
  setCloseCart,
  setAddItemToCart,
  setRemoveItemFromCart,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
  setClearCartItems,
} = cartSlice.actions;
export const selectCartState = (state: RootState) => state.cart.cartState;
export const selectCartItems = (state: RootState) => state.cart.cartItems;

export default cartSlice.reducer;
