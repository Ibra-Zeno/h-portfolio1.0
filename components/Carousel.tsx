const images = [
  "https://images.unsplash.com/photo-1691135323965-ceaf8fd3ad51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80",
  "https://images.unsplash.com/photo-1676745738336-38a11ba98aca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1694071132086-ba14a2071b60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1693856758403-bba589db78dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1692026172840-42b9f5688735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNjV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
];
import { motion, useTransform, useScroll } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const Carousel = () => {
  return (
    <div className="bg-lightBg dark:bg-darkBg relative w-full">
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

  return (
    <>
      <section
        ref={targetRef}
        className="bg-lightBg dark:bg-darkBg relative lg:h-[200vh] xl:h-[300vh]"
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-6 xl:gap-10">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

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
  return (
    <div
      key={card.id}
      className="group relative aspect-video h-[170px] w-[100%] overflow-hidden rounded-lg border-2 border-gray-800/20 bg-neutral-200 shadow-2xl md:h-[250px] lg:aspect-square lg:h-[300px] lg:w-[300px] xl:h-[420px] xl:w-[420px]"
    >
      <Link href={card.link}>
        <div
          /*           style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} */
          className="absolute inset-0 z-0 bg-gradient-to-r from-slate-500 to-slate-800 transition-transform duration-300 group-hover:scale-110"
        ></div>
        <div className="absolute inset-0 z-10 grid place-content-center">
          <p className=" p-8 text-xl font-black uppercase text-white">
            {card.title}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Carousel;

const cards = [
  {
    url: images[0],
    title: "Integration",
    id: 1,
    link: "/integrationA",
  },

  {
    url: images[0],
    title: "Internship",
    id: 2,
    link: "/internship",
  },

  {
    url: images[0],
    title: "Reflective and Explorative Making in Architecture",
    id: 3,
    link: "/rxm",
  },

  {
    url: images[0],
    title: "Industry and Practice",
    id: 4,
    link: "/industryAndPractice",
  },

  {
    url: images[0],
    title: "Dance Studio",
    id: 5,
    link: "/danceStudio",
  },

  {
    url: images[0],
    title: "Black History Mural",
    id: 6,
    link: "/blackHistoryMural",
  },

  {
    url: images[0],
    title: "Visualisation and Communication",
    id: 7,
    link: "/vc",
  },
  {
    url: images[0],
    title: "Card Structure",
    id: 8,
    link: "/cardStructure",
  },
  {
    url: images[0],
    title: "EPQ",
    id: 8,
    link: "/epq",
  },
];
