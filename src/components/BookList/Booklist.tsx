import { Bookcard } from "components/BookCard/Bookcard";
import Typography from "components/Typography/Typography";
import { Book } from "types/types";

import { NavLink } from "react-router-dom";
import styles from "./Booklist.module.css";

interface BookListProps {
  books: Book[];
  title: string;
}

export const BookList: React.FC<BookListProps> = ({ books, title }) => {
  return (
    <div className={styles.main}>
      <Typography variant="h1" color="primary">
        {title}
      </Typography>
      <div className={styles.books_wrapper}>
        {books.map((book) => (
          <NavLink
            style={{ textDecoration: "none" }}
            to={`/books/${book.isbn13}`}
          >
            <Bookcard book={book} key={book.isbn13} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};
