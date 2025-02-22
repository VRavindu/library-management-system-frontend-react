export class BookModel {
    id: number;
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    genre: string;
    quantity: number;
    available: number;
    description: string;

    constructor(id: number, title: string, author: string, isbn: string, publishedYear: number, genre: string, quantity: number, available: number, description: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.publishedYear = publishedYear;
        this.genre = genre;
        this.quantity = quantity;
        this.available = available;
        this.description = description;
    }
}
