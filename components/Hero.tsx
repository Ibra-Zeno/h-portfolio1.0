import Image from "next/image";
import Haranya_portfolio_image from "../public/images/Haranya_portfolio_image.jpeg";
import { Button } from "@nextui-org/react";
import Router from "next/router";

const Hero: React.FC = () => {
  const handleCvClick = () => {
    setTimeout(() => {
      Router.push("/");
    }, 400);
  };
  const handlePortfolioClick = () => {
    setTimeout(() => {
      Router.push("/#portfolio");
    }, 400);
  };

  return (
    <div className="md:mt-20">
      <div className=" bg-lightBg dark:bg-darkBg">
        <div className="mx-auto px-4 py-12 sm:max-w-xl md:max-w-full md:px-24 md:py-16 lg:max-w-screen-xl lg:px-8 lg:py-6">
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
              <div className="mb-10 max-w-xl text-center md:mx-auto md:mb-12 lg:max-w-2xl">
                <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-lightText dark:text-dark1 sm:text-4xl md:mx-auto">
                  Hello, my little stalker!
                </h2>
                <p className="max-w-prose text-base text-lightText dark:text-dark1 md:text-lg">
                  The colours are due to change (especially the background on
                  your picture), but is the picture size better for you?
                </p>
              </div>
              <div className="flex justify-center">
                <div className="flex gap-x-4">
                  <Button
                    color="primary"
                    className="mx-auto rounded border-2 border-light3 bg-transparent px-6 py-2 tracking-wide text-lightText transition-all duration-400 ease-soft-spring hover:border-light3/80 hover:bg-light3 hover:text-dark1 dark:border-dark3 dark:text-dark1 dark:hover:border-dark3/80 dark:hover:bg-dark3 "
                    onClick={handleCvClick}
                  >
                    Download CV
                  </Button>
                  <Button
                    color="primary"
                    onClick={handlePortfolioClick}
                    className="mx-auto rounded bg-light3 px-6 py-2 tracking-wide transition-all duration-400 ease-soft-spring hover:bg-light3/80 dark:bg-dark3 dark:hover:bg-dark3/80"
                  >
                    Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
