import { Bookcard } from "components/BookCard/Bookcard";
import Icon from "components/Icon/icon";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "store";
import Typography from "../Typography/Typography";
import styles from "./Favorite.module.css";

const Favorite: React.FC = () => {
  const book = useSelector((state: RootState) => state.book);
  const favoriteBooks = useSelector((state: RootState) => state.favoriteBooks);

  if (favoriteBooks.length === 0) {
    return (
      <Typography variant="h1" className={styles.empty_title}>
        You don't have favorite books
      </Typography>
    );
  }

  return (
    <div>
      <NavLink to={"/"}>
        <button className={styles.backButton}>
          <Icon type="arrowLeft" />
        </button>
      </NavLink>
      <Typography variant="h1">Favorites</Typography>
      <ul className={styles.books}>
        {favoriteBooks.map((book) => (
          <li className={styles.book} key={book.isbn13}>
            <Bookcard book={book} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorite;
