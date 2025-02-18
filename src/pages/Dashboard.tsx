import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/logo-library.png';
import MBooks from '../assets/icons/books-stack-of-three.png';
import Member from '../assets/icons/group-users.png';
import BBooks from '../assets/icons/reading-book.png';
import RBooks from '../assets/icons/book.png';
import Search from '../assets/icons/search.svg';

function Dashboard() {
    const navigate = useNavigate();

    return (
        <div
            className="min-h-screen relative"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=2000&auto=format&fit=crop&q=80')",
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
                                    onClick={() => navigate('/dashboard')}>
                                <img src={Member} alt='Member' className="w-8"/>
                                <span>Manage Members</span>
                            </button>
                            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-3xl font-bold hover:bg-blue-600 transition duration-200"
                                    onClick={() => navigate('/dashboard')}>
                                <img src={BBooks} alt='Book' className="h-8"/>
                                <span>Borrow Books</span>
                            </button>
                            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-3xl font-bold hover:bg-blue-600 transition duration-200"
                                    onClick={() => navigate('/dashboard')}>
                                <img src={RBooks} alt='Books' className="h-8"/>
                                <span>Return Books</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                {/*SearchBar*/}
                <div className="flex justify-center w-full pb-16">
                    <div className="relative w-2/5">
                        <input
                            type="text"
                            placeholder="Search books..."
                            className="w-full pl-4 pr-10 py-2 rounded-3xl border font-medium border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button className="absolute right-0 top-0 h-full px-4 bg-blue-500 text-white rounded-r-3xl hover:bg-blue-600 transition duration-200">
                            <img src={Search} alt="Search" className="w-5"/>
                        </button>
                    </div>
                </div>

                {/* Top Books Section */}
                <div className="mb-12">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-white">Top Books</h2>
                        <button className="text-white hover:text-blue-200 transition duration-200">
                            View all
                        </button>
                    </div>
                    {/*Todo Top Books logics*/}
                </div>

                {/* Top Members Section */}
                <div>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-white">Top Members</h2>
                        <button className="text-white hover:text-blue-200 transition duration-200">
                            View all
                        </button>
                    </div>
                    {/*Todo Top Members logics*/}
                </div>
            </main>
        </div>
        </div>
    );
}

export default Dashboard;