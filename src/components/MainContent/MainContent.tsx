import { BookList } from "components/BookList/Booklist";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store";
import { getNewBooksThunk } from "store/books/books.actions";

const MainContent: React.FC = () => {
  const books = useSelector((state: RootState) => state.books);
  const loading = useSelector((state: RootState) => state.loading);
  const error = useSelector((state: RootState) => state.error);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getNewBooksThunk());
    // dispatch(getBookThunk("9781617294136")).then((res) => console.log(res));
  }, []);

  return <div>{<BookList books={books} />}</div>;
};

export default MainContent;
