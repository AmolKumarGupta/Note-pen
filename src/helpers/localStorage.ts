
export function fetchBook(){
    let text: string|null = JSON.parse(localStorage.getItem('book') as string);
    if( text===null ){
        text="";
    }
    return {
        text: text
    };
}

export function fetchBookShelf(){
    let initialState: BookShelf = [];
    if( localStorage.getItem("bookShelf")!==null ){
        initialState = JSON.parse( localStorage.getItem("bookShelf") as string );
    }
    return initialState;
}