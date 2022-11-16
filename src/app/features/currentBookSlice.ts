import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrentBook } from "../../helpers/localStorage";

const initialState: string = fetchCurrentBook();

export const currentBookSlice = createSlice({
    name: 'currentBook',
    initialState: initialState,
    reducers: {
        changeCurrentBook: (state, {payload}: {payload: string}) => {
            state = payload;
            localStorage.setItem('currentBook', JSON.stringify(state));
            return state;
        }
    }
})

export const {changeCurrentBook} = currentBookSlice.actions;

export default currentBookSlice.reducer;