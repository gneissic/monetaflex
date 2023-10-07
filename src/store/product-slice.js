import { createSlice } from "@reduxjs/toolkit";
const initialProductState = {
  productData: [],
};
const ProductSlice = createSlice({
  name: "products",
  initialState: initialProductState,
  reducers: {
    onAddTrips(state, action) {
        const existingTripItems = action.payload
     state.productData.push({
        id: existingTripItems.id,
        title: existingTripItems.productTitle,
        img: existingTripItems.productImage,
        description: existingTripItems.productDescription,
        price: existingTripItems.productPrice,
    })
    
    },
  },
});
export const productActions = ProductSlice.actions;
export default  ProductSlice;