import { Bookcard } from "components/BookCard/Bookcard";
import Typography from "components/Typography/Typography";
import { Book } from "types/types";

import { NavLink } from "react-router-dom";
import styles from "./Booklist.module.css";

interface BookListProps {
  books: Book[];
}

export const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div className={styles.main}>
      <Typography variant="h1" color="primary">
        NEW RELEASED BOOKS
      </Typography>
      <div className={styles.books_wrapper}>
        {books.map((book) => (
          <NavLink
            style={{ textDecoration: "none" }}
            to={`/books/${book.isbn13}`}
          >
            <Bookcard book={book} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};
