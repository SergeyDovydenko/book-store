import React from "react";
import styles from './PostItem.module.css';


interface ITPostItem {
    id?: number;
    title?: string;
    body?: string;
}

const PostItem: React.FC = (props: ITPostItem) => {
    return (
        <div className={styles.post} id="2">
            <div className={styles.post__content}>
                <p>1. React learn</p>
                <div>React is hard</div>
            </div>
            <div className={styles.post__button}>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default PostItem;