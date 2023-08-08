import Link from "next/link";
import Button from "./Button";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6">
      <Link href="/">
        <h1 className="font-thin text-xs tracking-[4px]">SUPERHUMAN</h1>
      </Link>
      <ul className="flex gap-4 items-center">
        <li>
          <Button name="Get Started" className="text-sm" />
        </li>
        <li>
          <RxHamburgerMenu className="cursor-pointer" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
