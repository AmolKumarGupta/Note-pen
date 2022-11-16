import { fetchBooks, fetchBookShelf, fetchCurrentBook } from "../../helpers/localStorage"

describe('when localStorage is empty', () => {
    test('is fetching valid books', () => {
        expect(fetchBooks()).toEqual({})
    })
    
    test('is fetching valid bookShelfs', () => {
        localStorage.setItem('bookShelf', JSON.stringify(["todo"]));
        expect(fetchBookShelf()).toEqual(["todo"])
    })

    test("is fetching currentBook", ()=>{
        expect(fetchCurrentBook()).toEqual("example");
    })
})