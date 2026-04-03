import { Check } from "lucide-react";
import man from "@/public/why-choose/man.png";
import Image from "next/image";
import room from "@/public/why-choose/room.png";
import air from "@/public/why-choose/air.png";
import v from "@/public/why-choose/v.png";
import eye from "@/public/why-choose/eye.png";
import Link from "next/link";

export default function WhyChooseUs() {
  const reasons = [
    "Brilliant Client Service",
    "Flexibility & Adaptibility",
    "We make it Personal",
    "We have expart in our team",
  ];

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-[#fff0f3] rounded-[3rem] py-20 px-6 lg:px-16 max-w-7xl mx-auto my-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="z-10">
            <h2 className="text-2xl md:text-4xl  font-bold text-gray-900 mb-6 leading-tight">
              Few Reasons Why you <br /> Choose us?
            </h2>
            <p className="text-gray-600 mb-8 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>

            <ul className="space-y-4 mb-10">
              {reasons.map((reason, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 font-semibold text-gray-800"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#ffcbd9] text-[#ed426e]">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  {reason}
                </li>
              ))}
            </ul>

            <Link
              href="https://meet.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ed426e] hover:bg-[#d63a62] text-white font-semibold py-4 px-8 rounded-md flex items-center gap-2 transition-all w-64"
            >
              Schedule A Meeting <span>→</span>
            </Link>
          </div>

          {/* Right Visuals */}
          <div className="relative h-125 flex items-center justify-center">
            {/* Main Pink Background Circle */}
            <div className="absolute w-100 h-60 bg-[#ffcbd9] rounded-br-[100px] rounded-bl-[100px] rounded-tr-[100px] rounded-tl-[100px] opacity-60 translate-x-10" />

            {/* Man Image (Placeholder) */}
            <Image
              src={man}
              alt="Consultant"
              className="relative z-10 h-full object-contain"
            />

            {/* Floating Card: Property Info (Top Left) */}
            <div className="absolute top-10 -left-20 z-20 bg-white p-3 rounded-2xl shadow-xl flex gap-4 w-64 animate-bounce-slow">
              <div className="w-30 h-20 bg-gray-200  rounded-2xl">
                <Image
                  src={room}
                  alt="room"
                  className="object-cover w-full h-full  rounded-2xl"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="h-2 w-20 bg-gray-100 rounded mb-2" />
                <div className="h-2 w-16 bg-gray-100 rounded mb-3" />
                <div className="h-2 w-12 bg-gray-100 rounded mb-3" />
                <div className="text-[10px] text-yellow-400">★★★★</div>
                <div className="text-xs font-bold text-[#ed426e]">
                  $75
                  <span className="text-black font-normal">/night</span>
                </div>
              </div>
            </div>

            {/* Floating Card: Calendar (Bottom Left) */}
            <div className="absolute bottom-5 -left-10 z-20 bg-white p-4 rounded-2xl shadow-xl w-48">
              <div className="flex justify-between items-center mb-2 border-b pb-1">
                <div className="w-20 h-2 bg-[#FDEBF0] rounded" />
                <div className="flex gap-1 text-[10px] bg-indigo-900 text-white px-1 rounded">
                  {"< >"}
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-[8px] text-center">
                {[...Array(31)].map((_, i) => (
                  <div
                    key={i}
                    className={`p-1 ${i === 8 || i === 10 ? "bg-[#ed426e] text-white rounded" : ""}`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Card: Logos (Top Right) */}
            <div className="absolute top-10 right-0 z-20 bg-white p-4 rounded-2xl shadow-xl grid grid-cols-2 gap-2">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center p-1">
                <Image src={air} alt="Three" />
              </div>
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center p-1">
                <Image src={v} alt="v" />
              </div>
              <div className="w-12 h-12 bg-[#003580] rounded-lg flex items-center justify-center text-2xl text-white font-bold">
                B{" "}
                <span className="bg-[#00BAFC] w-2 h-2 mt-2 ml-1 rounded-full"></span>
              </div>
              <div className="w-12 h-12 bg-[#34E0A1] rounded-lg flex items-center justify-center ">
                <Image src={eye} alt="eye" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
