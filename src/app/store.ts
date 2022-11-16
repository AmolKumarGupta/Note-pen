import { configureStore } from "@reduxjs/toolkit";
import bookShelfReducer from "./features/bookShelfSlice";
import bookReducer from "./features/bookSlice";
import currentBookSliceReducer from "./features/currentBookSlice";

const store = configureStore({
    reducer: {
        book: bookReducer,
        bookShelf: bookShelfReducer,
        currentBook: currentBookSliceReducer
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch