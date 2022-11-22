
export function fetchBooks(){
    let books: Books = JSON.parse(localStorage.getItem('books') as string);
    if( books===null ){
        books = {};
    }
    return books;
}

export function fetchBook(){
    const currentBook: string = fetchCurrentBook();
    let book: Book = {data: ''};
    if( currentBook && currentBook!=='' ) {
        book = JSON.parse(localStorage.getItem(`book_${ currentBook }`) as string);
        if( book===null ){
            book = {
                data: '',
                name: currentBook,
                title: currentBook
            };
        }
    }
    return book;
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