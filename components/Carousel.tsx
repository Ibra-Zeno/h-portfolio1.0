import { motion, useTransform, useScroll } from "framer-motion";
import Router from "next/router";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  Recycle,
  Brush,
  Key,
  Layers,
  Factory,
  PersonStanding,
  Blocks,
  ShieldHalf,
  Home,
  ArrowRightCircle,
} from "lucide-react";
import Spotlight from "./Spotlight";
import { useTheme } from "../context/themeContext";

const Carousel = () => {
  return (
    <div className="relative mb-4 w-full bg-lightBg dark:bg-darkBg">
      <div className="flex h-fit items-center justify-center">
        <h3 className="flex py-12 text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          My Portfolio
        </h3>
      </div>

      <div className="hidden xl:block">
        <HorizontalScrollCarousel />
      </div>
      <div className="xl:hidden">
        <MobileCarousel />
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  // Divide 'cards' into two arrays for two rows
  const middleIndex = Math.ceil(cards.length / 2);
  const firstRow = cards.slice(0, middleIndex);
  const secondRow = cards.slice(middleIndex);

  return (
    <>
      <section
        ref={targetRef}
        id="portfolio"
        className="relative bg-lightBg dark:bg-darkBg xl:h-[200vh]"
      >
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
          <div className="pointer-events-none absolute inset-0 z-0 h-full blur-3xl">
            <div
              className=" from-lGrad1 to-lGrad2 dark:from-dGrad1 dark:to-dGrad2 z-0 mx-auto h-full w-[90rem] transform-gpu overflow-hidden bg-gradient-to-tr opacity-30 dark:opacity-[0.2]"
              style={{
                clipPath: "ellipse(34% 31% at 50% 50%)",
              }}
            ></div>
          </div>
          <motion.div
            style={{ x }}
            className="flex flex-col justify-center gap-y-6"
          >
            <div className="flex gap-x-10" data-spotlight>
              {firstRow.map((card) => (
                <Card card={card} key={card.id} />
              ))}
            </div>
            <div className="flex justify-center gap-x-10" data-spotlight>
              {secondRow.map((card) => (
                <Card card={card} key={card.id} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

// Helper function to split an array into rows of a given size
function chunkArray<T>(arr: T[], size: number): T[][] {
  return arr.reduce<T[][]>((chunks, element, index) => {
    if (index % size === 0) {
      chunks.push([element]);
    } else {
      chunks[chunks.length - 1].push(element);
    }
    return chunks;
  }, []);
}

const MobileCarousel = () => {
  const middleIndex = Math.floor(cards.length / 2);
  const firstRow = cards.slice(0, middleIndex);
  const centerCard = cards[middleIndex];
  const secondRow = cards.slice(middleIndex + 1);

  const numRows = 3; // Number of rows in the grid
  const numCols = 3; // Number of columns in the grid

  const grid = [];
  for (let row = 0; row < numRows; row++) {
    const rowItems = cards.slice(row * numCols, (row + 1) * numCols);
    grid.push(rowItems);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="pointer-events-none absolute inset-0 z-0 h-full blur-3xl">
        <div
          className=" from-lGrad1 to-lGrad2 dark:from-dGrad1 dark:to-dGrad2 z-0 mx-auto h-full w-[24rem] transform-gpu overflow-hidden bg-gradient-to-tr opacity-30 dark:opacity-[0.2]"
          style={{
            clipPath: "ellipse(34% 31% at 50% 50%)",
          }}
        ></div>
      </div>
      <div className="mx-4 grid grid-cols-2 gap-x-4 gap-y-6 md:hidden">
        <div className="flex flex-col gap-y-6" data-spotlight>
          <Card card={centerCard} key={centerCard.id} />
          {firstRow.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </div>
        <div className="my-auto flex h-fit flex-col gap-y-6" data-spotlight>
          {secondRow.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </div>
      </div>
      <div className="mx-4 hidden grid-cols-3 justify-center gap-x-4 gap-y-6 md:grid md:gap-x-8 xl:hidden">
        <div className="pointer-events-none absolute inset-0 z-0 h-full blur-3xl">
          <div
            className=" from-lGrad1 to-lGrad2 dark:from-dGrad1 dark:to-dGrad2 z-0 mx-auto h-full w-[70rem] transform-gpu overflow-hidden bg-gradient-to-tr opacity-30 dark:opacity-[0.2]"
            style={{
              clipPath: "ellipse(34% 31% at 50% 50%)",
            }}
          ></div>
        </div>
        {grid.map((row, rowIndex) => (
          <div
            className="flex h-full flex-col gap-y-6"
            data-spotlight
            key={rowIndex}
          >
            {row.map((card) => (
              <Card card={card} key={card.id} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const Card = ({ card }: any) => {
  const handleCardClick = () => {
    // Use router.push to navigate to the specified link
    Router.push(card.link);
  };

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const spotlights = document.querySelectorAll("[data-spotlight]");
    spotlights.forEach((spotlight: Element) => {
      new Spotlight(spotlight as HTMLElement);
    });
  }, []);

  return (
    // Border bg
    // After/Dark bg = hover effect
    <div className="relative h-full overflow-hidden rounded-3xl p-px shadow-xl before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-slate-200 before:opacity-0 before:blur-[100px] before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-96 after:w-96 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-white after:opacity-0 after:blur-[100px] after:transition-opacity after:duration-500 after:hover:opacity-30 before:group-hover:opacity-100  dark:bg-slate-700 dark:after:bg-slate-200 dark:after:hover:opacity-10 lg:h-80 lg:w-[300px]">
      {/* card bg */}
      <div
        className={`${
          theme === "light"
            ? "bg-gradient-to-b from-[#7C9D96]/40 to-[#7C9D96]/60"
            : "bg-gradient-to-b from-slate-800 to-slate-900/90"
        } relative z-20 h-full overflow-hidden rounded-[inherit] p-6 pb-8 pt-4 `}
      >
        {/* <!-- Radial gradient --> */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-square w-1/2 -translate-x-1/2 translate-y-1/2"
          aria-hidden="true"
        >
          <div className="translate-z-0 absolute inset-0 rounded-full bg-lightBg blur-[80px] dark:bg-darkBg"></div>
        </div>
        <div className="flex h-full flex-col items-center justify-around py-4 text-center lg:aspect-auto lg:py-0">
          {/* Image */}
          <div className="flex flex-col items-center gap-y-6 md:gap-y-14">
            <div className="relative">
              <div
                className={`${
                  theme === "light" ? "svg-container" : "svg-container-dark"
                } flex items-center justify-center `}
              >
                {card.icon}
              </div>
            </div>
            {/* <!-- Text -->  -mt-8 mb-8 xl:-mt-4 xl:mb-4*/}
            <div className="">
              <h2 className="mb-3 max-w-prose text-sm font-bold text-lightText dark:text-dark1 md:text-base lg:mb-0 lg:text-lg xl:text-xl">
                {card.title}
              </h2>
            </div>
          </div>
          <Link
            className="inline-flex items-center justify-center whitespace-nowrap rounded-lg border px-3 py-1.5 text-sm font-medium text-lightText transition-colors duration-150 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:border-slate-700 dark:bg-slate-800 dark:text-dark1 dark:hover:bg-slate-900 dark:focus-visible:ring-slate-600 lg:text-base"
            href={card.link}
          >
            View
            <ArrowRightCircle className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

type CardProps = {
  title: string;
  id: number;
  link: string;
  icon: JSX.Element;
};

const cards: CardProps[] = [
  {
    title: "Integration",
    id: 1,
    link: "/integrationA",
    icon: <Recycle className="svg-card-icon text-lightText dark:text-dark1 " />,
  },

  {
    title: "Reflective and Explorative Making in Architecture",
    id: 3,
    link: "/rxm",
    icon: <Brush className="svg-card-icon text-lightText dark:text-dark1" />,
  },

  {
    title: "Industry and Practice",
    id: 4,
    link: "/industryAndPractice",
    icon: <Factory className="svg-card-icon text-lightText dark:text-dark1" />,
  },

  {
    title: "Dance Studio",
    id: 5,
    link: "/danceStudio",
    icon: (
      <PersonStanding className="svg-card-icon text-lightText dark:text-dark1" />
    ),
  },

  {
    title: "Internship",
    id: 2,
    link: "/internship",
    icon: <Blocks className="svg-card-icon text-lightText dark:text-dark1" />,
  },
  {
    title: "Black History Mural",
    id: 6,
    link: "/blackHistoryMural",
    icon: (
      <ShieldHalf className="svg-card-icon text-lightText dark:text-dark1" />
    ),
  },

  {
    title: "Visualisation and Communication",
    id: 7,
    link: "/vc",
    icon: <Home className="svg-card-icon text-lightText dark:text-dark1" />,
  },
  {
    title: "Card Structure",
    id: 8,
    link: "/cardStructure",
    icon: <Layers className="svg-card-icon text-lightText dark:text-dark1" />,
  },
  {
    title: "EPQ",
    id: 8,
    link: "/epq",
    icon: <Key className="svg-card-icon text-lightText dark:text-dark1" />,
  },
];
