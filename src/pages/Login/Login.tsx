import { Image } from "@/components/Image";
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
          <h1 className={styles.login__title}>Creado para ti y tu familia</h1>
        </header>

        <Image
          src={loginImage}
          alt="Creado para ti y tu familia"
          className={styles.login__image}
        />

        <div className={styles.login__content}>
          <p className={styles.login__subtitle}>
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
            asesoría. 100% online.
          </p>

          <form className={styles.login__form}>
            <div className={styles.login__formGroup}>
              <label htmlFor="email">Correo electrónico</label>
              <input type="email" id="email" />
            </div>

            <div className={styles.login__formGroup}>
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" />
            </div>

            <button type="submit" className={styles.login__submit}>
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
