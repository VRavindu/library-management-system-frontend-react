import { configureStore } from "@reduxjs/toolkit";
import memberSlice from "../slice/MemberSlice";
import bookSlice from "../slice/BookSlice";
import borrowSlice from "../slice/BorrowSlice.ts";

export const store = configureStore({
    reducer: {
        member: memberSlice,
        book: bookSlice,
        borrow: borrowSlice,
    }
});

export type AppDispatch = typeof store.dispatch;
