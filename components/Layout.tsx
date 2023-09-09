import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative flex w-screen">
      <div className="mx-auto w-full font-primary">{children}</div>
    </div>
  );
};

export default Layout;
