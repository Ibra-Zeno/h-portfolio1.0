import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between border border-gray-500 bg-gray-300 px-6 py-3">
      <div className="">
        <Link href="/">portfolio</Link>
      </div>
      <div className="p-0 font-logo text-2xl">
        <Link href="/">Haranya</Link>
      </div>
      <div className="">
        <Link href="/">Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;
