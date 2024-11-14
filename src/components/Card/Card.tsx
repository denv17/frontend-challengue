import { CardProps } from "@/types/types";
import { Radio } from "@/components/Radio";
import styles from "./Card.module.css";

export const Card = ({ children, radioName, onChange }: CardProps) => {
  return radioName ? (
    <label>
      <article className={styles.card}>
        <Radio
          name={radioName}
          className={styles.card__radio}
          onChange={onChange}
        />
        {children}
      </article>
    </label>
  ) : (
    <article className={styles.card}>{children}</article>
  );
};
