// "use client";

// import { ArrowRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// const navLinks = ["Home", "About", "Services", "Pricing", "Blog", "Resources"];

// export default function Navbar() {
//   const [active, setActive] = useState("Home");

//   return (
//     <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
//       <div className=" w-full max-w-7xl mx-auto px-10 h-16 flex items-center justify-between">
//         {/* Logo */}
//         <Link
//           href="/"
//           className="text-[26px] font-bold tracking-tight no-underline"
//         >
//           <Image
//             src="/logo.png"
//             alt="Logo"
//             width={100}
//             height={40}
//             sizes="100"
//           />
//         </Link>

//         {/* Nav Links */}
//         <ul className="flex items-center gap-1 list-none">
//           {navLinks.map((link) => (
//             <li key={link} className="relative">
//               <button
//                 onClick={() => setActive(link)}
//                 className={`relative px-4 py-1.5  text-[15px]  transition-colors cursor-pointer bg-transparent font-semibold
//                   ${active === link ? "text-[#EA4335]  border-b-2 " : "text-[#3c4043] hover:text-[#1a73e8]"}`}
//               >
//                 {link}
//               </button>
//             </li>
//           ))}
//         </ul>

//         {/* CTA Button */}
//         <Link
//           href="https://meet.google.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-[#ED3C6A] text-white px-6 py-2.5 rounded text-sm font-semibold hover:bg-[#c5221f] hover:shadow-lg transition-all no-underline flex items-center  gap-2"
//         >
//           Schedule A Meeting{" "}
//           <span>
//             <ArrowRight />
//           </span>
//         </Link>
//       </div>
//     </nav>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const navLinks = [
    "Home",
    "About",
    "Services",
    "Pricing",
    "Blog",
    "Resources",
  ];

  // 🔒 Disable body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={40}
            className="h-8 md:h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => setActive(link)}
                className={`text-sm font-semibold transition
                  ${
                    active === link
                      ? "text-[#EA4335] border-b-2 border-[#EA4335]"
                      : "text-gray-700 hover:text-blue-500"
                  }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="https://meet.google.com"
            target="_blank"
            className="bg-[#ED3C6A] text-white px-5 py-2 rounded font-semibold flex items-center gap-2 hover:bg-[#c5221f]"
          >
            Schedule A Meeting
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(true)} className="lg:hidden p-2">
          <Menu size={28} />
        </button>
      </div>

      {/* 🔥 Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* 📱 Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close */}
        <div className="flex justify-between items-center p-5 border-b">
          <span className="font-semibold text-lg">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col p-6 gap-5">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => {
                  setActive(link);
                  setIsOpen(false);

                  // 👇 scroll to section
                  const el = document.getElementById(link.toLowerCase());
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`text-lg font-semibold ${
                  active === link ? "text-[#EA4335]" : "text-gray-700"
                }`}
              >
                {link}
              </button>
            </li>
          ))}

          {/* CTA */}
          <li className="pt-4 border-t">
            <Link
              href="https://meet.google.com"
              className="bg-[#ED3C6A] text-white w-full py-3 rounded-lg font-semibold flex justify-center items-center gap-2"
            >
              Schedule A Meeting <ArrowRight size={18} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
