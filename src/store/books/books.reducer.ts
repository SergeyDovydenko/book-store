import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Book, BookDetail } from "types/types";
import {
  getBookThunk,
  getBooksByQueryThunk,
  getNewBooksThunk,
} from "./books.actions";

interface BookState {
  book: BookDetail | null;
  books: Book[];

  favoriteBooks: Book[];

  query: string;

  loading: boolean;
  error: string | null;
  booksCount: number;
  booksPerPage: number;
  currentPage: number;
}

export const initialState: BookState = {
  book: null,
  books: [],
  favoriteBooks: [],
  query: "",
  loading: false,
  error: null,
  booksCount: 0,
  booksPerPage: 10,
  currentPage: 1,
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
    setFavorites: (state, action: PayloadAction<Book[]>) => {
      state.favoriteBooks = action.payload;
    },

    setQuery: (state, action: PayloadAction<BookState["query"]>) => {
      state.query = action.payload;
    },

    setNewBooks: (state, action: PayloadAction<Book[]>) => {
      state.books = action.payload;
    },

    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
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
      })
      .addCase(getBooksByQueryThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBooksByQueryThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload.books;
        state.booksCount = +action.payload.total;
      });
  },
});

export const {
  toggleIsFavorite,
  addItem,
  removeItem,
  setFavorites,
  setNewBooks,
  setQuery,
  setPage,
} = bookSlice.actions;
