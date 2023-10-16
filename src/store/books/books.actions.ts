import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBook, getNewBooks } from "api/books";
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
