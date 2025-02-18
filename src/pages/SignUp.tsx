import FallingBooks from '../assets/images/fallin-books.png';
import FlyingBooks from '../assets/images/meadows-flying-books.png';
import BooksGlobal from '../assets/images/books-3d-globe.png';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-400 relative overflow-hidden flex justify-center items-center px-4">

            <img src={FallingBooks} alt="Books" className="absolute top-0 right-0 w-[40vw] md:w-[35vw] lg:w-[30vw] xl:w-[25vw]" />
            <img src={FlyingBooks} alt="Books" className="absolute bottom-0 left-0 w-[40vw] md:w-[35vw] lg:w-[30vw] xl:w-[25vw]" />
            <img src={BooksGlobal} alt="Books" className="absolute bottom-0 right-0 w-[40vw] md:w-[35vw] lg:w-[30vw] xl:w-[25vw]" />

            <div className="relative bg-gradient-to-br from-blue-300 via-blue-100 to-blue-300 backdrop-blur-sm p-4 sm:p-6 md:p-8 lg:p-10 rounded-[1.5rem] shadow-xl w-full max-w-[90%] sm:max-w-[75%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%]">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 sm:mb-5 lg:mb-6 text-gray-800">Sign Up</h1>

                <form className="space-y-3 sm:space-y-5">
                    <div className="space-y-1">
                        <label className="block text-gray-700 text-xs sm:text-sm font-medium">Username</label>
                        <input
                            type="text"
                            className="block w-full px-3 py-2 sm:py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-blue-50/50"
                            placeholder="Choose a username"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="block text-gray-700 text-xs sm:text-sm font-medium">Email Address</label>
                        <input
                            type="email"
                            className="block w-full px-3 py-2 sm:py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-blue-50/50"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="block text-gray-700 text-xs sm:text-sm font-medium">Password</label>
                        <input
                            type="password"
                            className="block w-full px-3 py-2 sm:py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-blue-50/50"
                            placeholder="Create a password"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="block text-gray-700 text-xs sm:text-sm font-medium">Confirm Password</label>
                        <input
                            type="password"
                            className="block w-full px-3 py-2 sm:py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-blue-50/50"
                            placeholder="Confirm your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 sm:py-3.5 text-sm sm:text-base rounded-lg hover:bg-blue-600 transition duration-200 font-medium shadow-lg hover:shadow-xl mt-3 sm:mt-5"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="mt-3 sm:mt-5 text-center">
                    <p className="text-gray-600 text-xs sm:text-sm">
                        Already have an account?{' '}
                        <button
                            onClick={() => navigate('/')}
                            className="text-blue-600 hover:text-black font-medium"
                        >
                            Log In
                        </button>
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Signup;
