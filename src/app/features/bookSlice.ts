import { createSlice } from "@reduxjs/toolkit";
import { fetchBook } from "../../helpers/localStorage";

let state = fetchBook();

export const bookSlice = createSlice({
    name: 'book',
    initialState: state,
    reducers: {
        add: (state, action) => {
            localStorage.setItem('book', JSON.stringify(action.payload));
        }
    }
});

export const {add} = bookSlice.actions;

export default bookSlice.reducer;