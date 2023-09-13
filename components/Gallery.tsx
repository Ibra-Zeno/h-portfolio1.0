import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* interface GalleryProps {
  images: string[];
} */

const images = [
  "https://images.unsplash.com/photo-1693146261069-0a6f70b6d3c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1693479140895-bf7cfa45a99b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1693568934978-d2fa7552a545?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1693858837984-c0a8829fe3d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1693568934978-d2fa7552a545?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1693479140895-bf7cfa45a99b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
];

const Gallery: React.FC /* <GalleryProps> */ = (/* { images } */) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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

  return (
    <div className="container mx-auto grid grid-cols-3 gap-4 bg-orange-200">
      {images.map((image, index) => (
        <div key={index} onClick={() => openImage(index)}>
          <img src={image} alt={`Image ${index}`} className="cursor-pointer" />
        </div>
      ))}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-black"
          >
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 transform font-bold text-white"
            >
              &larr; Prev
            </button>
            <img
              src={images[selectedImage]}
              alt={`Image ${selectedImage}`}
              className="max-h-full max-w-full"
            />
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 transform font-bold text-white"
            >
              Next &rarr;
            </button>
            <button
              onClick={closeImage}
              className="absolute right-2 top-2 text-xl font-bold text-white"
            >
              Close &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
