import Link from "next/link";
import { Tooltip } from "@nextui-org/react";
import { Briefcase, Send } from "lucide-react";

const NavBar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between border border-gray-500 bg-gray-300 px-6 py-3">
      <div className="">
        <Tooltip
          content="Portfolio"
          placement="bottom"
          showArrow={true}
          delay={500}
          className="rounded-lg bg-red-200 font-primary text-sm tracking-wide"
        >
          <Link href="/">
            <Briefcase
              size={22}
              className="animate duration-200 ease-in-out hover:text-gray-600"
            />
          </Link>
        </Tooltip>
      </div>
      <div className="p-0 font-logo text-3xl tracking-wide">
        <Link href="/">Haranya</Link>
      </div>
      <div className="">
        <Tooltip
          content="Contact Me"
          placement="bottom"
          showArrow={true}
          delay={500}
          className="rounded-lg bg-red-200 font-primary text-sm tracking-wide"
        >
          <Link href="/">
            <Send size={22} />
          </Link>
        </Tooltip>
      </div>
    </nav>
  );
};

export default NavBar;
