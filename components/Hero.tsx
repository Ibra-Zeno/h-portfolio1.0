import Link from "next/link";
import Image from "next/image";
import Haranya_portfolio_image from "../public/images/Haranya_portfolio_image.jpeg";
import { Button, Avatar } from "@nextui-org/react";
import { Component } from "lucide-react";

/* const Hero: React.FC = () => {
  return (
    <div className="gap-x-15 grid w-full grid-cols-2 items-center justify-center bg-gray-50 px-20 md:h-[350px]">
      <div className="relative h-full px-12">
        <Image
          className="absolute bottom-0 right-1/4 h-full w-fit min-w-[190px] object-fill mix-blend-multiply"
          src={Haranya_portfolio_image}
          alt="Haranya portfolio image"
        />
      </div>
      <div className="flex flex-col py-6 text-center">
        <h2 className="mb-2 text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab officia
        </h2>
        <h4 className="mb-10 text-gray-300">
          Sint soluta nemo iusto numquam recusandae?
        </h4>
        <Button
          color="primary"
          className="mx-auto rounded-sm bg-red-200 px-6 py-2"
        >
          <Link href="/">Portfolio</Link>
        </Button>
      </div>
    </div>
  );
}; */

const Hero: React.FC = () => {
  return (
    <div className="clip-path bg-cyan-700/60">
      <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-6">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="mb-16 flex flex-col sm:mb-0 sm:text-center">
            <div className="border- relative mx-auto mb-6 flex h-16 w-16 shrink-0 overflow-hidden rounded-full border-4 border-gray-500/60 shadow-xl">
              <Image
                className="h-full w-full object-center"
                alt="Haranya image"
                height={100}
                width={100}
                src={Haranya_portfolio_image}
              ></Image>
            </div>
            <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
              <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                Hello, my my little stalker!
              </h2>
              <p className="max-w-prose text-base text-indigo-100 md:text-lg">
                The colours are due to change (especially the background on your
                picture), but is the picture size better for you?
              </p>
            </div>
            <div>
              <Button
                color="primary"
                className="mx-auto rounded-sm bg-red-300 px-6 py-2"
              >
                <Link href="/">Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
