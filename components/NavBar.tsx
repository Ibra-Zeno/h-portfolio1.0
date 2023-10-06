import Link from "next/link";
import { useTheme } from "../context/themeContext";
import { Tooltip } from "@nextui-org/react";
import { Briefcase, Send } from "lucide-react";
import { Moon, Sun } from "lucide-react";

const NavBar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="fixed top-0 z-40 flex w-full items-center justify-between border-b-1 border-b-gray-200/10 bg-gradient-to-b from-[#cccccc] to-lightBg px-10 py-5 opacity-100 dark:bg-gradient-to-b dark:from-darkBg dark:to-darkBg/90">
      <div className="">
        <Tooltip
          content={theme === "light" ? "Dark Mode" : "Light Mode"}
          placement="bottom"
          delay={500}
          className="rounded-lg bg-light2 font-primary text-sm tracking-wide text-dark1 dark:bg-dark2/90 "
        >
          <button onClick={toggleTheme}>
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
        </Tooltip>
      </div>
      <div className="p-0 font-logo text-3xl tracking-wide text-lightText dark:text-dark1">
        <Link href="/">Haranya</Link>
      </div>
      <div className="flex flex-row gap-x-4">
        <Tooltip
          content="Portfolio"
          placement="bottom"
          delay={500}
          className="rounded-lg bg-light2 font-primary text-sm tracking-wide text-dark1 dark:bg-dark2/90 "
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
          delay={500}
          className="rounded-lg bg-light2 font-primary text-sm tracking-wide text-dark1 dark:bg-dark2/90 "
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
