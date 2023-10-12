import React, { useLayoutEffect } from "react";
import { usePersistedState } from "hooks/usePersistedState"

import styles from "components/Header/Header.module.css"

import Icon from "components/Icon/icon";

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
            <Icon type="logo"/>
            <div className={styles.searchWrapper}>
                <input
                    type="text"
                    className={styles.search}
                    placeholder="Search"
                />
                <Icon type="search"/>
            </div>
            <div className={styles.iconsWrapper}>
                <button className={styles.cartButton}>
                <Icon type="cart"/>
                </button>
                <button className={styles.heartButton}>
                    <Icon type="favorite"/>
                </button>
                <div className="theme">
                    <input type="checkbox" name="theme" id="theme" onChange={changeTheme}/>
                </div>
            </div>
        </div>
    )

}

export default Header;
