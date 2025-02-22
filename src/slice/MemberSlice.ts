import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { MemberModel } from "../model/MemberModel";

const api = axios.create({
    baseURL: "http://localhost:3000/member"
});

const initialState: MemberModel[] = [];

// Get all members
export const getAllMembers = createAsyncThunk(
    'member/getAllMembers',
    async () => {
        try {
            const response = await api.get('/');
            return response.data;
        } catch (error) {
            console.error("Error fetching members", error);
            throw error;
        }
    }
);

// Get member by ID
export const getMemberById = createAsyncThunk(
    'member/getMemberById',
    async (id: number) => {
        try {
            const response = await api.get(`/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching member", error);
            throw error;
        }
    }
);

// Add new member
export const saveMember = createAsyncThunk(
    'member/saveMember',
    async (member: MemberModel) => {
        try {
            const response = await api.post('/save', member);
            return response.data;
        } catch (error) {
            console.error("Error adding member", error);
            throw error;
        }
    }
);

// Update member
export const updateMember = createAsyncThunk(
    'member/updateMember',
    async (member: MemberModel) => {
        try {
            const response = await api.put(`/update/${member.id}`, member);
            return response.data;
        } catch (error) {
            console.error("Error updating member", error);
            throw error;
        }
    }
);

// Delete member
export const deleteMember = createAsyncThunk(
    'member/deleteMember',
    async (memberId: number) => {
        try {
            const response = await api.delete(`/delete/${memberId}`);
            return response.data;
        } catch (error) {
            console.error("Error deleting member", error);
            throw error;
        }
    }
);

const memberSlice = createSlice({
    name: 'member',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllMembers.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(saveMember.fulfilled, (state, action) => {
                state.push(action.payload);
                alert("Member added successfully");
            })
            .addCase(updateMember.fulfilled, (state, action) => {
                const index = state.findIndex(m => m.id === action.payload.mem_id);
                if (index !== -1) state[index] = action.payload;
                alert("Member updated successfully");
            })
            .addCase(deleteMember.fulfilled, (state, action) => {
                alert("Member Deleted Successfully")
                return state.filter(m => m.id !== action.payload);
            });
    }
});

export default memberSlice.reducer;
