import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { Pagination, Skeleton } from "@nextui-org/react";
import { ArrowLeftCircle, ArrowRightCircle, XCircle } from "lucide-react";
import Image from "next/image";

interface GalleryProps {
  project: any;
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Gallery: React.FC<GalleryProps> = ({ project }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [direction, setDirection] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const images = project.images.map((img: string) => {
    return `/assets/${project.name}/${img}`;
  });

  const [imageLoadStates, setImageLoadStates] = useState<boolean[]>(
    new Array(images.length).fill(false),
  );

  const imageIndex = wrap(0, images.length, selectedImage || 0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setSelectedImage((prevIndex) =>
      wrap(0, images.length, (prevIndex ?? 0) + newDirection),
    );
  };

  const openImage = (index: number) => {
    setLoading(true);
    setSelectedImage(index);
  };

  const closeImage = () => {
    setLoading(true);
    setSelectedImage(null);
  };

  const handleImageLoad = (index: number) => {
    setImageLoadStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = true;
      return updatedStates;
    });
    setLoading(false);
  };

  return (
    <div className="container gap-x-8 p-4 md:grid md:grid-cols-2">
      {images.map((image: string, index: number) => (
        <div
          key={index}
          className="my-4 aspect-video h-full w-full p-1"
          onClick={() => openImage(index)}
        >
          <Skeleton
            isLoaded={imageLoadStates[index]}
            className={`${
              project.aspect === true ? "aspect-video" : "aspect-square"
            } mx-auto h-auto w-auto rounded-lg`}
          >
            <Image
              src={image}
              alt={`Image ${index}`}
              className="mx-auto w-full cursor-pointer snap-center rounded-lg border-2 border-gray-200/40 bg-white object-cover shadow-lg transition duration-300 ease-in hover:scale-105 hover:shadow-xl"
              width={500}
              onLoad={() => handleImageLoad(index)}
              height={500}
            />
          </Skeleton>
        </div>
      ))}
      <AnimatePresence initial={false} custom={direction}>
        {selectedImage !== null && (
          <>
            <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
              <motion.div
                key={selectedImage}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ opacity: { duration: 0.3 } }}
                drag="x"
                className="z-20 h-full w-full"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) paginate(1);
                  else if (swipe > swipeConfidenceThreshold) paginate(-1);
                }}
              >
                <Image
                  src={images[imageIndex]}
                  alt={`Image ${selectedImage}`}
                  draggable={false}
                  className={`mx-auto rounded-lg object-contain ${
                    loading ? "opacity-0" : "opacity-100"
                  }`}
                  onLoad={() => loading && setLoading(false)}
                  fill={true}
                />
              </motion.div>
              <Pagination
                className="absolute bottom-4 right-0 z-30 mx-auto flex w-full justify-center text-xl font-bold text-white lg:bottom-8"
                showControls
                size="sm"
                total={images.length}
                onChange={(page: number) => openImage(page - 1)}
                page={selectedImage! + 1}
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute right-[1vw] top-4 text-xl font-bold text-white"
              >
                <XCircle
                  className="absolute right-4 top-4 z-40 h-8 w-8 rounded-full text-light2 dark:text-dark2"
                  onClick={closeImage}
                />
              </button>
            </div>
          </>
        )}
      </AnimatePresence>

      {selectedImage !== null && (
        <Pagination
          className="absolute bottom-4 right-0 mx-auto flex w-full justify-center text-xl font-bold text-white lg:bottom-8"
          showControls
          size="sm"
          total={images.length}
          onChange={(page: number) => paginate(page - (selectedImage! + 1))}
          initialPage={selectedImage! + 1}
        />
      )}
    </div>
  );
};

export default Gallery;
