import { Logo } from "@/components/Logo";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <a href="/">
          <Logo className={styles.header__logo} />
        </a>

        <div className={styles.header__cta}>
          <span>¡Compra por este medio!</span>

          <a href="tel:+014116001" target="_blank" rel="noreferrer">
            (01) 411 6001
          </a>
        </div>
      </div>
    </header>
  );
};
