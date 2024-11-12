import { ButtonProps } from "@/types/types";
import styles from "./Button.module.css";

function Button({
  label,
  variant = "secondary",
  size = "md",
  onClick,
}: ButtonProps): JSX.Element {
  return (
    <button
      className={`${styles.btn} ${styles[`btn--${variant}`]} ${
        styles[`btn--${size}`]
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
