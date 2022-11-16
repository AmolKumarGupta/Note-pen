
interface Book {
    name?: string,
    title?: string,
    data: string
}

interface Books {
    [key: string]: Book
};

type BookShelf = string[];