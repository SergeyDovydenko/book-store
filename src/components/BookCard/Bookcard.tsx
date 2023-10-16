import Typography from "components/Typography/Typography";
import { Book } from "types/types";

import ImageBackground from "components/ImageBackground/ImageBackground";
import styles from "./Bookcard.module.css";

interface BookCardProps {
  book: Book;
}

export const Bookcard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div key={book.isbn13} className={styles.card_wrapper}>
      <ImageBackground>
        <img src={book.image} alt={book.title} className={styles.book_image} />
      </ImageBackground>
      <Typography variant="h3">{book.title}</Typography>
      <Typography variant="p" color="secondary">
        {book.subtitle}
      </Typography>
      <div className={styles.price_wrapper}>
        <Typography variant="h3">{book.price}</Typography>
      </div>
    </div>
  );
};
