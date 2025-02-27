import { configureStore } from "@reduxjs/toolkit";
import memberSlice from "../slice/MemberSlice";
import bookSlice from "../slice/BookSlice";
import borrowSlice from "../slice/BorrowSlice.ts";
import UserSlice from "../slice/UserSlice.ts";

export const store = configureStore({
    reducer: {
        member: memberSlice,
        book: bookSlice,
        borrow: borrowSlice,
        user : UserSlice
    }
});

export type AppDispatch = typeof store.dispatch;
