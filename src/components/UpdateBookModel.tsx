import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateBook } from "../slice/BookSlice";
import { BookModel } from "../model/BookModel";

const EditBookModal = ({ book, closeModal }: { book: BookModel; closeModal: () => void }) => {
    const dispatch = useDispatch();
    const [updatedBook, setUpdatedBook] = useState<BookModel>(book);

    useEffect(() => {
        setUpdatedBook(book); // Pre-fill form with book data
    }, [book]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(updateBook(updatedBook)); // Dispatch the update action
        closeModal(); // Close the modal after updating
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
                <h2 className="text-xl font-bold mb-4">Edit Book</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Title:</label>
                        <input
                            type="text"
                            value={updatedBook.title}
                            onChange={(e) => setUpdatedBook({ ...updatedBook, title: e.target.value })}
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Author:</label>
                        <input
                            type="text"
                            value={updatedBook.author}
                            onChange={(e) => setUpdatedBook({ ...updatedBook, author: e.target.value })}
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">ISBN:</label>
                        <input
                            type="text"
                            value={updatedBook.isbn}
                            onChange={(e) => setUpdatedBook({ ...updatedBook, isbn: e.target.value })}
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Published Year:</label>
                        <input
                            type="number"
                            value={updatedBook.publishedYear}
                            onChange={(e) => setUpdatedBook({ ...updatedBook, publishedYear: parseInt(e.target.value) })}
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Genre:</label>
                        <input
                            type="text"
                            value={updatedBook.genre}
                            onChange={(e) => setUpdatedBook({ ...updatedBook, genre: e.target.value })}
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Quantity:</label>
                        <input
                            type="number"
                            value={updatedBook.quantity}
                            onChange={(e) => setUpdatedBook({ ...updatedBook, quantity: parseInt(e.target.value) })}
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Available:</label>
                        <input
                            type="number"
                            value={updatedBook.available}
                            onChange={(e) => setUpdatedBook({ ...updatedBook, available: parseInt(e.target.value) })}
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Description:</label>
                        <textarea
                            value={updatedBook.description}
                            onChange={(e) => setUpdatedBook({ ...updatedBook, description: e.target.value })}
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4 flex justify-between items-center">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Update Book
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

export default EditBookModal;
