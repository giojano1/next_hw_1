"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
type NavLink = {
  title: string;
  href: string;
};
const Header = () => {
  const pathname = usePathname();
  const navLinks: NavLink[] = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "How it Works", href: "/howitworks" },
    { title: "Services", href: "/services" },
  ];
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">FasterUI</h1>
      </div>
      <nav>
        <ul className="bg-white w-full rounded-[20px] py-6 px-10 flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={`text-[#8987A1] , ${
                pathname === link.href && "text-[#3C3A5E] font-bold"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </ul>
      </nav>
      <div>
        <button className=" w-[100px] h-12 rounded-[10px]  text-[#8987A1]">
          <Link href="/signin">Sign In</Link>
        </button>
        <button className="w-[132px] h-12 rounded-[10px] bg-[#4e47ff] text-white">
          <Link href="signup" className=" ">
            Sign Up
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
