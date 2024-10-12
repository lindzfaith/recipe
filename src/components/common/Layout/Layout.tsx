import { Footer, Header } from "@/components";
import styles from "./Layout.module.css";
import { GlobalMessage } from "../GlobalMessage";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <GlobalMessage />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
