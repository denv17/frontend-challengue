import { StepperProps } from "@/types/types";
import styles from "./Stepper.module.css";

export const Stepper = ({ steps, currentStep }: StepperProps): JSX.Element => {
  return (
    <ul className={styles.stepper}>
      {steps.map((step, index) => (
        <li
          key={step}
          className={`${styles["stepper__item"]} ${
            index === currentStep ? styles["stepper__item--current"] : ""
          }`}
        >
          <span className={styles["stepper__item-number"]}>{index + 1}</span>
          <span>{step}</span>
        </li>
      ))}
    </ul>
  );
};
