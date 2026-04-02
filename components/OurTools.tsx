import React from "react";
import one from "@/public/our-tools/one.png";
import Image from "next/image";
import { tools } from "@/demoData";

export default function OurTools() {
  return (
    <div className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Our <span className="text-[#ff4d8d]">Tools</span>
        </h2>
        <p className="text-black font-semibold ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo <br /> consequat.
        </p>
      </div>

      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 bg-[#F6F6F6] p-6">
        {tools?.map((service, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-6 text-center shadow-sm flex items-center justify-center h-34"
          >
            <Image
              src={service.image}
              width={10}
              height={10}
              alt={`Tool ${i + 1}`}
              className="w-full h-8 object-contain"
              sizes="100vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
