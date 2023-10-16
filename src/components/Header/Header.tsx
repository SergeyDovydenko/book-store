import { usePersistedState } from "hooks/usePersistedState";
import React, { useEffect, useLayoutEffect, useState } from "react";

import styles from "components/Header/Header.module.css";

import Button from "components/Button/Button";
import Icon from "components/Icon/icon";
import Input from "components/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppDispatch, RootState } from "store";
import { setQuery } from "store/books/books.reducer";

interface HeaderProps {
  disableSearch?: boolean;
}

const Header: React.FC<HeaderProps> = ({ disableSearch = true }) => {
  const [inputQuery, setInputQuery] = useState<string>("");

  const query = useSelector((state: RootState) => state.query);
  const dispatch = useDispatch<AppDispatch>();

  const [themeName, setThemeName] = usePersistedState<"dark" | "light">({
    key: "theme",
    initialValue: "light",
  });

  const changeTheme = () => {
    setThemeName(themeName === "light" ? "dark" : "light");
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setInputQuery(newQuery);
  };

  useLayoutEffect(() => {
    document.body.dataset.theme = themeName;
  }, [themeName]);

  useEffect(() => {
    if (inputQuery === query) return;

    const timeoutId = setTimeout(() => {
      dispatch(setQuery(inputQuery));
      console.log(inputQuery);
    }, 800);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputQuery]);

  return (
    <div className={styles.header}>
      <NavLink to={"/"}>
        <Button variant="iconNoSize" color="noColor">
          <Icon type="logo" />
        </Button>
      </NavLink>
      {!disableSearch && (
        <div className={styles.searchWrapper}>
          <Input
            type="text"
            onChange={handleQueryChange}
            value={inputQuery}
            placeholder="Search"
            tabIndex={1}
          />

          <Button
            variant="iconNoSize"
            color="noColor"
            className={styles.search_button}
          >
            <Icon type="search" />
          </Button>
        </div>
      )}
      <div className={styles.iconsWrapper}>
        <Button variant="icon" color="noColor">
          <Icon type="cart" />
        </Button>
        <NavLink to={"/favorites"}>
          <Button variant="icon" color="noColor">
            <Icon type="favorite" />
          </Button>
        </NavLink>
        <div className={styles.theme}>
          <input
            type="checkbox"
            name="theme"
            id="theme"
            className={styles.theme__checkbox}
            onChange={changeTheme}
          />
          <span className={styles.theme__icon}></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
