import { CheckboxProps } from "@/types/types";
import styles from "./Checkbox.module.css";

export const Checkbox = ({ label, checked, ...props }: CheckboxProps) => {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" checked={checked} {...props} />
      {label && <span className={styles.checkbox__label}>{label}</span>}
    </label>
  );
};
