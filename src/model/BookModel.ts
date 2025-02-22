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
    imagePath: string; // New field for storing image as Base64

    constructor(
        id: number,
        title: string,
        author: string,
        isbn: string,
        publishedYear: number,
        genre: string,
        quantity: number,
        available: number,
        description: string,
        imagePath: string = "" // Default empty string for image
    ) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.publishedYear = publishedYear;
        this.genre = genre;
        this.quantity = quantity;
        this.available = available;
        this.description = description;
        this.imagePath = imagePath; // Initialize the image property
    }
}
