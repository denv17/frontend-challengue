import { ButtonProps } from "@/types/types";
import styles from "./Button.module.css";

export const Button = ({
  label,
  variant = "secondary",
  size = "md",
  onClick,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`${styles.btn} ${styles[`btn--${variant}`]} ${
        styles[`btn--${size}`]
      }`}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};
