import { configureStore } from "@reduxjs/toolkit";
import bookShelfReducer from "./features/bookShelfSlice";
import bookReducer from "./features/bookSlice";

const store = configureStore({
    reducer: {
        book: bookReducer,
        bookShelf: bookShelfReducer
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch