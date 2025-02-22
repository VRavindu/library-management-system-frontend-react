import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateBook } from '../slice/BookSlice';

const EditBookModal = ({ book, closeModal }: { book: any, closeModal: () => void }) => {
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [isbn, setIsbn] = useState(book.isbn);
    const [publishedYear, setPublishedYear] = useState(book.publishedYear);
    const [genre, setGenre] = useState(book.genre);
    const [quantity, setQuantity] = useState(book.quantity);
    const [available, setAvailable] = useState(book.available);
    const [description, setDescription] = useState(book.description);
    const [image, setImage] = useState<File | null>(null);

    const dispatch = useDispatch();

    const handleUpdate = () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', author);
        formData.append('isbn', isbn);
        formData.append('publishedYear', publishedYear);
        formData.append('genre', genre);
        formData.append('quantity', String(quantity));
        formData.append('available', String(available));
        formData.append('description', description);
        if (image) formData.append('image', image);

        dispatch(updateBook({ bookId: book.id, bookData: formData }));
        closeModal();
    };

    return (
        <div>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
            <input type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
            <input type="text" value={publishedYear} onChange={(e) => setPublishedYear(e.target.value)} />
            <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
            <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
            <input type="number" value={available} onChange={(e) => setAvailable(Number(e.target.value))} />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="file" onChange={(e) => e.target.files && setImage(e.target.files[0])} />
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default EditBookModal;
