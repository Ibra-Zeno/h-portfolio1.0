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
      <div className=" flex h-full flex-col md:grid md:grid-cols-2">
        <div
          id="left-contact"
          className="relative aspect-square h-full w-full bg-gradient-to-tr from-blue-900 to-transparent  md:col-span-1"
        >
          <Image
            src="/images/Hexagon.svg"
            layout="fill"
            alt="Descriptive Image Text"
            className="absolute inset-0 -z-0 object-cover opacity-30"
          />

          <div className=" relative z-10 flex  h-full  w-full flex-col justify-center bg-gradient-to-tr from-sky-900 via-sky-900 to-transparent px-8 py-20 ">
            <div className="mx-auto lg:w-4/5 xl:w-3/5">
              <h3 className="mb-4 text-xl font-semibold md:text-3xl lg:text-4xl">
                Get in touch
              </h3>
              <p className="mb-14 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                nam ad fugit quasi sint eius harum iure. Dolorum iusto iure
                neque illo molestias totam, ea fugit, ipsam, rem rerum nulla?
              </p>
              <div className="flex flex-col gap-y-3">
                <div className="flex flex-row gap-x-3 font-medium">
                  <Building />
                  <p>London, UK</p>
                </div>
                <div className="flex flex-row gap-x-3 font-medium">
                  <Mail />
                  <Link href="mailto:example@test.com">example@test.com</Link>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-1">
          <form className="mx-auto flex h-full max-w-3xl flex-col justify-center gap-y-9 px-8 py-20 text-base md:order-none md:px-24">
            <div className="flex flex-row gap-x-6">
              <Input
                label="First Name"
                size={isSmallScreen ? "sm" : "lg"} // Apply the appropriate size based on screen width
                type="first-name"
              />
              <Input
                label="Last Name"
                size={isSmallScreen ? "sm" : "lg"} // Apply the appropriate size based on screen width
                type="last-name"
              />
            </div>
            <Input
              type="email"
              label="Email"
              size={isSmallScreen ? "sm" : "lg"} // Apply the appropriate size based on screen width
            />
            <Textarea
              label="Your Message"
              size={isSmallScreen ? "sm" : "lg"} // Apply the appropriate size based on screen width
              labelPlacement="inside"
              type="message"
            />
            <Button
              type="submit"
              size="lg" // Apply the appropriate size based on screen width
              radius="md"
              className="font-semibold tracking-wide"
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
