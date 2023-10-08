import { Input, Textarea, Button } from "@nextui-org/react";
import Link from "next/link";
import { Building, Mail } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Contact: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check the screen size when the component mounts and on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1023); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check the screen size initially

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                nam ad fugit quasi sint eius harum iure. Dolorum iusto iure
                neque illo molestias totam, ea fugit, ipsam, rem rerum nulla?
              </p>
              <div className="mb-6 flex flex-col gap-y-3 md:mb-0">
                <div className="flex flex-row justify-center gap-x-3 text-sm font-medium md:justify-start md:text-base">
                  <Building />
                  <p>London, UK</p>
                </div>
                <div className="flex flex-row justify-center gap-x-3 text-sm font-medium md:justify-start md:text-base">
                  <Mail />
                  <Link href="mailto:example@test.com">example@test.com</Link>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-1">
          <form className="mx-auto flex h-fit max-w-3xl flex-col justify-center gap-y-9 px-12 py-9 text-base md:order-none lg:px-24">
            <div className="flex flex-row gap-x-6">
              <Input
                label="First Name"
                size={isSmallScreen ? "sm" : "lg"} // Apply the appropriate size based on screen width
                classNames={{
                  inputWrapper: [
                    "shadow-xl",
                    "bg-default-200/50",
                    "dark:bg-default/60",
                    "backdrop-blur-xl",
                    "backdrop-saturate-200",
                    "hover:bg-default-200/70",
                    "dark:hover:bg-default/70",
                    "group-data-[focused=true]:bg-default-200/50",
                    "dark:group-data-[focused=true]:bg-default/60",
                    "!cursor-text",
                  ],
                }}
                type="first-name"
              />
              <Input
                label="Last Name"
                size={isSmallScreen ? "sm" : "lg"} // Apply the appropriate size based on screen width
                classNames={{
                  inputWrapper: [
                    "shadow-xl",
                    "bg-default-200/50",
                    "dark:bg-default/60",
                    "backdrop-blur-xl",
                    "backdrop-saturate-200",
                    "hover:bg-default-200/70",
                    "dark:hover:bg-default/70",
                    "group-data-[focused=true]:bg-default-200/50",
                    "dark:group-data-[focused=true]:bg-default/60",
                    "!cursor-text",
                  ],
                }}
                type="last-name"
              />
            </div>
            <Input
              type="email"
              label="Email"
              size={isSmallScreen ? "sm" : "lg"} // Apply the appropriate size based on screen width
              classNames={{
                inputWrapper: [
                  "shadow-xl",
                  "bg-default-200/50",
                  "dark:bg-default/60",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-default-200/70",
                  "dark:hover:bg-default/70",
                  "group-data-[focused=true]:bg-default-200/50",
                  "dark:group-data-[focused=true]:bg-default/60",
                  "!cursor-text",
                ],
              }}
            />
            <Textarea
              label="Your Message"
              size={isSmallScreen ? "sm" : "lg"} // Apply the appropriate size based on screen width
              classNames={{
                inputWrapper: [
                  "shadow-xl",
                  "bg-default-200/50",
                  "dark:bg-default/60",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-default-200/70",
                  "dark:hover:bg-default/70",
                  "group-data-[focused=true]:bg-default-200/50",
                  "dark:group-data-[focused=true]:bg-default/60",
                  "!cursor-text",
                ],
              }}
              labelPlacement="inside"
              type="message"
            />
            <Button
              type="submit"
              size="lg"
              radius="sm"
              className="bg-light3 font-semibold tracking-wide text-lightBg dark:bg-dark3"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
