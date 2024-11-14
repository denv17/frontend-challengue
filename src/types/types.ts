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
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  helperText?: string;
  classes?: string;
};

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  checked?: boolean;
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

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type IconProps = React.SVGAttributes<HTMLOrSVGElement> & {
  name: string;
};
