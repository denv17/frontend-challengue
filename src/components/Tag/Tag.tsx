import { TagProps } from "@/types/types";
import styles from "./Tag.module.css";

export const Tag = ({
  label,
  variant = "secondary",
  classes,
  ...props
}: TagProps) => {
  return (
    <span
      className={`${styles.tag} ${styles[`tag--${variant}`]} ${classes}`}
      {...props}
    >
      {label}
    </span>
  );
};
