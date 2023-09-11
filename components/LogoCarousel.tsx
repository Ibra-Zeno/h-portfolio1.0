// Create infinite logo carousel
import { iconSvgs } from "../public/images/iconSvgs";

const LogoCarousel: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="relative flex max-h-[100px] w-full flex-col justify-center overflow-x-hidden bg-transparent align-baseline">
        <div className="relative flex animate-[carousel_35s_linear_infinite] flex-row overflow-y-hidden">
          {iconSvgs.map((svg, index) => (
            <div
              className="my-s-three relative mx-auto flex w-full flex-row justify-center gap-4 rounded-lg p-4"
              key={index}
              dangerouslySetInnerHTML={{ __html: svg }}
            ></div>
          ))}
        </div>
        <div className="absolute flex w-full animate-[carousel-reverse_35s_linear_infinite] flex-row overflow-x-hidden">
          {iconSvgs.map((svg, index) => (
            <div
              className="my-s-three relative mx-auto flex w-full flex-row justify-center gap-4 rounded-lg p-4"
              key={index}
              dangerouslySetInnerHTML={{ __html: svg }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
