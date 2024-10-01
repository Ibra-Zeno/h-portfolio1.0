import { Lightbulb } from "lucide-react";
import { useState } from "react";
import { Skeleton, Image } from "@nextui-org/react";

const features = [
  {
    name: "Attention to Detail.",
    description:
      "Perfecting small details is the most rewarding part of design, as they truly bring a project to life.",
    icon: Lightbulb,
  },
  {
    name: "Adaptability and Growth.",
    description:
      "Every project has taught me something valuable. I'm excited to keep learning, growing, and contributing to meaningful work.",
    icon: Lightbulb,
  },
  {
    name: "Balancing Creativity with Functionality.",
    description:
      "Good design is about more than aesthetics—it's about how things work and how they make people feel. I aim to create work that blends creativity and practicality.",
    icon: Lightbulb,
  },
];

export default function About() {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <div className="overflow-hidden bg-lightBg py-24 text-lightText dark:bg-darkBg dark:text-dark1 sm:py-32">
      <div className="mx-auto max-w-full px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:max-w-screen-2xl lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-lightText  dark:text-dark2 sm:text-4xl">
                The Person Behind the Pillars
              </p>
              <p className="mt-6 text-lg leading-8 text-lightText dark:text-dark1">
                Design helps me understand and shape the world. From
                architecture to web design, I enjoy the thought that goes into
                every detail. My journey across England and Malaysia has
                enriched my design experience.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-lightText dark:text-dark1 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-light2 dark:text-dark2 ">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-light1 dark:text-dark3 "
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
