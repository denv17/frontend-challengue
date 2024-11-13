import { Logo } from "../Logo";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__container}`}>
        <Logo className={styles.footer__logo} />

        <p className={styles.footer__copyright}>
          © 2024 RIMAC Seguros y Reaseguros.
        </p>
      </div>
    </footer>
  );
};
