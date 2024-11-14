import { SelectProps } from "@/types/types";
import { Icon } from "@/components/Icon";
import styles from "./Select.module.css";

export const Select = ({
  options,
  value,
  onChange,
  helperText,
  classes,
  ...props
}: SelectProps) => {
  return (
    <div className={`${styles.select} ${classes}`}>
      <select value={value} onChange={onChange} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Icon name="chevron-down" className={styles.select__icon} />
    </div>
  );
};
