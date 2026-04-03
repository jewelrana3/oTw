"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import three from "@/public/hero-section/three.png";
import two from "@/public/hero-section/two.png";
import one from "@/public/hero-section/one.png";

export default function HeroSection() {
  const scrollToPricing = () => {
    const element = document.getElementById("pricing");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-white overflow-hidden py-20 px-4">
      {/* 1. Grid Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.4]"
        style={{
          backgroundImage: `linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />
      {/* 2. Floating Logos & Dots Container */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Logos (Tilted) */}
        <div className="absolute top-[15%] left-[15%] ">
          <Image src={three} alt="Three" />
        </div>
        <div className="absolute top-[15%] right-[15%] rotate-20 bg-[#003580] p-4 rounded-3xl shadow-lg">
          <div className="w-12 h-12 text-white font-bold flex items-center justify-center text-3xl">
            B.
          </div>
        </div>
        <div className="absolute bottom-[20%]  sm:bottom-[25%] left-[20%] rotate-[-10deg] ">
          <Image src={two} alt="Two" />
        </div>

        <div className="absolute bottom-[20%]  sm:bottom-[25%] right-[20%] rotate-25 bg-[#34e0a1] p-4 rounded-3xl shadow-lg">
          <Image src={one} alt="One" />
        </div>

        {/* Scattered Dots */}
        <div className="absolute top-[20%] left-[5%] w-3 h-3 bg-indigo-500 rounded-full" />
        <div className="absolute top-[10%] left-[50%] w-3 h-3 bg-emerald-400 rounded-full" />
        <div className="absolute top-[30%] right-[10%] w-4 h-4 bg-yellow-400 rounded-full blur-[1px]" />
        <div className="absolute middle-left w-3 h-3 bg-red-400 rounded-full top-1/2 left-[10%]" />
        <div className="absolute bottom-[20%] left-[5%] w-2 h-2 bg-yellow-600 rounded-full" />
        <div className="absolute bottom-[10%] left-[50%] w-4 h-4 bg-cyan-400 rounded-full" />
        <div className="absolute bottom-[30%] right-[5%] w-2 h-2 bg-blue-900 rounded-full" />
      </div>{" "}
      {/* This correctly closes the Dots Container */}
      {/* 3. Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mt-28 lg:mt-0">
        <h1 className="text-gray-900 mb-8 tracking-tight">
          <span className="md:text-5xl font-bold"> Airbnb Assistants For</span>
          <br />
          <span className="text-gray-900 md:text-4xl">Property Management</span>
        </h1>

        <p className="text-lg leading-relaxed mb-10 max-w-3xl mx-auto font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="flex flex-col items-center gap-6 mt-10!">
          <Link
            href="https://meet.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ED3C6A] text-white px-6 py-2.5 rounded text-sm font-semibold hover:bg-[#c5221f] hover:shadow-lg transition-all no-underline flex items-center gap-2"
          >
            Schedule A Meeting{" "}
            <span>
              <ArrowRight size={18} />
            </span>
          </Link>

          <div
            onClick={scrollToPricing}
            className="text-gray-900 font-semibold underline decoration-2 underline-offset-4 hover:text-[#ed426e] transition-colors cursor-pointer"
          >
            See Pricing
          </div>
        </div>
      </div>
      {/* 4. Footer Text */}
      <div className="absolute bottom-10 w-full text-center">
        <p className="text-gray-900 font-bold text-xl">
          Trusted by leaders in 50+ industries
        </p>
      </div>
    </section>
  );
}
