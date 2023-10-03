import { Lightbulb } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "@nextui-org/react";

const features = [
  {
    name: "Cool person.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: Lightbulb,
  },
  {
    name: "Mad bamajama.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: Lightbulb,
  },
  {
    name: "Creative chef.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: Lightbulb,
  },
];

export default function About() {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <div className="dark:bg-darkBg dark:text-dark1 bg-lightBg text-lightText overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-full px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:max-w-screen-2xl lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="dark:text-dark3 text-light4 text-base font-semibold leading-7 ">
                The one and only
              </h2>
              <p className="dark:text-dark2 text-lightText mt-2 text-3xl font-bold  tracking-tight sm:text-4xl">
                A better workflow
              </p>
              <p className="dark:text-dark1 text-lightText mt-6 text-lg leading-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <dl className="dark:text-dark1 text-lightText mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="dark:text-dark2 text-light3 inline font-semibold ">
                      <feature.icon
                        className="dark:text-dark3 text-light4 absolute left-1 top-1 h-5 w-5 "
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Skeleton
            isLoaded={!isImageLoading}
            className="overflow-visible rounded-lg"
          >
            <Image
              src={
                "https://images.unsplash.com/photo-1693856758403-bba589db78dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              }
              alt="Product screenshot"
              className="aspect-video w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              draggable={false}
              width={2432}
              onLoad={() => setIsImageLoading(false)}
              height={1442}
            />
          </Skeleton>
        </div>
      </div>
    </div>
  );
}

/* <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          /> */
