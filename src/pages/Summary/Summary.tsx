import { usePlanContext } from "@/context/PlanContext";
import { useNavigate } from "react-router-dom";
import { Stepper } from "@/components/Stepper";
import { Back } from "@/components/Back";
import styles from "./Summary.module.css";
import { Card } from "@/components/Card";
import { Icon } from "@/components/Icon";

export const Summary = () => {
  const { documentType, documentNumber, phone, user, selectedPlan } =
    usePlanContext();
  const navigate = useNavigate();

  if (!user || !selectedPlan) {
    return <p>No hay información disponible para mostrar.</p>;
  }

  return (
    <section className={styles.summary}>
      <Stepper steps={["Planes y coberturas", "Resumen"]} currentStep={1} />

      <div className={`wrapper`}>
        <Back label="Volver" onClick={() => navigate("/planes")} />

        <h1 className={styles.summary__title}>Resumen del seguro </h1>

        <Card>
          <header className={styles["summary__card-header"]}>
            <span>Precios calculados para:</span>

            <h2>
              <Icon name="family" /> {user.name} {user.lastName}
            </h2>
          </header>

          <ul className={styles["summary__card-body"]}>
            <li>
              <h3>Responsable de pago</h3>
              <p>
                <span>{(documentType ?? "").toUpperCase()}: </span>{" "}
                {documentNumber}
              </p>
              <p>
                <span>Celular: </span> {phone}
              </p>
            </li>
            <li>
              <h3>Plan elegido</h3>
              <p>{selectedPlan.plan.name}</p>
              <p>
                <span>Costo del Plan: </span> $
                {selectedPlan.finalPrice.toFixed(2)} al mes
              </p>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  );
};
