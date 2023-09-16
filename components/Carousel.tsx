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
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>

      <HorizontalScrollCarousel />

      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-70%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-gray-200">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: any) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <Link href={card.link}>
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
        <div className="absolute inset-0 z-10 grid place-content-center">
          <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-xl font-black uppercase text-white backdrop-blur-lg">
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
    link: "/BlackHistoryMural",
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
