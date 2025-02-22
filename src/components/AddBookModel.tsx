import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveBook } from '../slice/BookSlice';

const AddBookModal = ({ closeModal }: { closeModal: () => void }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setIsbn] = useState('');
    const [publishedYear, setPublishedYear] = useState('');
    const [genre, setGenre] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [available, setAvailable] = useState(0);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<File | null>(null);

    const dispatch = useDispatch();

    const handleSave = () => {
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

        dispatch(saveBook(formData));
        closeModal();
    };

    return (
        <div>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
            <input type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} placeholder="ISBN" />
            <input type="text" value={publishedYear} onChange={(e) => setPublishedYear(e.target.value)} placeholder="Published Year" />
            <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="Genre" />
            <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} placeholder="Quantity" />
            <input type="number" value={available} onChange={(e) => setAvailable(Number(e.target.value))} placeholder="Available" />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
            <input type="file" onChange={(e) => e.target.files && setImage(e.target.files[0])} />
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default AddBookModal;
