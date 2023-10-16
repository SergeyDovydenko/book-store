import Button from "components/Button/Button";
import { FavoriteBookCard } from "components/FavoriteBookCard/FavoriteBookCard";
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
        You dont have favorite books now
      </Typography>
    );
  }

  return (
    <div className={styles.wrapper}>
      <NavLink to={"/"}>
        <Button className={styles.backButton} variant="icon" color="noColor">
          <Icon type="arrowLeft" />
        </Button>
      </NavLink>
      <Typography variant="h1" className={styles.title}>
        Favorites
      </Typography>
      <ul className={styles.books}>
        {favoriteBooks.map((book) => (
          <li className={styles.book} key={book.isbn13}>
            <FavoriteBookCard book={book} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorite;
