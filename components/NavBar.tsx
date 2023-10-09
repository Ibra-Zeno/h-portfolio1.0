import Link from "next/link";
import { useTheme } from "../context/themeContext";
import { Button, Tooltip } from "@nextui-org/react";
import { Briefcase, Send } from "lucide-react";
import Router from "next/router";
import { Moon, Sun } from "lucide-react";
import { MouseEvent, useState } from "react"; // Import useState

const NavBar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // Add state for navigation open/close

  const toggleNav = (e: MouseEvent) => {
    e.preventDefault(); // Prevent default link behavior
    setIsNavOpen((prevState) => !prevState); // Toggle navigation state
  };

  const handleHClick = () => {
    setTimeout(() => {
      Router.push("/");
    }, 400);
  };

  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <nav className="z-40 hidden w-full items-center justify-between border-b-1 border-b-gray-200/10 bg-zinc-300 px-8 py-3 opacity-100 dark:bg-zinc-800 md:fixed md:bottom-auto md:top-0 md:flex md:justify-between md:bg-gradient-to-b md:from-[#cccccc] md:to-lightBg md:px-10 md:py-5 md:opacity-95 md:dark:bg-gradient-to-b md:dark:from-darkBg md:dark:to-darkBg/90">
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
                className="transition-all duration-200 ease-in-out hover:text-gray-600"
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
      {/* Mobile Nav */}
      <div className="md:hidden">
        {/* Circular button */}
        <div className="fixed bottom-5 right-5 z-50 cursor-pointer">
          <Button
            onClick={(e) => toggleNav(e)}
            size="sm"
            fullWidth={false}
            radius="full"
            className={`h-16 w-16 border-2 bg-zinc-300 py-8 font-logo text-3xl font-medium text-lightText shadow-xl dark:border-dark1 dark:bg-zinc-800 dark:text-dark1 ${
              isNavOpen ? "bg-white text-lightText" : ""
            } transition-all duration-300`}
          >
            H
          </Button>
        </div>
        {/* Navigation */}
        <nav
          className={`fixed bottom-10 right-5 z-40 flex w-16 transform flex-col items-center gap-y-6 rounded-lg border border-gray-300 bg-white px-2 pb-14 pt-4 text-lightText transition-transform duration-1000 dark:border-dark1 dark:bg-zinc-800  ${
            isNavOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-20 scale-0 opacity-0"
          }`}
        >
          <button
            onClick={toggleTheme}
            className="text-lightText dark:text-dark1"
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
          <Link
            href="/"
            className="rounded-lg font-primary text-sm tracking-wide text-lightText dark:text-dark1"
          >
            <Briefcase
              size={22}
              className="animate duration-200 ease-in-out hover:text-gray-600"
            />
          </Link>
          <Link
            href="/"
            className="rounded-lg font-primary text-sm tracking-wide text-lightText dark:text-dark1"
          >
            <Send size={22} />
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
