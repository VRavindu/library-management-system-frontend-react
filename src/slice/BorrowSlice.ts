import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/borrow',
});

export const borrowBook = createAsyncThunk(
    'borrow/borrowBook',
    async (borrowData: { bookId: number; memberId: number }) => {
        try {
            const response = await api.post('/', borrowData);
            return response.data;
        } catch (error) {
            console.log('Error:', error);
        }
    }
);

export const returnBook = createAsyncThunk(
    'borrow/returnBook',
    async (data: { bookId: number; memberId: number }) => {
        try {
            const response = await axios.post('http://localhost:3000/return', data);
            return response.data;
        } catch (error) {
            console.log('Error:', error);
        }
    }
);

const borrowSlice = createSlice({
    name: "borrow",
    initialState: { borrowedBooks: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(borrowBook.fulfilled, (state, action) => {
                state.borrowedBooks.push(action.payload);
                alert("Book borrowed successfully");
            })
            .addCase(returnBook.fulfilled, (state, action) => {
                state.borrowedBooks = state.borrowedBooks.filter(
                    (book) => book.bookId !== action.payload.bookId || book.memberId !== action.payload.memberId
                );
                alert("Book returned successfully");
            });
    },
});

export default borrowSlice.reducer;
