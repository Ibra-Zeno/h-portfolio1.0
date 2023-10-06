import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative flex h-full min-h-screen max-w-[100vw] scroll-smooth bg-lightBg text-lightText dark:bg-darkBg dark:text-dark1 ">
      <div className="mx-auto w-full font-primary">{children}</div>
    </div>
  );
};

export default Layout;
