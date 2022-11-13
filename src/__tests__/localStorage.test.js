import { fetchBook, fetchBookShelf } from "../helpers/localStorage"

describe('when localStorage is empty', () => {
    test('is fetching valid books', () => {
        expect(fetchBook()).toEqual({
            text: expect.any(String)
        })
    })
    
    test('is fetching valid bookShelfs', () => {
        let expected = [];
        expect(fetchBookShelf()).toEqual(expect.arrayContaining(expected))
    })
})