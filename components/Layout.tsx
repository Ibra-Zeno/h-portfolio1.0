import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-screen relative flex h-full min-h-screen scroll-smooth bg-pink-100 dark:bg-sky-950 ">
      <div className="mx-auto w-full font-primary">{children}</div>
    </div>
  );
};

export default Layout;
