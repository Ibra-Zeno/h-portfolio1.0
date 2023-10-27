import Link from "next/link";
import { Linkedin, FileText } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <div className="mb-12 bg-lightBg dark:bg-darkBg sm:mb-0">
      <footer>
        <div className="mx-auto max-w-7xl overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
          <div
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            <div className="p-0 font-logo text-3xl tracking-wide text-lightText dark:text-dark1">
              <Link href="/">Haranya</Link>
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-6">
            <span className="m-auto inline-flex w-full justify-center gap-3 md:w-auto md:justify-start">
              <Link
                className="h-6 w-6 fill-black transition hover:text-blue-500"
                href={"/HY-CV.pdf"}
                target="_blank"
              >
                <span className="sr-only">CV</span>
                <FileText className="h-5 w-5" />
              </Link>
              <Link
                className="h-6 w-6 fill-black transition hover:text-blue-500"
                href={"/"}
              >
                <span className="sr-only">Linkedin</span>
                <Linkedin className="h-5 w-5" />
              </Link>
            </span>
          </div>
          <p className="mt-4 text-center">
            <span className="mx-auto mt-2 text-sm text-gray-500">
              Designed and coded by{" "}
              <span className="font-semibold italic">Ibrahim Kalam</span>
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

/*
 */

/* <footer className="mx-auto max-w-full px-4 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 border-b border-t px-12 py-6 md:flex-row">
          <Link href="/" className="font-logo text-2xl tracking-wide">
            Haranya
          </Link>

          <div className="flex gap-6">
            <Link href={""} target="_blank">
              <Linkedin />
            </Link>
            <Link href={""} target="_blank">
              <Linkedin />
            </Link>
            <Link href={""} target="_blank">
              <Linkedin />
            </Link>
            <Link href={""} target="_blank">
              <Linkedin />
            </Link>
          </div>
        </div>

        <div className="py-6 text-center text-sm tracking-wide text-lightText dark:text-dark1">
          Signed and designed by Ibrahim Kalam
        </div>
      </footer> */
