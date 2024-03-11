import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-light p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="pl-2">
          <h1 className="text-primary text-l font-bold">
            <Link href="/">Portfolio</Link>
          </h1>
        </div>
        <div className="block sm:hidden text-primary">
          test
        </div>
        <div className="hidden sm:block">
          <ul className="flex text-sm space-x-2 text-primary font-light">
            <li className="hover:text-primary hover:font-semibold active:font-semibold">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-primary hover:font-semibold active:font-semibold">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-primary hover:font-semibold active:font-semibold">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="hover:text-primary hover:font-semibold active:font-semibold">
              <Link href="/api/Resume_FebrianaKusumah.pdf" target="_blank" rel="noopener noreferrer">Download CV</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;