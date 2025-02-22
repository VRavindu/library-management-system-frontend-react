import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateMember } from "../slice/MemberSlice";
import { MemberModel } from "../model/MemberModel";

const EditMemberModal = ({ member, closeModal }: { member: MemberModel; closeModal: () => void }) => {
    const dispatch = useDispatch();
    const [updatedMember, setUpdatedMember] = useState<MemberModel>(member);

    useEffect(() => {
        setUpdatedMember(member); // Pre-fill form with member data
    }, [member]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(updateMember(updatedMember)); // Dispatch the update action
        closeModal(); // Close the modal after updating
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
                <h2 className="text-xl font-bold mb-4">Edit Member</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Name:</label>
                        <input
                            type="text"
                            value={updatedMember.name}
                            onChange={(e) => setUpdatedMember({ ...updatedMember, mem_name: e.target.value })}
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Email:</label>
                        <input
                            type="email"
                            value={updatedMember.email}
                            onChange={(e) => setUpdatedMember({ ...updatedMember, mem_email: e.target.value })}
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Phone Number:</label>
                        <input
                            type="text"
                            value={updatedMember.phoneNumber}
                            onChange={(e) => setUpdatedMember({ ...updatedMember, phoneNumber: e.target.value })}
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Status:</label>
                        <input
                            type="text"
                            value={updatedMember.status}
                            onChange={(e) => setUpdatedMember({ ...updatedMember, status: e.target.value })}
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4 flex justify-between items-center">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Update Member
                        </button>
                        <button
                            type="button"
                            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditMemberModal;
