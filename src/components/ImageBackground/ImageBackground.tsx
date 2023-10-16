import React, { useEffect, useState } from "react";
import styles from "./ImageBackground.module.css";

interface ImageBackgroundProps {
  children?: React.ReactNode;
  variant?: "booksMain" | "booksDetails" | "favorite";
}

const ImageBackground: React.FC<ImageBackgroundProps> = ({
  children,
  variant = "booksMain",
}) => {
  const [randomColor, setRandomColor] = useState<string>("");

  useEffect(() => {
    const getRandomColor = (): string => {
      const colors = [
        "var(--random-bg1)",
        "var(--random-bg2)",
        "var(--random-bg3)",
        "var(--random-bg4)",
      ];
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    };

    const color = getRandomColor();
    setRandomColor(color);
  }, []);

  return (
    <div style={{ backgroundColor: randomColor }} className={styles[variant]}>
      {children}
    </div>
  );
};

export default ImageBackground;
