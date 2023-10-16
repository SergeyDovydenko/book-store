import { usePersistedState } from "hooks/usePersistedState";
import React, { useLayoutEffect } from "react";

import styles from "components/Header/Header.module.css";

import Button from "components/Button/Button";
import Icon from "components/Icon/icon";
import Input from "components/Input/Input";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  const [themeName, setThemeName] = usePersistedState<"dark" | "light">({
    key: "theme",
    initialValue: "light",
  });

  const changeTheme = () => {
    setThemeName(themeName === "light" ? "dark" : "light");
  };

  useLayoutEffect(() => {
    document.body.dataset.theme = themeName;
  }, [themeName]);
  return (
    <div className={styles.header}>
      <NavLink to={"/"}>
        <Button variant="iconNoSize" color="noColor">
          <Icon type="logo" />
        </Button>
      </NavLink>
      <div className={styles.searchWrapper}>
        <Input type="text" placeholder="Search" tabIndex={1}></Input>
        <Button
          variant="iconNoSize"
          color="noColor"
          className={styles.search_button}
        >
          <Icon type="search" />
        </Button>
      </div>
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
