import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBook, getBooksByQuery, getNewBooks } from "api/books";
import { RootState } from "store";
import { Book } from "types/types";

export const getNewBooksThunk = createAsyncThunk(
  "books/getNewBooksThunk",
  async () => {
    const response = await getNewBooks();
    return response;
  }
);

export const getBookThunk = createAsyncThunk(
  "books/getBookThunk",
  async (id: Book["isbn13"]) => {
    const response = await getBook(id);
    return response;
  }
);

export const getBooksByQueryThunk = createAsyncThunk(
  "books/getBooksByQueryThunk",
  async (_, _thunkApi) => {
    const { query, currentPage } = _thunkApi.getState() as RootState;

    const response = await getBooksByQuery(query, currentPage);
    return response;
  }
);
