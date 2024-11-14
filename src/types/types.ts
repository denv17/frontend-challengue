export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  onClick?: () => void;
};

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  type?: "text" | "email" | "password" | "tel";
  placeholder?: string;
  value?: string;
  options?: { value: string; label: string }[];
  helperText?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onOptionChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: boolean | string;
};

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  helperText?: string;
  classes?: string;
  error?: boolean | string;
};

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  checked?: boolean;
  error?: boolean;
};

export type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  checked?: boolean;
  error?: boolean;
  classes?: string;
};

export type TagProps = React.HTMLAttributes<HTMLSpanElement> & {
  label: string;
  variant?: "primary" | "secondary";
};

export type LayoutProps = {
  children: React.ReactNode;
};

export type AuthProviderProps = {
  children: React.ReactNode;
};

export type AuthContextType = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

export type PlanContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  selectedPlan: { plan: Plan; finalPrice: number } | null;
  setSelectedPlan: (plan: { plan: Plan; finalPrice: number } | null) => void;
  documentType: string | null;
  setDocumentType: (documentType: string) => void;
  documentNumber: string | null;
  setDocumentNumber: (documentNumber: string) => void;
  phone: string | null;
  setPhone: (phone: string) => void;
};

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type IconProps = React.SVGAttributes<HTMLOrSVGElement> & {
  name: string;
};

export type StepperProps = {
  steps: string[];
  currentStep: number;
};

export type CardProps = {
  children: React.ReactNode;
  radioName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type User = {
  name: string;
  lastName?: string;
  birthDay?: string;
};

export type Plan = {
  name: string;
  icon: string;
  price: number;
  description: string[];
  age: number;
};
