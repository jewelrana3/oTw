"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = ["Home", "About", "Services", "Pricing", "Blog", "Resources"];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-[26px] font-bold tracking-tight no-underline"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={40}
            sizes="100"
          />
        </Link>

        {/* Nav Links */}
        <ul className="flex items-center gap-1 list-none">
          {navLinks.map((link) => (
            <li key={link} className="relative">
              <button
                onClick={() => setActive(link)}
                className={`relative px-4 py-1.5  text-[15px]  transition-colors cursor-pointer bg-transparent font-semibold
                  ${active === link ? "text-[#EA4335]  border-b-2 " : "text-[#3c4043] hover:text-[#1a73e8]"}`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          href="#"
          className="bg-[#ED3C6A] text-white px-6 py-2.5 rounded text-sm font-semibold hover:bg-[#c5221f] hover:shadow-lg transition-all no-underline flex items-center  gap-2"
        >
          Schedule A Meeting{" "}
          <span>
            <ArrowRight />
          </span>
        </Link>
      </div>
    </nav>
  );
}
