import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { getAllMembers, deleteMember } from "../slice/MemberSlice";
import { MemberModel } from "../model/MemberModel";
import AddMemberModal from "../components/AddMemberModel.tsx";
import EditMemberModal from "../components/UpdateMemberModel.tsx";
import ArrowLeft from "../assets/icons/left-2-100.png";
import Add from "../assets/icons/add-96.png";
import { useNavigate } from "react-router-dom";

function ManageMembers() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    // Default empty array if members is undefined
    const members: MemberModel[] = useSelector(
        (state: { member: MemberModel[] }) => state.member || []
    );

    const [selectedMember, setSelectedMember] = useState<MemberModel | null>(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    useEffect(() => {
        dispatch(getAllMembers());
    }, [dispatch]);

    const handleDelete = (memberId: number) => {
        if (memberId) {
            const isConfirmed = window.confirm("Are you sure you want to delete this member?");
            if (isConfirmed) {
                dispatch(deleteMember(memberId));
            }
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
                            <button
                                onClick={() => setIsAddModalOpen(true)}
                                className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                            >
                                <img src={Add} alt="Add" className="w-5 h-5" />
                                <span>Add New Member</span>
                            </button>
                        </div>
                    </div>
                </header>
                <main className="container mx-auto px-4 py-8">
                    <table className="min-w-full table-auto border-collapse mt-6">
                        <thead>
                        <tr className="bg-gray-100">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {members.map((member) => (
                            <tr
                                key={member.id}
                                onClick={() => {
                                    setSelectedMember(member);
                                }}
                                className="hover:bg-gray-50 cursor-pointer"
                            >
                                <td>{member.id}</td>
                                <td>{member.name}</td>
                                <td>{member.email}</td>
                                <td>{member.phoneNumber}</td>
                                <td>{member.status}</td>
                                <td className="flex space-x-2">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDelete(member.id);
                                        }}
                                        className="bg-red-500 text-white p-2 rounded"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedMember(member);
                                            setIsEditModalOpen(true);
                                        }}
                                        className="bg-yellow-400 text-black p-2 rounded"
                                    >
                                        Update
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    {isAddModalOpen && <AddMemberModal closeModal={() => setIsAddModalOpen(false)} />}
                    {isEditModalOpen && selectedMember && (
                        <EditMemberModal
                            member={selectedMember}
                            closeModal={() => setIsEditModalOpen(false)}
                        />
                    )}
                </main>
            </div>
        </div>
    );
}

export default ManageMembers;
