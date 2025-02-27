import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../slice/BookSlice";
import { getAllMembers } from "../slice/MemberSlice";
import { borrowBook, returnBook } from "../slice/BorrowSlice";
import { AppDispatch } from "../store/store.ts";
import ArrowLeft from "../assets/icons/left-2-100.png";
import {useNavigate} from "react-router-dom";
import {MemberModel} from "../model/MemberModel.ts";
import {BookModel} from "../model/BookModel.ts";

const BorrowReturnBooks = () => {
    const dispatch = useDispatch<AppDispatch>();
    const books: BookModel[] = useSelector(
        (state: { book: BookModel[] }) => state.book || []
    );
    const members: MemberModel[] = useSelector(
        (state: { member: MemberModel[] }) => state.member || []
    );
    const navigate = useNavigate();

    const [selectedBorrowBook, setSelectedBorrowBook] = useState<number | null>(null);
    const [selectedBorrowMember, setSelectedBorrowMember] = useState<number | null>(null);
    const [selectedReturnBook, setSelectedReturnBook] = useState<number | null>(null);
    const [selectedReturnMember, setSelectedReturnMember] = useState<number | null>(null);

    useEffect(() => {
        dispatch(getAllBooks());
        dispatch(getAllMembers());
    }, [dispatch]);

    const selectedBook = books.find((book) => book.id === selectedBorrowBook);
    const selectedMember = members.find((member) => member.id === selectedBorrowMember);
    const selectedReBook = books.find((book) => book.id === selectedReturnBook);
    const selectedReMember = members.find((member) => member.id === selectedReturnMember);
    const handleBorrow = () => {
        if (selectedBorrowBook && selectedBorrowMember) {
            const borrowData = {
                bookId: selectedBorrowBook,
                memberId: selectedBorrowMember,
            };
            dispatch(borrowBook(borrowData));
        } else {
            alert("Please select both a book and a member.");
        }
    };

    const handleReturn = () => {
        if (selectedReturnBook && selectedReturnMember) {
            const returnData = {
                bookId: selectedReturnBook,
                memberId: selectedReturnMember,
            };
            dispatch(returnBook(returnData));
        } else {
            alert("Please select both a book and a member.");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500/65 to-blue-400/90 relative"
             style={{
                 backgroundImage: "url('src/assets/images/bookshelf.jpeg')",
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 backgroundAttachment: 'fixed'
             }}
        >
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
                            <h1 className="text-2xl font-bold text-gray-800">Manage Members</h1>
                            <h1 className="text-white">EMPTY TEXT</h1>
                        </div>
                    </div>
                </header>

                <div className="flex flex-col md:flex-row justify-between px-6 py-6 space-y-6 md:space-y-0 md:space-x-6">
                    {/* Borrow Books Section */}
                    <div className="w-full md:w-1/2 bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow h-[85vh]">
                        <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Borrow Books</h3>

                        {/* Select Book */}
                        <div className="relative z-0 w-full group mb-4">
                            <select
                                id="borrowBook"
                                className="block py-2.5 px-4 w-full text-m font-medium text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                onChange={(e) => setSelectedBorrowBook(Number(e.target.value))}
                            >
                                <option value="">Select Book</option>
                                {books.map((book) => (
                                    <option key={book.id} value={book.id}>
                                        {book.title}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Book Details */}
                        {selectedBook && (
                            <div className="p-4 border rounded-lg bg-gray-100">
                                <h2 className="text-lg font-bold text-gray-800">Book Details</h2>
                                <p><strong>Title:</strong> {selectedBook.title}</p>
                                <p><strong>Author:</strong> {selectedBook.author}</p>
                                <p><strong>Genre:</strong> {selectedBook.genre}</p>
                                <p><strong>Published Year:</strong> {selectedBook.publishedYear}</p>
                                <p><strong>Available:</strong> {selectedBook.available}</p>
                            </div>
                        )}

                        {/* Select Member */}
                        <div className="relative z-0 w-full group mb-4">
                            <select
                                id="borrowMember"
                                className="block py-2.5 px-4 w-full text-m font-medium text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                onChange={(e) => setSelectedBorrowMember(Number(e.target.value))}
                            >
                                <option value="">Select Member</option>
                                {members.map((member) => (
                                    <option key={member.id} value={member.id}>
                                        {member.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Member Details */}
                        {selectedMember && (
                            <div className="p-4 border rounded-lg bg-gray-100">
                                <h2 className="text-lg font-bold text-gray-800">Member Details</h2>
                                <p><strong>Name:</strong> {selectedMember.name}</p>
                                <p><strong>Email:</strong> {selectedMember.email}</p>
                                <p><strong>Phone:</strong> {selectedMember.phoneNumber}</p>
                                <p><strong>Borrowed Book Count:</strong> {selectedMember.borrowedBooksCount}</p>
                            </div>
                        )}

                        {/* Borrow Button */}
                        <button
                            onClick={handleBorrow}
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                        >
                            Borrow Book
                        </button>
                    </div>

                    {/* Return Books Section */}
                    <div className="w-full md:w-1/2 bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow">
                        <h3 className="text-2xl font-semibold text-center text-gray-700 mb-4">Return Books</h3>

                        {/* Select Book */}
                        <div className="relative z-0 w-full group mb-4">
                            <select
                                id="returnBook"
                                className="block py-2.5 px-4 w-full text-m font-medium text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer"
                                onChange={(e) => setSelectedReturnBook(Number(e.target.value))}
                            >
                                <option value="">Select Book</option>
                                {books.map((book) => (
                                    <option key={book.id} value={book.id}>
                                        {book.title}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Book Details */}
                        {selectedReBook && (
                            <div className="p-4 border rounded-lg bg-gray-100">
                                <h2 className="text-lg font-bold text-gray-800">Book Details</h2>
                                <p><strong>Title:</strong> {selectedReBook.title}</p>
                                <p><strong>Author:</strong> {selectedReBook.author}</p>
                                <p><strong>Published Year:</strong> {selectedReBook.publishedYear}</p>
                                <p><strong>Genre:</strong> {selectedReBook.genre}</p>
                                <p><strong>Quantity Available:</strong> {selectedReBook.available}</p>
                            </div>
                        )}

                        {/* Select Member */}
                        <div className="relative z-0 w-full group mb-4">
                            <select
                                id="returnMember"
                                className="block py-2.5 px-4 w-full text-m font-medium text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer"
                                onChange={(e) => setSelectedReturnMember(Number(e.target.value))}
                            >
                                <option value="">Select Member</option>
                                {members.map((member) => (
                                    <option key={member.id} value={member.id}>
                                        {member.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Member Details */}
                        {selectedReMember && (
                            <div className="p-4 border rounded-lg bg-gray-100">
                                <h2 className="text-lg font-bold text-gray-800">Member Details</h2>
                                <p><strong>Name:</strong> {selectedReMember.name}</p>
                                <p><strong>Email:</strong> {selectedReMember.email}</p>
                                <p><strong>Phone:</strong> {selectedReMember.phoneNumber}</p>
                                <p><strong>Borrowed Book Count:</strong> {selectedReMember.borrowedBooksCount}</p>
                            </div>
                        )}

                        {/* Return Button */}
                        <button
                            onClick={handleReturn}
                            className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
                        >
                            Return Book
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BorrowReturnBooks;
