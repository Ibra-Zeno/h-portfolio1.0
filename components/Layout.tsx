import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-lightBg text-lightText dark:text-dark1 dark:bg-darkBg relative flex h-full min-h-screen max-w-[100vw] scroll-smooth ">
      <div className="mx-auto w-full font-primary">{children}</div>
    </div>
  );
};

export default Layout;
