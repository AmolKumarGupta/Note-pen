import currentBookReducer, { changeCurrentBook } from "../app/features/currentBookSlice";
import { useAppDispatch, useAppSelector } from "../app/hook";
import store from '../app/store';

describe('tests on redux', () => {
    test('is valid store', ()=>{
        expect(store).toEqual(expect.any(Object))
    })

    test('has useAppDispatch function', ()=>{
        expect(useAppDispatch).toBeDefined()
    })

    test('has useAppSelector function', ()=>{
        expect(useAppSelector).toBeDefined()
    })
});

describe('redux/ currentBook', ()=>{
    test('should return initial state', ()=>{
        expect(currentBookReducer(undefined, {type: undefined})).toEqual('example');   
    });

    test('should have a new state', ()=>{
        let prev = 'example';

        expect(currentBookReducer(prev, changeCurrentBook('test'))).toEqual('test');
    });
});