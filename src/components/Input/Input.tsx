import { Select } from "@/components/Select/Select";
import { InputProps } from "@/types/types";
import styles from "./Input.module.css";

export const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  helperText,
  options,
  onChange,
  onOptionChange,
  error,
  ...props
}: InputProps) => {
  return (
    <div
      className={`${styles.input} ${options ? styles["input--options"] : ""} ${
        error ? styles["input--error"] : ""
      }`}
    >
      <div className={styles.input__container}>
        {options && (
          <Select
            options={options}
            classes={styles.input__select}
            onChange={onOptionChange}
            error={error}
          />
        )}

        <div className={styles.input__wrapper}>
          {label && <label className={styles.input__label}>{label}</label>}
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...props}
          />
        </div>
      </div>

      {helperText && (
        <span className={styles["input__helper-text"]}>{helperText}</span>
      )}
    </div>
  );
};
