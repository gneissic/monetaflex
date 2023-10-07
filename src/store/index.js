import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./product-slice";

const reduxStore = configureStore({
    reducer: {
      product: ProductSlice.reducer,
    },
  });
  export default reduxStore;