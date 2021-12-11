import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    dataShoppCart: [],
  },
  reducers: {
    setShoppingCart: (state, action) => {
      state.dataShoppCart = [...state.dataShoppCart, action.payload];
    },
  },
});

export const { setShoppingCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;

export const addData = (item) => (dispatch) => dispatch(setShoppingCart(item));
