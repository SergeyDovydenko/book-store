import clsx from "clsx";
import Icon from "components/Icon/icon";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import styles from "./Button.favorite.module.css";

interface IHeartButtonsProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ButtonFavorite: React.FC<IHeartButtonsProps> = ({
  className,
  onClick,
}) => {
  const book = useSelector((state: RootState) => state.book);
  const favoriteBooks = useSelector((state: RootState) => state.favoriteBooks);
  const isFavorite = favoriteBooks.some(
    (favoriteBook) => favoriteBook.isbn13 === book?.isbn13
  );

  return (
    <button onClick={onClick} className={clsx(styles.button, className)}>
      {isFavorite && <Icon type="favorite" className={styles.iconActive} />}
      {!isFavorite && <Icon type="favorite" className={styles.icon} />}
    </button>
  );
};

export default ButtonFavorite;
