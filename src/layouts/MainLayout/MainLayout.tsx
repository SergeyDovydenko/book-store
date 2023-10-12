import React from "react";

import styles from '../../layouts/MainLayout/MainLayout.module.css';

interface MainLayoutProps {
    Header: React.ReactNode;
    MainContent: React.ReactNode;
    Footer: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ Header, MainContent, Footer }) => {
    return (
    <div className={styles.layout}>
        <header className={styles.header}>{Header}</header>
        <main className={styles.mainContent}>{MainContent}</main>
        <footer className={styles.footer}>{Footer}</footer>
    </div>
    );
};

export default MainLayout;
