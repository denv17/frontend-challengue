import { Button } from "@/components/Button";
import styles from "./LoginForm.module.css";

export const LoginForm = (): JSX.Element => {
  return (
    <form className={styles["login-form"]}>
      <p>
        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
        asesoría. 100% online.
      </p>

      <div>
        <label htmlFor="email">Correo electrónico</label>
        <input type="email" id="email" />
      </div>

      <div>
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" />
      </div>

      <Button label="Cotiza aquí" size="lg" />
    </form>
  );
};
