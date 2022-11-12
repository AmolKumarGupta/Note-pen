import { createSlice } from "@reduxjs/toolkit";

let initialState: BookShelf = [];
if( localStorage.getItem("bookShelf")!==null ){
    initialState = JSON.parse( localStorage.getItem("bookShelf") as string );
}

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