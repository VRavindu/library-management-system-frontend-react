import { useNavigate } from 'react-router-dom';
import Search from '../assets/icons/search.svg';
import Add from '../assets/icons/add-96.png';
import ArrowLeft from '../assets/icons/left-2-100.png';


function ManageBooks() {
    const navigate = useNavigate();

    return (
        <div
            className="min-h-screen relative"
            style={{
                backgroundImage: "url('src/assets/images/library-racks.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/65 to-blue-400/90 backdrop-blur-sm"></div>

                {/* Content Container */}
                <div className="relative">
                {/* Header */}
                <header className="bg-white shadow-md">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                            {/* Back Button and Title */}
                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={() => navigate('/dashboard')}
                                    className="flex items-center space-x-2 text-blue-500 font-medium hover:text-blue-600 transition duration-200"
                                >
                                    <img src={ArrowLeft} alt='Arrow' className="w-5 h-5" />
                                    <span>Dashboard</span>
                                </button>
                            </div>
                            <h1 className="text-2xl font-bold text-gray-800">Manage Books</h1>
                            {/*Add Book */}
                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
                                <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200">
                                    <img src={Add} alt='Add' className="w-5 h-5" />
                                    <span>Add New Book</span>
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
                    {/*Todo Books Card Logics*/}
                </main>

                {/* Todo Book Details Modal */}

            </div>
        </div>
    );
}

export default ManageBooks;