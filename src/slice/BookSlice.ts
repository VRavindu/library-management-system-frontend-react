import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BookModel } from "../model/BookModel.ts";

// Define initial state as an empty array
const initialState: BookModel[] = [];

// Configure Axios API
const api = axios.create({
    baseURL: "http://localhost:3000/book" // Adjust to your backend API URL
});

// Create async thunks to interact with the backend
export const saveBook = createAsyncThunk(
    'book/saveBook',
    async (book: BookModel) => {
        try {
            const response = await api.post('/save', book);
            return response.data;
        } catch (error) {
            console.log('Error:', error);
        }
    }
);

export const getAllBooks = createAsyncThunk(
    'book/getAllBooks',
    async () => {
        try {
            const response = await api.get('/');
            return response.data;
        } catch (error) {
            console.log('Error:', error);
        }
    }
);

export const updateBook = createAsyncThunk(
    'book/update',
    async ({ bookId, bookData }: { bookId: number; bookData: FormData }) => {
        try {
            const response = await api.put(`/update/${bookId}`, bookData);
            return response.data;
        } catch (error) {
            console.log('Error:', error);
        }
    }
);


export const deleteBook = createAsyncThunk(
    'book/deleteBook',
    async (id: string) => {
        try {
            const response = await api.delete(`/delete/${id}`);
            return response.data;
        } catch (error) {
            console.log('Error:', error);
        }
    }
);

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(saveBook.fulfilled, (state, action) => {
                state.push(action.payload);
                alert("Book added successfully");
            })
            .addCase(getAllBooks.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(updateBook.fulfilled, (state, action) => {
                const index = state.findIndex((book) => book.id === action.payload.id);
                if (index !== -1) state[index] = action.payload;
                alert("Book updated successfully");
            })
            .addCase(deleteBook.fulfilled, (state, action) => {
                return state.filter((book) => book.id !== action.payload.id);
            });
    }
});

export default bookSlice.reducer;
