import Link from "next/link";
import Image from "next/image";
import Haranya_portfolio_image from "../public/images/Haranya_portfolio_image.jpeg";
import { Button } from "@nextui-org/react";

const Hero: React.FC = () => {
  return (
    <div className="gap-x-15 grid w-full grid-cols-2 items-center justify-center bg-gray-50 px-20 md:h-[350px]">
      <div className="relative h-full px-12">
        <Image
          className="absolute bottom-0 right-1/4 h-full w-fit min-w-[190px] object-fill "
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
};

export default Hero;
