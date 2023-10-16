import React, {memo} from "react";
import clsx from "clsx";

import styles from "./Input.module.css";

interface ITInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: "text" | "checkbox" | "email";
    name?: string;
    placeholder?: string;
    tabIndex?: number;
}

const Input: React.FC<ITInputProps> = ({
    onChange,
    type="text",
    name,
    id,
    className,
    placeholder,
    tabIndex,
    }) => {
        return (
            <input
            className={clsx(styles[type], styles.input, className)}
            type={type}
            name={name}
            id={id}
            onChange={onChange}
            placeholder={placeholder}
            tabIndex={tabIndex}
            >
            </input>
        );
    };          

export default memo(Input);