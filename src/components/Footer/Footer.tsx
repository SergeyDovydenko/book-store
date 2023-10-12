import React from "react";

import styles from "components/Footer/Footer.module.css"
import Typography from "components/Typography/Typography";

const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <Typography color="secondary">©2022 Bookstore</Typography>
            <Typography color="secondary">All rights reserved</Typography>
        </div>
    )
}

export default Footer;
