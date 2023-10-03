import Link from "next/link";
import { Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <div className="bg-lightBg dark:bg-darkBg pt-4 sm:pt-10 lg:pt-12">
      <footer className="mx-auto max-w-full px-4 md:px-8">
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

        <div className="text-lightText dark:text-dark1 py-6 text-center text-sm tracking-wide">
          Signed and designed by Ibrahim Kalam
        </div>
      </footer>
    </div>
  );
};

export default Footer;
