import { client } from "api";
import { Book, BookDetail } from "types/types";

export interface GetNewBooksResponce {
  total: string;
  books: Book[];
}
export interface GetBookResponce extends BookDetail {}

export const getNewBooks = async (): Promise<GetNewBooksResponce> => {
  return (await client.get("/new")).data;
};

export const getBook = async (id: Book["isbn13"]): Promise<GetBookResponce> => {
  return (await client.get(`/books/${id}`)).data;
};
