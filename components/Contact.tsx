import Link from "next/link";
import { MapPin, Mail } from "lucide-react";
import Image from "next/image";
import { Button } from "@nextui-org/react";

const Contact: React.FC = () => {
  const handleCvClick = () => {
    setTimeout(() => {
      window.open("/HY-CV.pdf", "_blank");
    }, 400);
  };
  return (
    <section
      className="mt-12 bg-gradient-to-tr from-lightBg to-transparent dark:from-darkBg dark:to-transparent lg:mt-20"
      id="contact"
    >
      <div className="container mx-auto px-6 py-12">
        <div className="text-center md:text-left">
          <p className="font-medium text-light3 dark:text-dark2">Contact us</p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            We’d love to hear from you
          </h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Our friendly team is always here to chat.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-blue-50/50 p-4 shadow-md dark:bg-dark4/30 md:p-6">
            <div className="inline-block rounded-lg  bg-lightBg/40 p-2 text-light3 dark:bg-gray-700 dark:text-dark3">
              <MapPin className="" />
            </div>
            <h2 className="mt-2 text-base font-medium text-gray-800 dark:text-white">
              Location
            </h2>
            <p className="mt-1.5 text-sm text-light2/80 dark:text-dark2">
              London, England
            </p>
          </div>
          <div className="rounded-lg bg-blue-50/50 p-4 shadow-md dark:bg-dark4/30 md:p-6">
            <div className="inline-block rounded-lg  bg-lightBg/40 p-2 text-light3 dark:bg-gray-700 dark:text-dark3">
              <MapPin className="" />
            </div>
            <h2 className="mt-2 text-base font-medium text-gray-800 dark:text-white">
              Email
            </h2>
            <Link
              href="mailto:haranya.y@gmail.com"
              className="mt-1.5 text-sm text-light2/80 transition-all duration-400 ease-soft-spring hover:text-dark2/75 dark:text-dark2 hover:dark:text-dark2/75"
            >
              haranya.y@gmail.com
            </Link>
          </div>
          <div className="rounded-lg bg-blue-50/50 p-4 shadow-md dark:bg-dark4/30 md:p-6">
            <div className="flex w-fit rounded-lg  bg-lightBg/40 p-2 text-light3 dark:bg-gray-700 dark:text-dark3">
              <MapPin className="" />
            </div>
            <Button
              className="mx-auto mt-6 w-fit rounded border-2 border-light3 bg-lightBg/25 font-bold tracking-wider text-lightText transition-all duration-400 ease-soft-spring hover:border-light3/80 hover:bg-light3 hover:text-dark1 dark:border-dark3 dark:bg-darkBg dark:text-dark1 dark:hover:border-dark3/80 dark:hover:bg-dark3 md:mx-0 "
              onClick={handleCvClick}
              size="md"
            >
              View CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
