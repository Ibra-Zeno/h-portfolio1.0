import Link from "next/link";
import { useTheme } from "../context/themeContext";
import { Tooltip, Button } from "@nextui-org/react";
import Router from "next/router";
import { Briefcase, Send } from "lucide-react";
import { Moon, Sun } from "lucide-react";

const NavBar: React.FC = () => {
  const handleHClick = () => {
    setTimeout(() => {
      Router.push("/");
    }, 400);
  };

  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="fixed bottom-0 z-40 flex w-full items-center justify-between border-b-1 border-b-gray-200/10 bg-zinc-300 px-8 py-3 opacity-100 dark:bg-zinc-800 md:bottom-auto md:top-0 md:justify-between md:bg-gradient-to-b md:from-[#cccccc] md:to-lightBg md:px-10 md:py-5 md:opacity-95 md:dark:bg-gradient-to-b md:dark:from-darkBg md:dark:to-darkBg/90">
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
      <Button
        onClick={handleHClick}
        size="sm"
        fullWidth={false}
        radius="full"
        className=" absolute inset-x-0 mx-auto -mt-9 border-2 bg-zinc-300 py-7 font-logo text-3xl font-medium text-lightText dark:border-dark1 dark:bg-zinc-800 dark:text-dark1 md:hidden"
      >
        <Link href="/">H</Link>
      </Button>
      <div className="flex flex-row gap-x-6 md:gap-x-8">
        <Tooltip
          content="Portfolio"
          placement="bottom"
          delay={100}
          className="hidden rounded-lg bg-light2 font-primary text-sm tracking-wide text-dark1 dark:bg-dark2/90 md:inline-block "
        >
          <Link href="/">
            <Briefcase
              size={22}
              className="animate hidden duration-200 ease-in-out hover:text-gray-600 md:inline-block"
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
