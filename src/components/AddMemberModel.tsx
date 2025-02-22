import React, { useState } from "react";
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(saveMember(member)); // Dispatch the saveMember action
        closeModal(); // Close the modal after saving
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
                <h2 className="text-xl font-bold mb-4">Add New Member</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Name:</label>
                        <input
                            type="text"
                            placeholder="Member Name"
                            value={member.name}
                            onChange={(e) => setMember({ ...member, mem_name: e.target.value })}
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Email:</label>
                        <input
                            type="email"
                            placeholder="Member Email"
                            value={member.email}
                            onChange={(e) => setMember({ ...member, mem_email: e.target.value })}
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Phone Number:</label>
                        <input
                            type="text"
                            placeholder="Phone Number"
                            value={member.phoneNumber}
                            onChange={(e) => setMember({ ...member, phoneNumber: e.target.value })}
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Status:</label>
                        <input
                            type="text"
                            placeholder="Status"
                            value={member.status}
                            onChange={(e) => setMember({ ...member, status: e.target.value })}
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4 flex justify-between items-center">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                        >
                            Add Member
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

export default AddMemberModal;
