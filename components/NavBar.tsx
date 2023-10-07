import Link from "next/link";
import { useTheme } from "../context/themeContext";
import { Tooltip } from "@nextui-org/react";
// Add to project.tsx slug ^^
import { Briefcase, Send } from "lucide-react";
import { Moon, Sun } from "lucide-react";

const NavBar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="fixed bottom-0 z-40 flex w-full items-center justify-between border-b-1 border-b-gray-200/10 bg-lightBg px-8 py-3 opacity-100 dark:bg-zinc-800 md:bottom-auto md:top-0 md:justify-between md:bg-gradient-to-b md:from-[#cccccc] md:to-lightBg md:px-10 md:py-5 md:dark:bg-gradient-to-b md:dark:from-darkBg md:dark:to-darkBg/90">
      <div className=" flex items-center">
        <Tooltip
          content={theme === "light" ? "Dark Mode" : "Light Mode"}
          placement="bottom"
          delay={100}
          className="my-auto rounded-lg bg-light2 font-primary text-sm tracking-wide text-dark1 dark:bg-dark2/90 "
        >
          <button onClick={toggleTheme}>
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
        </Tooltip>
      </div>
      <div className="hidden p-0 font-logo text-3xl tracking-wide text-lightText dark:text-dark1 md:block">
        <Link href="/">Haranya</Link>
      </div>
      <div className="absolute inset-x-0 mx-auto -mt-6 h-fit w-fit rounded-full border-2 bg-zinc-800 px-4 py-2 font-logo text-4xl text-lightText dark:border-dark1 dark:text-dark1 md:hidden">
        <Link href="/">H</Link>
      </div>
      <div className="flex flex-row gap-x-6 md:gap-x-8">
        <Tooltip
          content="Portfolio"
          placement="bottom"
          delay={100}
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
          delay={100}
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
