import clsx from "clsx";
import React from "react";

import styles from "./Typography.module.css";

interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  color?: "primary" | "secondary" | "reverse";
  font?: "helious" | "bebasNeue";
  className?: string;
  centered?: boolean;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  variant = "p",
  color = "primary",
  font = "helious",
  className,
  centered,
  children,
}) => {
  const Tag = variant;

  return (
    <Tag
      className={clsx(
        styles[variant],
        styles[color],
        styles[font],
        { [styles.centered]: centered },
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Typography;
