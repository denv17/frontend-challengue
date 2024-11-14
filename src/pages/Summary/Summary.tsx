import { usePlanContext } from "@/context/PlanContext";

export const Summary = () => {
  const { documentType, documentNumber, phone, user, selectedPlan } =
    usePlanContext();

  if (!user || !selectedPlan) {
    return <p>No hay información disponible para mostrar.</p>;
  }

  return (
    <div>
      <h1>Resumen del Plan Seleccionado</h1>

      <section>
        <h2>Información del Usuario</h2>
        <p>
          <strong>Nombre:</strong> {user.name} {user.lastName}
        </p>
        <p>
          <strong>Documento:</strong>
          {documentType} {documentNumber}
        </p>
        <p>
          <strong>Teléfono:</strong> {phone}
        </p>
      </section>

      <section>
        <h2>Detalles del Plan</h2>
        <p>
          <strong>Plan Seleccionado:</strong> {selectedPlan.plan.name}
        </p>
        <p>
          <strong>Precio:</strong> ${selectedPlan.finalPrice.toFixed(2)} al mes
        </p>

        <h3>Beneficios del Plan:</h3>
        <ul>
          {selectedPlan.plan.description.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};
