import clsx from "clsx";
import React from "react";

import styles from "components/Button/Button.module.css";

interface ITButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "noColor" | "reverse";
  variant?: "standart" | "icon" | "iconNoSize";
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
