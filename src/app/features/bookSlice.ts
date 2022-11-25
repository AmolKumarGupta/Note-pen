import { createSlice } from "@reduxjs/toolkit";
import { fetchBook } from "../../helpers/localStorage";

let state: Book = fetchBook();

export const bookSlice = createSlice({
    name: 'book',
    initialState: state,
    reducers: {
        create: (state, action: {payload: string}) =>{
            state = {
                name: action.payload,
                data: '',
                created_at: new Date().toLocaleString()
            }

            localStorage.setItem(`book_${ action.payload }`, JSON.stringify(state));
            return state;

        },
        add: (state, action: { payload: [string, object]}) => {
            let [cur, book] = action.payload;

            if( state ){
                if( state.created_at===undefined ){
                    book = { ...book, created_at: new Date().toLocaleString() }
                }
            }

            state = {...state, ...book};
            localStorage.setItem(`book_${ cur }`, JSON.stringify(state));
            return state;
        },
        change: (state, action: {payload: string}) => {
            let cur = action.payload;
            state = JSON.parse(localStorage.getItem(`book_${ cur }`) as string);
            // state = fetchBook();
            return state;
        },
        remove: (state, {payload}: {payload: string}) => {
            state = { data: '' };
            localStorage.removeItem(`book_${ payload }`);
            return state;
        }
    }
});

export const {create, add, change, remove} = bookSlice.actions;

export default bookSlice.reducer;