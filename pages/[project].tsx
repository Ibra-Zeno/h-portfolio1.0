import { useRouter } from "next/router";
import { portfolioData } from "../public/assets/portfolioData";
import Gallery from "../components/Gallery";
import Link from "next/link";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import { Spinner, Button } from "@nextui-org/react";

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
      <Layout>
        {/* <NavBar /> */}
        <section className="bg-lightBg dark:bg-darkBg text-lightText dark:text-dark1 container relative mx-auto my-auto min-h-screen scroll-smooth rounded-lg px-2 py-8 font-primary lg:grid lg:grid-cols-3">
          <div className="relative mx-auto h-min px-8 py-6 lg:sticky lg:top-36 lg:col-span-1 lg:flex lg:flex-col lg:justify-center lg:py-12 lg:text-center ">
            <h3 className="mb-1 text-center text-lg font-semibold sm:text-xl  lg:text-left lg:text-3xl xl:text-4xl">
              {projectData.title}
            </h3>
            <p className="mb-4 text-center text-xs italic lg:text-left">
              {projectData.date}
            </p>
            <p className="mb-2 text-center text-sm sm:text-base lg:text-left ">
              {projectData.description}
            </p>
            <Link href={"/"}>
              <Button
                variant="shadow"
                className="mx-auto mb-1 mt-6  hidden lg:flex lg:justify-center"
              >
                Go Back
              </Button>
            </Link>
            <div className="absolute bottom-2 left-0 right-0  mx-auto flex h-[3px] w-[20%] translate-y-2 justify-center rounded-full bg-black/10 lg:hidden"></div>
          </div>
          <div className="my-auto py-6 lg:col-span-2">
            <Gallery project={projectData} />
            <Link href={"/"} className="lg:hidden">
              <Button
                variant="shadow"
                className="mx-auto mb-3 mt-4 flex justify-center"
              >
                Go Back
              </Button>
            </Link>
          </div>
        </section>
        {/* <Footer /> */}
      </Layout>
    </>
  );
};

export default ProjectPage;
