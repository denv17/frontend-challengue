export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  onClick: () => void;
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
