import Link from "next/link";
import Button from "./Button";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 lg:px-16 bg-black">
      <Link href="/">
        <h1 className="font-thin text-xs tracking-[4px] lg:text-2xl">SUPERHUMAN</h1>
      </Link>
      <ul className="flex gap-4 items-center">
        <li>
          <Button name="Get Started" className="text-sm lg:text-xl lg:px-8 lg:py-2" />
        </li>
        <li>
          <RxHamburgerMenu className="cursor-pointer md:hidden" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
