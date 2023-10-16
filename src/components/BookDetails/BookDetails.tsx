import Button from "components/Button/Button";
import ButtonFavorite from "components/ButtonFavorite/ButtonFavorite";
import Icon from "components/Icon/icon";
import ImageBackground from "components/ImageBackground/ImageBackground";
import Typography from "components/Typography/Typography";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "store";
import { getBookThunk } from "store/books/books.actions";
import { initialState, toggleIsFavorite } from "store/books/books.reducer";
import styles from "./BookDetails.module.css";

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const book = useSelector((state: RootState) => state.book);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!id) {
      return;
    }

    dispatch(getBookThunk(id)).then((res) => res);
  }, []);

  const handleClick = () => {
    if (book) {
      console.log(dispatch(toggleIsFavorite(book)));
      console.log(initialState.favoriteBooks);
    }
  };

  return (
    <div className={styles.main}>
      <NavLink to={"/"}>
        <Button variant="icon" color="noColor" className={styles.button_arrow}>
          <Icon type="arrowLeft"></Icon>
        </Button>
      </NavLink>
      <Typography className={styles.title} variant="h1">
        {book?.title}
      </Typography>
      <div className={styles.wrapper}>
        <div className={styles.image_wrapper}>
          <ImageBackground variant="booksDetails">
            <img src={book?.image} alt={book?.image} />
            <ButtonFavorite
              className={styles.button_favorite}
              onClick={handleClick}
            >
              <Icon type="favorite" className={styles.favorite_icon}></Icon>
            </ButtonFavorite>
          </ImageBackground>
        </div>
        <div className={styles.details_wrapper}>
          <div className={styles.price_wrapper}>
            <Typography variant="h2">{book?.price}</Typography>
            <Typography variant="h3">Rating: {book?.rating}/5</Typography>
          </div>
          <div className={styles.info_wrapper}>
            <div className={styles.column_wrapper1}>
              <Typography variant="p" color="secondary">
                Author:
              </Typography>
              <Typography variant="p" color="secondary">
                Publisher:
              </Typography>
              <Typography variant="p" color="secondary">
                Year:
              </Typography>
              <Typography variant="p" color="secondary">
                Language:
              </Typography>
            </div>
            <div className={styles.column_wrapper2}>
              <Typography variant="p" color="primary">
                {book?.authors}
              </Typography>
              <Typography variant="p" color="primary">
                {book?.publisher}
              </Typography>
              <Typography variant="p" color="primary">
                {book?.year}
              </Typography>
              <Typography variant="p" color="primary">
                English
              </Typography>
            </div>
          </div>
          <Button variant="standart" className={styles.button_cart}>
            <Typography variant="h3" color="reverse">
              ADD TO CARD
            </Typography>
          </Button>
        </div>
      </div>
      <div className={styles.description_wrapper}>
        <Typography
          variant="p"
          color="primary"
          className={styles.description_title}
        >
          Description
        </Typography>
        <Typography variant="p" color="primary">
          {book?.subtitle}
        </Typography>
      </div>
    </div>
  );
};

export default BookDetails;
