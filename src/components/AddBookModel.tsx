import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveBook } from "../slice/BookSlice";
import { BookModel } from "../model/BookModel";

const AddBookModal = ({ closeModal }: { closeModal: () => void }) => {
    const dispatch = useDispatch();
    const [book, setBook] = useState<BookModel>({
        id: 0,
        title: "",
        author: "",
        isbn: "",
        publishedYear: new Date().getFullYear(),
        genre: "",
        quantity: 1,
        available: 1,
        description: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(saveBook(book)); // Dispatch the saveBook action
        closeModal(); // Close the modal after saving
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
                <h2 className="text-xl font-bold mb-4">Add New Book</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Title:</label>
                        <input
                            type="text"
                            value={book.title}
                            onChange={(e) => setBook({ ...book, title: e.target.value })}
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Author:</label>
                        <input
                            type="text"
                            value={book.author}
                            onChange={(e) => setBook({ ...book, author: e.target.value })}
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">ISBN:</label>
                        <input
                            type="text"
                            value={book.isbn}
                            onChange={(e) => setBook({ ...book, isbn: e.target.value })}
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Published Year:</label>
                        <input
                            type="number"
                            value={book.publishedYear}
                            onChange={(e) => setBook({ ...book, publishedYear: parseInt(e.target.value) })}
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Genre:</label>
                        <input
                            type="text"
                            value={book.genre}
                            onChange={(e) => setBook({ ...book, genre: e.target.value })}
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Quantity:</label>
                        <input
                            type="number"
                            value={book.quantity}
                            onChange={(e) => setBook({ ...book, quantity: parseInt(e.target.value) })}
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Available:</label>
                        <input
                            type="number"
                            value={book.available}
                            onChange={(e) => setBook({ ...book, available: parseInt(e.target.value) })}
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Description:</label>
                        <textarea
                            value={book.description}
                            onChange={(e) => setBook({ ...book, description: e.target.value })}
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4 flex justify-between items-center">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                        >
                            Add Book
                        </button>
                        <button
                            type="button"
                            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBookModal;
