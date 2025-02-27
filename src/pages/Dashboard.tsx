import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/logo-library.png';
import MBooks from '../assets/icons/books-stack-of-three.png';
import Member from '../assets/icons/group-users.png';
import BBooks from '../assets/icons/reading-book.png';
import Search from '../assets/icons/search.svg';
import LogOutIcon from '../assets/icons/logout.svg';
import {useEffect, useState} from "react";
import {getAllBooks} from "../slice/BookSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../store/store.ts";
import {BookModel} from "../model/BookModel.ts";
import {MemberModel} from "../model/MemberModel.ts";
import {getAllMembers} from "../slice/MemberSlice.ts";
import { logOutUser } from '../slice/UserSlice.ts';

function Dashboard() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const books: BookModel[] = useSelector(
        (state: { book: BookModel[] }) => state.book || []
    );
    const members: MemberModel[] = useSelector(
        (state: { member: MemberModel[] }) => state.member || []
    );
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedBook, setSelectedBook] = useState<BookModel | null>(null);
    const [filteredBooks, setFilteredBooks] = useState<BookModel[]>([]);
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query.length > 0) {
            setFilteredBooks(
                books.filter((book) =>
                    book.title.toLowerCase().includes(query.toLowerCase())
                )
            );
        } else {
            setFilteredBooks([]);
        }
    };
    const handleSelectBook = (book: BookModel) => {
        setSearchQuery(book.title);
        setSelectedBook(book);
        setFilteredBooks([]);
    };
    const handleSearch = () => {
        if (selectedBook) {
            navigate(`/manage-books`);
        }
    };
    useEffect(() => {
        dispatch(getAllBooks());
        dispatch(getAllMembers());
    }, [dispatch]);

    const handleLogout = () => {
        dispatch(logOutUser());
        
        localStorage.removeItem('authToken');
        sessionStorage.removeItem('authToken');
        
        navigate('/');
    };

    return (
        <div
            className="min-h-screen relative bg-blue-300"
            style={{
                backgroundImage: "url('src/assets/images/11.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/70 to-blue-400/90 backdrop-blur-sm"></div>

            {/* Content Container */}
            <div className="relative">
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-1 md:space-y-0">
                        <div className="flex items-center space-x-2">
                            <img src={Logo} alt='Logo' className="w-20"/>
                            <span className="text-xl font-bold text-gray-800">LibraryApp</span>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-3xl font-bold hover:bg-blue-600 transition duration-200"
                                    onClick={() => navigate('/manage-books')}>
                                <img src={MBooks} alt='Books' className="w-8"/>
                                <span>Manage Books</span>
                            </button>
                            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-3xl font-bold hover:bg-blue-600 transition duration-200"
                                    onClick={() => navigate('/manage-members')}>
                                <img src={Member} alt='Member' className="w-8"/>
                                <span>Manage Members</span>
                            </button>
                            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-3xl font-bold hover:bg-blue-600 transition duration-200"
                                    onClick={() => navigate('/borrow-books')}>
                                <img src={BBooks} alt='Book' className="h-8"/>
                                <span>Borrow Books</span>
                            </button>
                            <button className= 'px-4 py-2'
                                    onClick={handleLogout}
                            >
                                <img src={LogOutIcon} alt="LogOut" className="h-8"/>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <div className="flex justify-center w-full pb-16">
                    <div className="relative w-2/5">
                        <input
                            type="text"
                            placeholder="Search books..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="w-full pl-4 pr-10 py-2 rounded-3xl border font-medium border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button
                            onClick={handleSearch}
                            className="absolute right-0 top-0 h-full px-4 bg-blue-500 text-white rounded-r-3xl hover:bg-blue-600 transition duration-200"
                        >
                            <img src={Search} alt="Search" className="w-5" />
                        </button>

                        {filteredBooks.length > 0 && (
                            <ul className="absolute w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-40 overflow-auto z-50">
                                {filteredBooks.map((book) => (
                                    <li
                                        key={book.id}
                                        onClick={() => handleSelectBook(book)}
                                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                    >
                                        {book.title}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                {/* Top Books Section */}
                <div className="mb-12">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-white">Top Books</h2>
                        <button
                            className="text-white hover:text-black font-medium transition duration-200"
                            onClick={() => navigate('/manage-books')}
                        >
                            View all
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {books.slice(0, 6).map((book) => (
                            <div key={book.id} className="max-w-xs bg-blue-100 rounded-2xl shadow-lg hover:shadow-xl cursor-pointer transition-transform transform hover:scale-105">
                                <img
                                    src={`http://localhost:3000/uploads/books/${book.imagePath.split('\\').pop()}`}
                                    alt="book cover"
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                                <div className="p-4 text-center">
                                    <h4 className="text-lg font-semibold text-gray-800">{book.title}</h4>
                                    <p className="text-sm text-gray-600 font-medium"> {book.author}</p>
                                    <p className="text-sm text-gray-600 font-medium"> {book.publishedYear}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Members Section */}
                <div>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-white">Top Members</h2>
                        <button
                            className="text-white hover:text-black font-medium transition duration-200"
                            onClick={() => navigate('/manage-members')}
                        >
                            View all
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {members.slice(0, 6).map((member) => (
                            <div key={member.id} className="max-w-xs bg-blue-100 rounded-2xl shadow-lg hover:shadow-xl cursor-pointer transition-transform transform hover:scale-105 p-4 text-center">
                                <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
        </div>
    );
}

export default Dashboard;