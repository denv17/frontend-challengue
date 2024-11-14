import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import styles from "./LoginForm.module.css";
import { Checkbox } from "../Checkbox";

export const LoginForm = (): JSX.Element => {
  return (
    <form className={styles["login-form"]}>
      <p className={styles["login-form__description"]}>
        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
        asesoría. 100% online.
      </p>

      <div className={styles["login-form__group"]}>
        <Input
          label="Nro. de documento"
          type="text"
          placeholder="Nro. de documento"
          options={[
            { label: "DNI", value: "1" },
            { label: "RUC", value: "2" },
          ]}
        />

        <Input label="Celular" type="tel" placeholder="Celular" />
      </div>

      <div className={styles["login-form__group"]}>
        <Checkbox label="Acepto lo Política de Privacidad" />

        <Checkbox label="Acepto la Política Comunicaciones Comerciales" />

        <a href="#" target="_blank" className={styles["login-form__link"]}>
          Aplican Términos y Condiciones.
        </a>
      </div>

      <Button label="Cotiza aquí" size="lg" />
    </form>
  );
};
