import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Pagination, Spinner, Skeleton } from "@nextui-org/react";
import { PortfolioDataProps } from "../public/assets/portfolioData";
import { ArrowLeftCircle, ArrowRightCircle, XCircle } from "lucide-react";

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<PortfolioDataProps> = ({ project }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageLoading, setImageLoading] = useState<boolean>(false);
  const [currentImageLoading, setCurrentImageLoading] =
    useState<boolean>(false);
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
  const openImagePagination = (index: number) => {
    setCurrentImageLoading(true);
    console.log("loading");
    setSelectedImage(index);
    console.log("loading1");
  };
  const imageLoadTemp = () => {
    console.log("loaded");
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
            <Spinner className="absolute left-1/2 top-1/2 z-20" />
            <div className="z-30">
              {!currentImageLoading && (
                <Image
                  src={images[selectedImage]}
                  alt={`Image ${selectedImage}`}
                  className="object-contain"
                  fill={true}
                  onLoad={() => setCurrentImageLoading(false)}
                />
              )}
              <Pagination
                className="absolute bottom-2 right-0 mx-auto flex w-full justify-center text-xl font-bold text-white"
                showControls
                total={images.length}
                onChange={(page: number) => openImagePagination(page)}
                initialPage={selectedImage + 1}
              />
              <button
                onClick={closeImage}
                className="absolute right-2 top-2 text-xl font-bold text-white"
              >
                <XCircle className="rounded-full bg-gray-600/60" />
              </button>
            </div>
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
