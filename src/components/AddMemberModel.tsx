import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { saveMember } from "../slice/MemberSlice";
import { MemberModel } from "../model/MemberModel";

const AddMemberModal = ({ closeModal }: { closeModal: () => void }) => {
    const dispatch = useDispatch();
    const [member, setMember] = useState<MemberModel>({
        mem_id: 0,
        mem_name: "",
        mem_email: "",
        phoneNumber: "",
        membershipStartDate: new Date(),
        status: "",
        borrowedBooksCount: "0",
    });
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest(".bg-white")) {
                closeModal();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [closeModal]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(saveMember(member)); // Dispatch the saveMember action
        closeModal(); // Close the modal after saving
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-blue-300/50 backdrop-blur-sm p-6 rounded-lg shadow-lg w-full max-w-md">
                <div
                    className="relative h-32 rounded-t-2xl overflow-hidden bg-cover bg-center"
                    style={{
                        backgroundImage: 'url("src/assets/images/member-add.jpg")'
                    }}
                >

                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
                        <h1 className="text-4xl font-bold mb-2">Add New Member</h1>
                    </div>
                </div>

                <div className="bg-white/70 rounded-b-2xl shadow-xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative z-0 w-full group">
                            <input
                                type="text"
                                value={member.name}
                                onChange={(e) => setMember({ ...member, mem_name: e.target.value })}
                                id="mem_name"
                                className="block py-2.5 px-0 w-full text-m font-medium text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="mem_name"
                                className="absolute text-m font-medium text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-700 peer-focus:dark:text-blue-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Member Name
                            </label>
                        </div>

                        <div className="relative z-0 w-full group">
                            <input
                                type="email"
                                value={member.email}
                                onChange={(e) => setMember({ ...member, mem_email: e.target.value })}
                                id="mem_email"
                                className="block py-2.5 px-0 w-full text-m font-medium text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="mem_email"
                                className="absolute text-m font-medium text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-700 peer-focus:dark:text-blue-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Email Address
                            </label>
                        </div>

                        <div className="relative z-0 w-full group">
                            <input
                                type="tel"
                                value={member.phoneNumber}
                                onChange={(e) => setMember({ ...member, phoneNumber: e.target.value })}
                                id="phoneNumber"
                                className="block py-2.5 px-0 w-full text-m font-medium text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="phoneNumber"
                                className="absolute text-m font-medium text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-700 peer-focus:dark:text-blue-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Phone Number
                            </label>
                        </div>

                        <div className="relative z-0 w-full group">
                            <select
                                value={member.status}
                                onChange={(e) => setMember({ ...member, status: e.target.value })}
                                id="status"
                                className="block py-2.5 px-0 w-full text-m font-medium text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                required
                            >
                                <option value="">Select status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                                <option value="pending">Pending</option>
                            </select>
                            <label
                                htmlFor="status"
                                className="absolute text-m font-medium text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-700 peer-focus:dark:text-blue-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Status
                            </label>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="w-full bg-green-500 text-white py-2 px-6 rounded-full font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200 flex items-center justify-center gap-2"
                            >
                                Add Member
                            </button>
                            <button
                                type="button"
                                onClick={closeModal}
                                className="px-4 py-2 bg-gray-400 hover:bg-gray-500 w-20 font-medium rounded-full"
                            >
                                Close
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddMemberModal;
