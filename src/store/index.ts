import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./books/books.reducer";

const store = configureStore({
  reducer: bookSlice.reducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
