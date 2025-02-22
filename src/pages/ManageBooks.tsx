import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { getAllBooks, deleteBook } from "../slice/BookSlice";
import { BookModel } from "../model/BookModel";
import AddBookModal from "../components/AddBookModel.tsx";
import EditBookModal from "../components/UpdateBookModel.tsx";
import ArrowLeft from "../assets/icons/left-2-100.png";
import Add from "../assets/icons/add-96.png";
import { useNavigate } from "react-router-dom";

function ManageBooks() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    // Default empty array if books is undefined
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
                    <table className="min-w-full table-auto border-collapse mt-6">
                        <thead>
                        <tr className="bg-gray-100">
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>ISBN</th>
                            <th>Genre</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {books.map((book) => (
                            <tr
                                key={book.id}
                                onClick={() => {
                                    setSelectedBook(book);
                                }}
                                className="hover:bg-gray-50 cursor-pointer"
                            >
                                <td>{book.id}</td>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.isbn}</td>
                                <td>{book.genre}</td>
                                <td>{book.quantity}</td>
                                <td>{book.available}</td>
                                <td className="flex space-x-2">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDelete(book.id);
                                        }}
                                        className="bg-red-500 text-white p-2 rounded"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedBook(book);
                                            setIsEditModalOpen(true);
                                        }}
                                        className="bg-yellow-400 text-black p-2 rounded"
                                    >
                                        Update
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

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