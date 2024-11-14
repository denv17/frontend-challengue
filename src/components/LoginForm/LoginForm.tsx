import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { usePlanContext } from "@/context/PlanContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import styles from "./LoginForm.module.css";
import { Checkbox } from "../Checkbox";

export const LoginForm = (): JSX.Element => {
  const [documentType, setDocumentType] = useState("dni");
  const [documentNumber, setDocumentNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [commercialAccepted, setCommercialAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{
    document?: string;
    phone?: string;
    privacy?: boolean;
  }>({});
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    setDocumentType: setCtxDocumentType,
    setDocumentNumber: setCtxDocumentNumber,
    setPhone: setCtxPhone,
  } = usePlanContext();

  const validateForm = (): boolean => {
    const newErrors: {
      document?: string;
      phone?: string;
      privacy?: boolean;
    } = {};

    if (documentType === "1" && !/^\d{8}$/.test(documentNumber)) {
      newErrors.document = "El DNI debe tener 8 dígitos numéricos";
    } else if (documentType === "2" && !/^\d{11}$/.test(documentNumber)) {
      newErrors.document = "El RUC debe tener 11 dígitos numéricos";
    }

    if (!/^\d{9}$/.test(phone)) {
      newErrors.phone = "El celular debe tener 9 dígitos numéricos";
    }

    if (!privacyAccepted || !commercialAccepted) {
      newErrors.privacy = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    if (isLoading) return;
    setSubmitted(true);

    if (validateForm()) {
      setIsLoading(true);

      setCtxDocumentType(documentType);
      setCtxDocumentNumber(documentNumber);
      setCtxPhone(phone);

      login();
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate("/planes");
    }
  };

  useEffect(() => {
    if (submitted) {
      validateForm();
    }
  }, [
    documentType,
    documentNumber,
    phone,
    privacyAccepted,
    commercialAccepted,
  ]);

  const handleNumericInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = [
      "Backspace",
      "Tab",
      "ArrowLeft",
      "ArrowRight",
      "Enter",
    ];
    const isNumber = /^[0-9]$/.test(e.key);

    if (!isNumber && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <form className={styles["login-form"]} onSubmit={handleSubmit}>
      <p className={styles["login-form__description"]}>
        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
        asesoría. 100% online.
      </p>

      <div className={styles["login-form__group"]}>
        <Input
          label="Nro. de documento"
          type="text"
          placeholder="Nro. de documento"
          onKeyDown={handleNumericInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDocumentNumber(e.target.value)
          }
          onOptionChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setDocumentType(e.target.value)
          }
          options={[
            { label: "DNI", value: "dni" },
            { label: "RUC", value: "ruc" },
          ]}
          helperText={errors.document}
          error={errors.document}
        />

        <Input
          label="Celular"
          type="tel"
          placeholder="Celular"
          onKeyDown={handleNumericInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPhone(e.target.value)
          }
          helperText={errors.phone}
          error={errors.phone}
        />
      </div>

      <div className={styles["login-form__group"]}>
        <Checkbox
          label="Acepto lo Política de Privacidad"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPrivacyAccepted(e.target.checked)
          }
          error={errors.privacy}
        />

        <Checkbox
          label="Acepto la Política Comunicaciones Comerciales"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCommercialAccepted(e.target.checked)
          }
          error={errors.privacy}
        />

        <a href="#" target="_blank" className={styles["login-form__link"]}>
          Aplican Términos y Condiciones.
        </a>
      </div>

      <Button
        label={isLoading ? "Cargando..." : "Cotiza aquí"}
        size="lg"
        type="submit"
        disabled={isLoading}
      />
    </form>
  );
};
