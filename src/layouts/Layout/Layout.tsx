import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LayoutProps } from "@/types/types";

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
