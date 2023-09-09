import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative flex">
      <div className="container mx-auto p-8">{children}</div>
    </div>
  );
};
