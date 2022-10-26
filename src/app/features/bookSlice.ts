import { createSlice } from "@reduxjs/toolkit";

let state = {
    text: JSON.parse(localStorage.getItem('book') as string)
};

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