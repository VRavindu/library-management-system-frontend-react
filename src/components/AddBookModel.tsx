import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveBook } from '../slice/BookSlice';

const AddBookModal = ({ closeModal }: { closeModal: () => void }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setIsbn] = useState('');
    const [publishedYear, setPublishedYear] = useState('');
    const [genre, setGenre] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [available, setAvailable] = useState(0);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const dispatch = useDispatch();

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImage(file);

            // Generate image preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', author);
        formData.append('isbn', isbn);
        formData.append('publishedYear', publishedYear);
        formData.append('genre', genre);
        formData.append('quantity', String(quantity));
        formData.append('available', String(available));
        formData.append('description', description);
        if (image) formData.append('image', image);

        dispatch(saveBook(formData));
        closeModal();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-blue-300/50 backdrop-blur-sm p-6 rounded-lg shadow-lg w-full max-w-2xl">
                <div
                    className="relative h-32 rounded-t-2xl overflow-hidden bg-cover bg-center"
                    style={{
                        backgroundImage:
                            'url("src/assets/images/books-add-cover.jpg")',
                    }}
                >
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
                        <h1 className="text-3xl font-bold">Add New Book</h1>
                    </div>
                </div>

                <div className="bg-white/70 rounded-b-2xl shadow-xl p-6">
                    <div className="grid grid-cols-2 gap-4">
                        {/* Left Side Inputs */}
                        <div className="space-y-6">
                            <div className="relative z-0 w-full group">
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    id="title"
                                    className="block py-2.5 px-0 w-full text-m font-medium text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="title"
                                       className="absolute text-m font-medium text-gray-900  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-700 peer-focus:dark:text-blue-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Title
                                </label>
                            </div>

                            <div className="relative z-0 w-full group">
                                <input
                                    type="text"
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                    id="author"
                                    className="block py-2.5 px-0 w-full text-m font-medium text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="author"
                                       className="absolute text-m font-medium text-gray-900  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-700 peer-focus:dark:text-blue-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Author
                                </label>
                            </div>

                            <div className="relative z-0 w-full group">
                                <input
                                    type="text"
                                    value={isbn}
                                    onChange={(e) => setIsbn(e.target.value)}
                                    id="isbn"
                                    className="block py-2.5 px-0 w-full text-m font-medium text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="isbn"
                                       className="absolute text-m font-medium text-gray-900  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-700 peer-focus:dark:text-blue-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    ISBN
                                </label>
                            </div>

                            <div className="relative z-0 w-full group">
                                <input
                                    type="text"
                                    value={publishedYear}
                                    onChange={(e) => setPublishedYear(e.target.value)}
                                    id="publishedYear"
                                    className="block py-2.5 px-0 w-full text-m font-medium text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="publishedYear"
                                       className="absolute text-m font-medium text-gray-900  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-700 peer-focus:dark:text-blue-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Published Year
                                </label>
                            </div>
                            <div className="relative z-0 w-full group">
                                <input
                                    type="text"
                                    value={genre}
                                    onChange={(e) => setGenre(e.target.value)}
                                    id="genre"
                                    className="block py-2.5 px-0 w-full text-m font-medium text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="genre"
                                       className="absolute text-m font-medium text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Genre
                                </label>
                            </div>

                        </div>

                        {/* Right Side Inputs */}
                        <div className="space-y-6">
                            <div className="relative z-0 w-full group">
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => setQuantity(Number(e.target.value))}
                                    id="quantity"
                                    className="block py-2.5 px-0 w-full text-m font-medium text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="quantity"
                                       className="absolute text-m font-medium text-gray-900  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-700 peer-focus:dark:text-blue-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Quantity
                                </label>
                            </div>

                            <div className="relative z-0 w-full group">
                                <input
                                    type="number"
                                    value={available}
                                    onChange={(e) => setAvailable(Number(e.target.value))}
                                    id="available"
                                    className="block py-2.5 px-0 w-full text-m font-medium text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="available"
                                       className="absolute text-m font-medium text-gray-900  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-700 peer-focus:dark:text-blue-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Available
                                </label>
                            </div>

                            <div className="relative z-0 w-full group">
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    id="description"
                                    className="block py-2.5 px-0 w-full text-m font-medium text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="description"
                                       className="absolute text-m font-medium text-gray-900  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-700 peer-focus:dark:text-blue-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Description
                                </label>
                            </div>
                            <div className="relative z-0 w-full group">
                                <input
                                    type="file"
                                    onChange={handleImageChange}
                                    id="imageUpload"
                                    className="block w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black"
                                />
                            </div>
                            {imagePreview && (
                                <div className="mt-4 flex justify-center">
                                    <img
                                        src={imagePreview}
                                        alt="Selected Preview"
                                        className="w-32 h-32 object-cover rounded-lg shadow-md"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="mt-4 flex justify-center gap-4">
                        <button
                            onClick={handleSave}
                            className="bg-blue-600 text-white py-2 px-6 rounded-full font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition duration-200"
                        >
                            Save Book
                        </button>
                        <button
                            onClick={closeModal}
                            className="px-4 py-2 bg-gray-400 hover:bg-gray-500 font-medium rounded-full"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBookModal;
