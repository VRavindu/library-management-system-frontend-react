import { configureStore } from "@reduxjs/toolkit";
import memberSlice from "../slice/MemberSlice";
import bookSlice from "../slice/BookSlice";

export const store = configureStore({
    reducer: {
        member: memberSlice,
        book: bookSlice
    }
});

export type AppDispatch = typeof store.dispatch;
