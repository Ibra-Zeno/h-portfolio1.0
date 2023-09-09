import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg from- relative flex h-full min-h-screen w-screen scroll-smooth bg-gradient-to-br from-[#FDE5EC] via-[#FCBAAD] to-[#E48586] ">
      <div className="mx-auto w-full font-primary">{children}</div>
    </div>
  );
};

export default Layout;
