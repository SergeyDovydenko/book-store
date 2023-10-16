import Pagination from "Pagination/Pagination";
import { BookList } from "components/BookList/Booklist";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store";
import {
  getBooksByQueryThunk,
  getNewBooksThunk,
} from "store/books/books.actions";
import { setPage, setQuery } from "store/books/books.reducer";

const MainContent: React.FC = () => {
  const { books, query, booksCount, currentPage } = useSelector(
    (state: RootState) => state
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!query) {
      dispatch(getNewBooksThunk());
      return;
    }

    dispatch(getBooksByQueryThunk());
  }, [query, currentPage]);

  useEffect(() => {
    dispatch(getNewBooksThunk());
    // dispatch(getBookThunk("9781617294136")).then((res) => console.log(res));

    return () => {
      dispatch(setQuery(""));
    };
  }, []);

  return (
    <div>
      {
        <BookList
          title={query ? `SEARCH RESULTS: ${query}` : "NEW RELEASED BOOKS"}
          books={books}
        />
      }
      <Pagination
        totalRecords={booksCount}
        page={currentPage}
        onClick={(num) => {
          dispatch(setPage(num));
        }}
      />
    </div>
  );
};

export default MainContent;
