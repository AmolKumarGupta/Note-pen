import { createSlice } from "@reduxjs/toolkit";
import { fetchBookShelf } from "../../helpers/localStorage";

let initialState: BookShelf = fetchBookShelf();

export const bookShelfSlice = createSlice({
    name: "bookShelf",
    initialState: initialState,
    reducers: {
        addBook: (state, {payload}: {payload: string}) => {
            state.push(payload);
            localStorage.setItem('bookShelf', JSON.stringify(state));
        }
    }
})

export const {addBook} = bookShelfSlice.actions;
export default bookShelfSlice.reducer;