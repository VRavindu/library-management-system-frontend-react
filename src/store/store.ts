import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "../slice/BookSlice";

export const store = configureStore({
    reducer: {
        book: bookSlice
    }
});

export type AppDispatch = typeof store.dispatch;
