import { RadioProps } from "@/types/types";
import styles from "./Radio.module.css";

export const Radio = ({
  label,
  checked,
  error,
  classes,
  ...props
}: RadioProps) => {
  return (
    <label
      className={`${styles.radio} ${
        error ? styles["radio--error"] : ""
      } ${classes}`}
    >
      <input type="radio" checked={checked} {...props} />
      {label && <span className={styles.radio__label}>{label}</span>}
    </label>
  );
};
