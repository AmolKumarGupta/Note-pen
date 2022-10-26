import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./features/bookSlice";

export default configureStore({
    reducer: {
        book: bookReducer
    }
});