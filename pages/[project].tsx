import { useRouter } from "next/router";
import { portfolioData } from "../public/assets/portfolioData";
import Gallery from "../components/Gallery";
import React, { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/react";

const ProjectPage: React.FC = () => {
  const router = useRouter();
  const { project } = router.query;

  const [isLoading, setIsLoading] = useState(true);

  // Set isLoading to false on initial page load
  useEffect(() => {
    setIsLoading(false);
  }, []);

  // Check if project is undefined before accessing projectData
  if (typeof project !== "string") {
    return isLoading ? (
      <div className="relative grid h-screen w-screen">
        <Spinner
          size="lg"
          label="Loading..."
          className="mx-auto"
          color="primary"
        />
      </div>
    ) : null;
  }

  const projectData = portfolioData[project];
  return (
    <>
      <section className="container relative mx-auto scroll-smooth bg-gray-300 px-2 font-primary lg:grid lg:grid-cols-3">
        <div className="mx-auto h-min lg:sticky lg:top-36 lg:col-span-1 lg:text-center">
          <h3 className="mb-1 text-center font-sans text-lg font-semibold text-gray-700">
            {projectData.title}
          </h3>
          <p className="mb-2 text-center text-sm italic">{projectData.date}</p>
          <p className="mb-2 text-center text-sm text-gray-700/90">
            {projectData.description}
          </p>
          <div className="mx-auto h-[1px] w-[80%] bg-gray-700/40 lg:hidden"></div>
        </div>

        <div className="lg:col-span-2">
          <Gallery project={projectData} />
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
