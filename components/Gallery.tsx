import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { Skeleton } from "@nextui-org/react";
import { PortfolioDataProps } from "../public/assets/portfolioData";
import { ArrowLeftCircle, ArrowRightCircle, XCircle } from "lucide-react";

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<PortfolioDataProps> = ({ project }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageLoadStates, setImageLoadStates] = useState<boolean[]>(
    new Array(project.images.length).fill(false),
  );
  const images = project.images.map((img: string) => {
    return `/assets/${project.name}/${img}`;
  });
  const videos = project.videos?.map((vid: string) => {
    return `/assets/${project.name}/${vid}`;
  });

  const openImage = (index: number) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null && selectedImage < images.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleImageLoad = (index: number) => {
    setImageLoadStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = true;
      return updatedStates;
    });
  };

  return (
    <div className="container p-4 md:grid md:grid-cols-2 ">
      {/* lg:grid-cols-3 xl:grid-cols-4 */}
      {images.map((image, index) => (
        <div
          key={index}
          className="my-4 w-full gap-4 p-1 "
          onClick={() => openImage(index)}
        >
          <Skeleton
            isLoaded={imageLoadStates[index]}
            className="mx-12 rounded-lg"
          >
            <Image
              src={image}
              alt={`Image ${index}`}
              className="scroll-snap-align-start mx-auto aspect-video cursor-pointer rounded-lg border border-gray-300/40 object-cover transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
              width={400}
              onLoad={() => handleImageLoad(index)}
              height={400}
            />
          </Skeleton>
        </div>
      ))}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-20 flex items-center justify-center bg-black"
          >
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 z-30 -translate-y-1/2 transform font-bold text-white"
            >
              <ArrowLeftCircle className="rounded-full bg-gray-600/60" />
            </button>
            <Image
              src={images[selectedImage]}
              alt={`Image ${selectedImage}`}
              className="object-contain"
              fill={true}
            />
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 transform font-bold text-white"
            >
              <ArrowRightCircle className="rounded-full bg-gray-600/60" />
            </button>
            <button
              onClick={closeImage}
              className="absolute right-2 top-2 text-xl font-bold text-white"
            >
              <XCircle className="rounded-full bg-gray-600/60" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      {videos && videos.length > 0
        ? videos.map((video, index) => (
            <video
              width={400}
              height={400}
              key={index}
              className="rounded-lg"
              controls
            >
              <source src={video} type="video/mp4" />
            </video>
          ))
        : null}
    </div>
  );
};

export default Gallery;
