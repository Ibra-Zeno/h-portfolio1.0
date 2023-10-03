// Create infinite logo carousel
import { svgObjects } from "../public/images/iconSvgs";
import { Tooltip } from "@nextui-org/react";

const LogoCarousel: React.FC = () => {
  return (
    <section className="bg-[#F9F5F6] dark:bg-[#20262E]">
      <div className="group relative flex max-h-[100px] w-full flex-col justify-center overflow-x-hidden bg-transparent align-baseline">
        <div className="group-hover:pause relative flex w-[300%] animate-[carousel_35s_linear_infinite] flex-row overflow-y-hidden sm:w-[200%] sm:animate-[carousel_35s_linear_infinite] lg:w-[150%] lg:animate-[carousel_45s_linear_infinite]">
          {svgObjects.map((object, index) => (
            <Tooltip
              key={index}
              content={`${object.name}`}
              closeDelay={-100}
              offset={-20}
              className="rounded-lg border-2 border-gray-400/10 font-primary text-sm tracking-wide"
            >
              <div
                className="my-s-three relative mx-auto flex w-full flex-row justify-center rounded-lg p-6 opacity-95 invert dark:fill-[#E9E8E8] dark:text-[#E9E8E8] dark:opacity-100 dark:invert-0"
                dangerouslySetInnerHTML={{ __html: object.svg }}
              ></div>
            </Tooltip>
          ))}
        </div>
        <div className="group-hover:pause absolute flex w-[300%] translate-x-[200%] animate-[carousel-reverse_35s_linear_infinite] flex-row items-center overflow-x-hidden sm:w-[200%] sm:translate-x-[100%] sm:animate-[carousel-reverse_35s_linear_infinite] lg:w-[150%] lg:translate-x-[50%] lg:animate-[carousel-reverse_45s_linear_infinite] ">
          {svgObjects.map((object, index) => (
            <Tooltip
              key={index}
              content={`${object.name}`}
              closeDelay={-100}
              offset={-20}
              className="rounded-lg border-2 border-gray-400/10 font-primary text-sm tracking-wide"
            >
              <div
                className="my-s-three relative mx-auto flex w-full flex-row justify-center rounded-lg p-6 opacity-95 invert dark:fill-[#E9E8E8] dark:text-[#E9E8E8] dark:opacity-100 dark:invert-0"
                key={index}
                dangerouslySetInnerHTML={{ __html: object.svg }}
              ></div>
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
