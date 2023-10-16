import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Book, BookDetail } from "types/types";
import { getBookThunk, getNewBooksThunk } from "./books.actions";

interface BookState {
  book: BookDetail | null;
  books: Book[];

  favoriteBooks: Book[];

  loading: boolean;
  error: string | null;
  count: number;
  limit: number;
  offset: number;
}

export const initialState: BookState = {
  book: null,
  books: [],
  favoriteBooks: [],
  loading: false,
  error: null,
  count: 0,
  limit: 3,
  offset: 0,
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    toggleIsFavorite: (state, action: PayloadAction<Book>) => {
      const favoriteBookIndex = state.favoriteBooks.findIndex(
        (e) => e.isbn13 === action.payload.isbn13
      );
      if (favoriteBookIndex === -1) {
        state.favoriteBooks.push(action.payload);
      } else {
        state.favoriteBooks.splice(favoriteBookIndex, 1);
      }
    },

    addItem: (state, action) => {
      state.favoriteBooks.push(action.payload);
    },
    removeItem: (state, action) => {
      state.favoriteBooks = state.favoriteBooks.filter(
        (item) => item !== action.payload
      );
    },
  },

  extraReducers: (builder) => {
    //async reducer
    builder
      .addCase(getNewBooksThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getNewBooksThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload.books;
      })

      .addCase(getBookThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBookThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.book = action.payload;
      });
  },
});

export const { toggleIsFavorite, addItem, removeItem } = bookSlice.actions;
