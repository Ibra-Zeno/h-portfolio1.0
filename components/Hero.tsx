import Link from "next/link";
import Image from "next/image";
import Haranya_portfolio_image from "../public/images/Haranya_portfolio_image.jpeg";
import { Button } from "@nextui-org/react";

const Hero: React.FC = () => {
  return (
    <div className="mt-20">
      <div className=" bg-lightBg dark:bg-darkBg">
        <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-6">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="mb-16 flex flex-col sm:mb-0 sm:text-center">
              <div className="relative mx-auto mb-6 flex h-16 w-16 shrink-0 flex-col justify-center overflow-hidden rounded-full border-4 border-gray-500/60 shadow-xl">
                <Image
                  className="h-full w-full object-center"
                  alt="Haranya image"
                  height={100}
                  width={100}
                  draggable={false}
                  src={Haranya_portfolio_image}
                ></Image>
              </div>
              <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
                <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-lightText dark:text-dark1 sm:text-4xl md:mx-auto">
                  Hello, my little stalker!
                </h2>
                <p className="max-w-prose text-base text-lightText dark:text-dark1 md:text-lg">
                  The colours are due to change (especially the background on
                  your picture), but is the picture size better for you?
                </p>
              </div>
              <div className="flex justify-center">
                <Button
                  color="primary"
                  className="mx-auto rounded-sm bg-light3 px-6 py-2 dark:bg-dark3"
                >
                  <Link href="/">Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
