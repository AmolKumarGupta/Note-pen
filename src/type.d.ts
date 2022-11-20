
interface Book {
    name?: string,
    title?: string,
    data: string,
    created_at?: string
}

interface Books {
    [key: string]: Book
};

type BookShelf = string[];