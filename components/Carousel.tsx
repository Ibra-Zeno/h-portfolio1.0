import { motion, useTransform, useScroll } from "framer-motion";
import Router from "next/router";
import { type } from "os";
import { useRef } from "react";

const Carousel = () => {
  return (
    <div className="relative w-full bg-lightBg dark:bg-darkBg">
      <div className="flex h-fit items-center justify-center">
        <h3 className="flex py-12 text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          My Portfolio
        </h3>
      </div>

      <div className="hidden lg:block">
        <HorizontalScrollCarousel />
      </div>
      <div className="lg:hidden">
        <MobileCarousel />
      </div>

      <div className="flex h-12 items-center justify-center"></div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-70%"]);

  // Divide 'cards' into two arrays for two rows
  const middleIndex = Math.ceil(cards.length / 2);
  const firstRow = cards.slice(0, middleIndex);
  const secondRow = cards.slice(middleIndex);

  return (
    <>
      <section
        ref={targetRef}
        id="portfolio"
        className="relative bg-lightBg dark:bg-darkBg lg:h-[200vh] xl:h-[300vh]"
      >
        <div className="sticky top-0 flex h-screen flex-col items-center overflow-hidden">
          <motion.div style={{ x }} className="flex flex-col gap-6 xl:gap-10">
            <div className="flex gap-x-10">
              {firstRow.map((card) => (
                <Card card={card} key={card.id} />
              ))}
            </div>
            <div className="flex gap-x-10">
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
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="mx-4 flex flex-col items-center justify-center gap-y-6 sm:grid sm:grid-cols-2 sm:gap-x-4 md:gap-x-8">
        {cards.map((card) => {
          return <Card card={card} key={card.id} />;
        })}
      </div>
    </div>
  );
};

const Card = ({ card }: any) => {
  const handleCardClick = () => {
    // Use router.push to navigate to the specified link
    Router.push(card.link);
  };

  return (
    <div
      key={card.id}
      className="group relative aspect-video h-[170px] w-[100%] cursor-pointer overflow-hidden rounded-lg border-2 border-gray-800/20 bg-neutral-200 shadow-2xl md:h-[250px] lg:aspect-square lg:h-[300px] lg:w-[300px] xl:h-[350px] xl:w-[350px]"
      onClick={handleCardClick}
      id={card.id}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-500 to-slate-800 transition-transform duration-300 group-hover:scale-110"></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className=" p-8 text-xl font-black uppercase text-white">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Carousel;

type CardProps = {
  title: string;
  id: number;
  link: string;
};

const cards: CardProps[] = [
  {
    title: "Integration",
    id: 1,
    link: "/integrationA",
  },

  {
    title: "Internship",
    id: 2,
    link: "/internship",
  },

  {
    title: "Reflective and Explorative Making in Architecture",
    id: 3,
    link: "/rxm",
  },

  {
    title: "Industry and Practice",
    id: 4,
    link: "/industryAndPractice",
  },

  {
    title: "Dance Studio",
    id: 5,
    link: "/danceStudio",
  },

  {
    title: "Black History Mural",
    id: 6,
    link: "/blackHistoryMural",
  },

  {
    title: "Visualisation and Communication",
    id: 7,
    link: "/vc",
  },
  {
    title: "Card Structure",
    id: 8,
    link: "/cardStructure",
  },
  {
    title: "EPQ",
    id: 8,
    link: "/epq",
  },
];
