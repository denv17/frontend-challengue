import { Image } from "@/components/Image";
import { LoginForm } from "@/components/LoginForm";
import { Tag } from "@/components/Tag";
import blurOne from "@/assets/images/blur-1.webp";
import blurTwo from "@/assets/images/blur-2.webp";
import loginImage from "@/assets/images/login.webp";
import styles from "./Login.module.css";

export const Login = () => {
  return (
    <section className={styles.login}>
      <Image
        src={blurOne}
        alt="Login"
        className={`${styles.login__blur} ${styles["login__blur--left"]}`}
      />
      <Image
        src={blurTwo}
        alt="Login"
        className={`${styles.login__blur} ${styles["login__blur--right"]}`}
      />

      <div className={`container ${styles.login__container}`}>
        <header className={styles.login__header}>
          <Tag label="Seguro Salud Flexible" variant="primary" />
          <h1 className={styles.login__title}>Creado para ti y tu familia</h1>
        </header>

        <Image
          src={loginImage}
          alt="Creado para ti y tu familia"
          className={styles.login__image}
        />

        <div className={styles.login__content}>
          <LoginForm />
        </div>
      </div>
    </section>
  );
};
