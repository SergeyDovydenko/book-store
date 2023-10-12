import React from "react";
import clsx from "clsx";

import styles from "components/Button/Button.module.css"

interface ITButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: "primary" | "secondary";
    variant?: "standard" | "icon";
    children?: React.ReactNode;
    }

    const Button: React.FC<ITButtonProps> = ({
        onClick,
        children,
        color = "primary",
        variant = "standard",
        className,
        type,
        disabled,
      }) => {
        return (
          <button
            className={clsx(styles.button, styles[color], styles[variant], className)}
            onClick={onClick}
            type={type}
            disabled={disabled}
          >
            {children}
          </button>
        );
      };
      
      export default Button;
      
