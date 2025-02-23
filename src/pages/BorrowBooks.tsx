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
                            <h1 className="text-2xl font-bold text-gray-800">Manage Members</h1>
                            <h1 className="text-white">EMPTY TEXT</h1>
                        </div>
                    </div>
                </header>

                <div className="flex flex-col md:flex-row justify-between px-6 py-6 space-y-6 md:space-y-0 md:space-x-6">
                    {/* Borrow Books Section */}
                    <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow h-[85vh]">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Borrow Books</h3>
                        <div className="mb-4">
                            <label htmlFor="borrowBook" className="block text-sm font-medium text-gray-700">
                                Select Book:
                            </label>
                            <select
                                id="borrowBook"
                                className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
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
                        <div className="mb-4">
                            <label htmlFor="borrowMember" className="block text-sm font-medium text-gray-700">
                                Select Member:
                            </label>
                            <select
                                id="borrowMember"
                                className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
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
                        <button
                            onClick={handleBorrow}
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                        >
                            Borrow Book
                        </button>
                    </div>

                    {/* Return Books Section */}
                    <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Return Books</h3>

                        <div className="mb-4">
                            <label htmlFor="returnBook" className="block text-sm font-medium text-gray-700">
                                Select Book:
                            </label>
                            <select
                                id="returnBook"
                                className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-red-300"
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
                        <div className="mb-4">
                            <label htmlFor="returnMember" className="block text-sm font-medium text-gray-700">
                                Select Member:
                            </label>
                            <select
                                id="returnMember"
                                className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-red-300"
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
