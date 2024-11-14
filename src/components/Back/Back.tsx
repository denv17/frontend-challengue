import { BackProps } from "@/types/types";
import { Icon } from "@/components/Icon";
import styles from "./Back.module.css";

export const Back = ({ label, onClick }: BackProps) => {
  return (
    <button className={styles["back"]} onClick={onClick}>
      <span className={styles["back__circle"]}>
        <Icon name="chevron-left" className={styles["back__icon"]} />
      </span>
      <span>{label}</span>
    </button>
  );
};
