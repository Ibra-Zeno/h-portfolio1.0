import Link from "next/link";
import { useTheme } from "../context/themeContext";
import { Tooltip } from "@nextui-org/react";
import { Briefcase, Send } from "lucide-react";
import { Moon, Sun } from "lucide-react";

const NavBar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="flex items-center justify-between border border-gray-500/5 bg-gray-300 px-6 py-3 dark:bg-[#20262E]">
      <div className="">
        <Tooltip
          content={theme === "light" ? "Dark Mode" : "Light Mode"}
          placement="bottom"
          showArrow={true}
          delay={500}
          className="rounded-lg bg-rose-100 font-primary text-sm tracking-wide text-gray-700 dark:bg-sky-900 dark:text-[#E9E8E8]"
        >
          <button onClick={toggleTheme}>
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
        </Tooltip>
      </div>
      <div className="p-0 font-logo text-3xl tracking-wide text-gray-700 dark:text-[#E9E8E8]">
        <Link href="/">Haranya</Link>
      </div>
      <div className="flex flex-row gap-x-4">
        <Tooltip
          content="Portfolio"
          placement="bottom"
          showArrow={true}
          delay={500}
          className="rounded-lg bg-rose-100 font-primary text-sm tracking-wide text-gray-700 dark:bg-sky-900 dark:text-[#E9E8E8]"
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
          className="rounded-lg bg-rose-100 font-primary text-sm tracking-wide text-gray-700 dark:bg-sky-900 dark:text-[#E9E8E8]"
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
