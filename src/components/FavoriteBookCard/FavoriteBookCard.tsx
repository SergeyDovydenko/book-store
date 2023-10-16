import { useDispatch } from "react-redux";
import { toggleIsFavorite } from "store/books/books.reducer";
import { BookCardProps } from "types/types";

import Button from "components/Button/Button";
import Icon from "components/Icon/icon";
import ImageBackground from "components/ImageBackground/ImageBackground";
import Typography from "components/Typography/Typography";
import { NavLink } from "react-router-dom";
import styles from "./FavoriteBookCard.module.css";

export const FavoriteBookCard: React.FC<BookCardProps> = ({ book }) => {
  const dispath = useDispatch();

  const handleClick = () => {
    dispath(toggleIsFavorite(book));
  };

  return (
    <div className={styles.wrapper}>
      <NavLink to={`/books/${book.isbn13}`}>
        <div className={styles.details_wrapper}>
          <ImageBackground variant="favorite">
            <img className={styles.image} src={book.image} alt={book.title} />
          </ImageBackground>
          <div className={styles.info_wrapper}>
            <Typography className={styles.title} variant="h3" color="primary">
              {book.title}
            </Typography>
            <Typography
              className={styles.description}
              variant="p"
              color="secondary"
            >
              {book.subtitle}
            </Typography>
            <div className={styles.price_wrapper}>
              <Typography variant="h3">{book.price}</Typography>
              <Icon type="rating" />
            </div>
          </div>
        </div>
      </NavLink>
      <div className={styles.heartWrapper}>
        <Button onClick={handleClick} color="noColor" variant="icon">
          <Icon type="favorite" className={styles.icon} />
        </Button>
      </div>
    </div>
  );
};
