import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "../../helpers/localStorage";

let state: Books = fetchBooks();

export const bookSlice = createSlice({
    name: 'book',
    initialState: state,
    reducers: {
        add: (state, action) => {
            state[action.payload.name] = action.payload.book;
            localStorage.setItem('books', JSON.stringify(state));
        }
    }
});

export const {add} = bookSlice.actions;

export default bookSlice.reducer;