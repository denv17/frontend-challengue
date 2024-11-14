import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePlanContext } from "@/context/PlanContext";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { User, Plan } from "@/types/types";
import { Stepper } from "@/components/Stepper";
import { Back } from "@/components/Back";
import { Card } from "@/components/Card";
import styles from "./Plans.module.css";
import { Tag } from "@/components/Tag";

const apiUrl = import.meta.env.VITE_API_URL;

const calculateAge = (birthDay: string): number => {
  const birthDate = new Date(birthDay);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

export const Plans = () => {
  const { setUser, setSelectedPlan } = usePlanContext();
  const [user, setLocalUser] = useState<User | null>(null);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPlanType, setSelectedPlanType] = useState<number | null>(null);
  const navigate = useNavigate();

  const fetchUser = async (): Promise<void> => {
    const userResponse = await fetch(`${apiUrl}user.json`);
    if (!userResponse.ok) {
      throw new Error("Error al cargar los datos del usuario");
    }
    const userData: User = await userResponse.json();
    setUser(userData);
    setLocalUser(userData);
  };

  const fetchPlans = async (): Promise<void> => {
    const plansResponse = await fetch(`${apiUrl}plans.json`);
    if (!plansResponse.ok) {
      throw new Error("Error al cargar los datos de planes");
    }
    const plansData = await plansResponse.json();
    setPlans(Array.isArray(plansData.list) ? plansData.list : []);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        await fetchUser();
        await fetchPlans();
      } catch (error) {
        setError(error instanceof Error ? error.message : "Ocurrió un error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const classifyPlansByUserAge = () => {
    if (!user) return { forMe: [], forOthers: [] };

    const userAge = user.birthDay ? calculateAge(user.birthDay) : 0;
    const forMe = plans.filter((plan) => plan.age <= userAge);
    const forOthers = plans.filter((plan) => !forMe.includes(plan));

    return { forMe, forOthers };
  };

  const { forMe, forOthers } = classifyPlansByUserAge();

  const getPriceWithDiscount = (price: number) => {
    return selectedPlanType === 2 ? price * 0.95 : price;
  };

  const handlePlanSelection = (plan: Plan) => {
    const finalPrice = getPriceWithDiscount(plan.price);
    setSelectedPlan({ plan, finalPrice });
    navigate("/resumen");
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className={styles.plans}>
      <Stepper steps={["Planes y coberturas", "Resumen"]} currentStep={0} />

      <div className={`wrapper`}>
        <Back label="Volver" onClick={() => navigate("/")} />

        <header className={styles.plans__header}>
          <div className={styles["plans__header-info"]}>
            <h1 className={styles.plans__title}>
              {isLoading ? "Hola" : user?.name} ¿Para quién deseas cotizar?
            </h1>
            <p className={styles.plans__description}>
              Selecciona la opción que se ajuste más a tus necesidades.
            </p>
          </div>

          <ul className={styles["plans__plan-type-list"]}>
            <li>
              <Card
                radioName="planType"
                onChange={() => setSelectedPlanType(1)}
              >
                <div className={styles["plans__type-card"]}>
                  <Icon name="protection" />
                  <h3>Para mí</h3>
                  <p>
                    Cotiza tu seguro de salud y agrega familiares si así lo
                    deseas.
                  </p>
                </div>
              </Card>
            </li>
            <li>
              <Card
                radioName="planType"
                onChange={() => setSelectedPlanType(2)}
              >
                <div className={styles["plans__type-card"]}>
                  <Icon name="add-user" />
                  <h3>Para alguien más</h3>
                  <p>
                    Realiza una cotización para uno de tus familiares o
                    cualquier persona.
                  </p>
                </div>
              </Card>
            </li>
          </ul>
        </header>

        {selectedPlanType && (
          <ul className={styles["plans__plans-list"]}>
            {(selectedPlanType === 1 ? forMe : forOthers).map((plan, index) => (
              <li key={index} className={styles["plans__plans-item"]}>
                <Card>
                  <div className={styles["plans__plan-card"]}>
                    {index === 1 && (
                      <Tag
                        label="Plan recomendado"
                        classes={styles["plans__plan-card-tag"]}
                      />
                    )}
                    <header className={styles["plans__plan-card-header"]}>
                      <h2>{plan.name}</h2>

                      <Icon name={index === 1 ? "hospital" : "home"} />
                    </header>

                    <div className={styles["plans__plan-card-price"]}>
                      <span>Costo del plan</span>
                      <span>
                        ${getPriceWithDiscount(plan.price).toFixed(2)} al mes
                      </span>
                    </div>

                    <ul className={styles["plans__plan-card-list"]}>
                      {plan.description.map((benefit, benefitIndex) => (
                        <li key={benefitIndex}>{benefit}</li>
                      ))}
                    </ul>

                    <Button
                      label="Seleccionar Plan"
                      variant="primary"
                      onClick={() => handlePlanSelection(plan)}
                    />
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
