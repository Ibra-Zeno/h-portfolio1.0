import Link from "next/link";
import { useTheme } from "../context/themeContext";
import { Tooltip } from "@nextui-org/react";
import { Briefcase, Send } from "lucide-react";
import { Moon, Sun } from "lucide-react";

const NavBar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="bg-lightBg dark:bg-darkBg flex items-center justify-between border border-gray-500/5 px-6 py-3">
      <div className="">
        <Tooltip
          content={theme === "light" ? "Dark Mode" : "Light Mode"}
          placement="bottom"
          showArrow={true}
          delay={500}
          className="dark:text-dark1 text-lightText dark:bg-dark2/90 rounded-lg bg-rose-100 font-primary text-sm tracking-wide"
        >
          <button onClick={toggleTheme}>
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
        </Tooltip>
      </div>
      <div className="dark:text-dark1 text-lightText p-0 font-logo text-3xl tracking-wide">
        <Link href="/">Haranya</Link>
      </div>
      <div className="flex flex-row gap-x-4">
        <Tooltip
          content="Portfolio"
          placement="bottom"
          showArrow={true}
          delay={500}
          className="dark:text-dark1 text-lightText dark:bg-dark2/90 rounded-lg bg-rose-100 font-primary text-sm tracking-wide"
        >
          <Link href="/">
            <Briefcase
              size={22}
              className="animate duration-200 ease-in-out hover:text-gray-600"
            />
          </Link>
        </Tooltip>
        <Tooltip
          content="Contact Me"
          placement="bottom"
          showArrow={true}
          delay={500}
          className="dark:text-dark1 text-lightText dark:bg-dark2/90 rounded-lg bg-rose-100 font-primary text-sm tracking-wide"
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
