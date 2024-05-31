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

          {/* <div className="rounded-lg bg-blue-50/50 p-4 dark:bg-gray-800 md:p-6">
            <div className="inline-block  rounded-lg bg-blue-100/80 p-2 text-blue-500 dark:bg-gray-700">
              <Mail className="" />
            </div>
            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
              Email
            </h2>
            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
              <Link href="mailto:haranya.y@gmail.com">haranya.y@gmail.com</Link>
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;

/* import Link from "next/link";
import { Building, Mail } from "lucide-react";
import Image from "next/image";

const Contact: React.FC = () => {
  return (
    <section className="">
      <div className=" mx-auto flex h-fit flex-col py-20 md:grid md:h-full md:grid-cols-2">
        <div
          id="left-contact"
          className="relative h-full w-full bg-gradient-to-tr from-lightBg to-transparent dark:from-darkBg  md:col-span-1"
        >
          <Image
            src="/images/Hexagon.svg"
            layout="fill"
            alt="Descriptive Image Text"
            className="absolute inset-0 -z-0 h-full object-cover opacity-30"
          />

          <div className=" relative z-10 flex h-full w-full  flex-col  justify-center bg-gradient-radial from-transparent via-lightBg to-lightBg px-8 text-center dark:via-darkBg dark:to-darkBg md:text-left ">
            <div className="mx-auto my-auto lg:w-4/5 xl:w-3/5">
              <h3 className="mb-4 text-xl font-semibold md:text-3xl lg:text-4xl">
                Get in touch
              </h3>
              <p className="mb-6 text-sm sm:text-base md:mb-14 xl:text-lg">
                I am currently looking for new opportunities, my inbox is always
                open. Whether you have a question or just want to say hi,
                I&apos;ll try my best to get back to you!
              </p>
              <div className="mb-6 flex flex-col gap-y-3 md:mb-0">
                <div className="flex flex-row justify-center gap-x-3 text-sm font-medium md:justify-start md:text-base">
                  <Building />
                  <p>London, UK</p>
                </div>
                <div className="flex flex-row justify-center gap-x-3 text-sm font-medium md:justify-start md:text-base">
                  <Mail />
                  <Link href="mailto:haranya.y@gmail.com">
                    haranya.y@gmail.com
                  </Link>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
 */
