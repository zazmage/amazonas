import { configureStore } from "@reduxjs/toolkit";
import database from "./slices/database";
import shoppingCart from "./slices/cart";

export default configureStore({
  reducer: {
    database,
    shoppingCart,
  },
});
