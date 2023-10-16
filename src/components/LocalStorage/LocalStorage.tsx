import { useDidUpdate } from "hooks/useDidupdate";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store";
import { setFavorites } from "store/books/books.reducer";

export const LocalStorage = () => {
  const favoriteBooks = useSelector((state: RootState) => state.favoriteBooks);
  const dispatch = useDispatch<AppDispatch>();

  useDidUpdate(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteBooks));
  }, [favoriteBooks]);

  useEffect(() => {
    const favoriteLocalStorage = localStorage.getItem("favorites");
    if (favoriteLocalStorage) {
      dispatch(setFavorites(JSON.parse(favoriteLocalStorage)));
    }
  }, []);

  return null;
};
