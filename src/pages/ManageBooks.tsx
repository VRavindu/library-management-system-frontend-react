import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { getAllBooks, deleteBook } from "../slice/BookSlice";
import { BookModel } from "../model/BookModel";
import AddBookModal from "../components/AddBookModel.tsx";
import EditBookModal from "../components/UpdateBookModel.tsx";
import ArrowLeft from "../assets/icons/left-2-100.png";
import Add from "../assets/icons/add-96.png";
import Delete from "../assets/icons/trash-90.png";
import Update from "../assets/icons/update-96.png";
import View from "../assets/icons/visibility.svg";

import { useNavigate } from "react-router-dom";

function ManageBooks() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const books: BookModel[] = useSelector(
        (state: { book: BookModel[] }) => state.book || []
    );

    const [selectedBook, setSelectedBook] = useState<BookModel | null>(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    useEffect(() => {
        dispatch(getAllBooks());
    }, [dispatch]);

    const handleDelete = (bookId: number) => {
        if (bookId) {
            const isConfirmed = window.confirm("Are you sure you want to delete this book?");
            if (isConfirmed) {
                dispatch(deleteBook(bookId));
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500/65 to-blue-400/90 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/65 to-blue-400/90 backdrop-blur-sm"></div>
            <div className="relative">
                <header className="bg-white shadow-md">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <button
                                onClick={() => navigate("/dashboard")}
                                className="flex items-center space-x-2 text-blue-500 font-medium hover:text-blue-600"
                            >
                                <img src={ArrowLeft} alt="Back" className="w-5 h-5" />
                                <span>Dashboard</span>
                            </button>
                            <h1 className="text-2xl font-bold text-gray-800">Manage Books</h1>
                            <button
                                onClick={() => setIsAddModalOpen(true)}
                                className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                            >
                                <img src={Add} alt="Add" className="w-5 h-5" />
                                <span>Add New Book</span>
                            </button>
                        </div>
                    </div>
                </header>
                <main className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {books.map((book) => (
                            <div className="max-w-xs bg-blue-200 rounded-2xl shadow-lg hover:shadow-xl cursor-pointer transition-transform transform hover:scale-105">
                                <img
                                    src={`http://localhost:3000/uploads/books/${book.imagePath.split('\\').pop()}`}
                                    alt="book cover"
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                                <div className="p-4 text-center">
                                    <h4 className="text-lg font-semibold text-gray-800">Title : {book.title}</h4>
                                    <p className="text-sm text-gray-600"><span className="font-medium">Author : </span>{book.author}</p>
                                    <p className="text-sm text-gray-500"><span className="font-medium">Published Year : </span>{book.publishedYear}</p>
                                    <p className="text-sm text-gray-500"><span className="font-medium">Genre : </span>{book.genre}</p>
                                    <div className="mt-4 flex space-x-2 justify-center">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleDelete(book.id);
                                            }}
                                        >
                                            <img src={Delete} alt="Delete" className="w-6 hover:w-7"/>
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedBook(book);
                                                console.log(book);
                                                setIsEditModalOpen(true);
                                            }}
                                        >
                                            <img src={Update} alt="Update" className="w-6 hover:w-7"/>
                                        </button>
                                        <button
                                            onClick={() => console.log('Viewing book details')}
                                        >
                                            <img src={View} alt="View" className="w-6 hover:w-7"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {isAddModalOpen && <AddBookModal closeModal={() => setIsAddModalOpen(false)} />}
                    {isEditModalOpen && selectedBook && (
                        <EditBookModal book={selectedBook} closeModal={() => setIsEditModalOpen(false)} />
                    )}
                </main>
            </div>
        </div>
    );
}

export default ManageBooks;
