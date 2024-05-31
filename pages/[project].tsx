import { useRouter } from "next/router";
import { portfolioData } from "../public/assets/portfolioData";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Router from "next/router";
import Link from "next/link";
import Layout from "../components/Layout";
import React, { useEffect, useState } from "react";
import { Tooltip } from "@nextui-org/react";
import { Moon, Sun, ArrowLeft } from "lucide-react";
import { Spinner, Button } from "@nextui-org/react";
import { useTheme } from "../context/themeContext";

const ProjectPage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

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

  const handleGoBack = () => {
    router.push(`/#portfolio`);
  };

  return (
    <>
      <Layout>
        <section className="container relative mx-auto my-auto min-h-screen scroll-smooth rounded-lg bg-lightBg px-2 py-8 font-primary text-lightText dark:bg-darkBg dark:text-dark1 lg:grid lg:grid-cols-3">
          <div className="relative mx-auto h-min px-4 py-6 md:px-8 lg:sticky lg:top-14 lg:col-span-1 lg:flex lg:flex-col lg:justify-center lg:py-12 lg:text-center xl:top-10 ">
            <div className="z-10">
              <h3 className="mb-1 text-center text-lg font-semibold sm:text-xl  lg:text-left lg:text-3xl xl:text-4xl">
                {projectData.title}
              </h3>
              <p className="mb-4 text-center text-xs italic lg:text-left">
                {projectData.date}
              </p>
              <p className="mb-2 text-center text-sm lg:text-left xl:text-base ">
                {projectData.description}
              </p>
              <div className="absolute bottom-2 left-0 right-0  mx-auto flex h-[3px] w-[20%] translate-y-2 justify-center rounded-full bg-black/10 lg:hidden"></div>
            </div>
          </div>
          <div className="my-auto py-6 lg:col-span-2">
            <Gallery project={projectData} />
            <Button
              variant="shadow"
              className="mx-auto mb-1 mt-6 flex justify-center lg:hidden"
              onClick={handleGoBack}
            >
              Go Back
            </Button>
          </div>
          <div className="relative">
            <div className="fixed left-6 top-6 z-0 lg:left-10 ">
              <div
                onClick={handleGoBack}
                className="rounded-full  bg-stone-500 p-2 shadow-xl transition-all duration-75 ease-in-out hover:bg-stone-400 dark:bg-gray-700 dark:hover:bg-gray-600 xl:p-3"
              >
                <ArrowLeft className="h-6 w-6 text-white xl:h-7 xl:w-7" />
              </div>
            </div>
            <div className="fixed bottom-6 left-6 z-0 lg:left-10 ">
              <Tooltip
                content={theme === "light" ? "Dark Mode" : "Light Mode"}
                placement="bottom"
                delay={100}
                className="rounded-lg bg-light2 font-primary text-sm tracking-wide text-dark1 dark:bg-dark2/90 "
              >
                <button
                  onClick={toggleTheme}
                  className="rounded-full  bg-stone-500 p-2 shadow-xl transition-all duration-75 ease-in-out hover:bg-stone-400 dark:bg-gray-700 dark:hover:bg-gray-600 xl:p-3"
                >
                  {theme === "light" ? (
                    <Moon className="h-6 w-6 text-white xl:h-7 xl:w-7" />
                  ) : (
                    <Sun className="h-6 w-6  xl:h-7 xl:w-7" />
                  )}
                </button>
              </Tooltip>
            </div>
          </div>
        </section>
      </Layout>
      <Footer />
    </>
  );
};

export default ProjectPage;
