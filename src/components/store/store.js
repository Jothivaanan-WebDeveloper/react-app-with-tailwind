import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./formSlice";
import productSlice from "./productSlice";

const store = configureStore({
    reducer: {
        formStore: formSlice,
        productStore: productSlice
    }
});

export default store;