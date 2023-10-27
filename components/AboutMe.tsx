import { Lightbulb } from "lucide-react";
import { useState } from "react";
import { Skeleton, Image } from "@nextui-org/react";

const features = [
  {
    name: "Attention to Detail.",
    description:
      "I have a strong appreciation for the finer elements of design, ensuring that every project reflects a high level of craftsmanship and aesthetic consideration.",
    icon: Lightbulb,
  },
  {
    name: "Adaptability and Continuous Learning.",
    description:
      "I embrace change with an open mind, always ready to learn and evolve in fast-paced environments.",
    icon: Lightbulb,
  },
  {
    name: "Effective Communication.",
    description:
      "I value clear and respectful communication, both as an active listener and a contributor to team discussions.",
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
                I have a special place for design in my heart and, luckily, I
                have been fortunate to gain experiences from several different
                companies around the world. I look forward to learning and
                growing, while being part of a collaborative team.
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
