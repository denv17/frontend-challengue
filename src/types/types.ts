export type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  onClick: () => void;
};
