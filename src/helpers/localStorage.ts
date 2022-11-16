
export function fetchBooks(){
    let books: Books = JSON.parse(localStorage.getItem('books') as string);
    if( books===null ){
        books = {};
    }
    return books;
}

export function fetchBookShelf(){
    let initialState: BookShelf = ["example"];
    if( localStorage.getItem("bookShelf")!==null ){
        initialState = JSON.parse( localStorage.getItem("bookShelf") as string );
    }
    return initialState;
}

export function fetchCurrentBook(): string {
    return ( localStorage.getItem("currentBook")!==null )? JSON.parse( localStorage.getItem("currentBook") as string ): "example";
}