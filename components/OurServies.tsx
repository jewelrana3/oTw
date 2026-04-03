import React from "react";
import Image from "next/image";
import one from "@/public/our-services/one.png";
import two from "@/public/our-services/two.png";
import three from "@/public/our-services/three.png";
import four from "@/public/our-services/four.png";
import five from "@/public/our-services/five.png";
import six from "@/public/our-services/six.png";

const services = [
  {
    title: "Manage Property Listings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: one, // Replace with your actual icon paths
    border: false,
  },
  {
    title: "Manage Customer Bookings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: two,
    border: true,
  },
  {
    title: "Schedule House Cleaning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: three,
    border: true,
  },
  {
    title: "Monitor Guest Reviews",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: six,
    border: true,
  },
  {
    title: "Track & Report Expenses",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: five,
    border: true,
  },
  {
    title: "Guest Inquiry & Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: four,
    border: true,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-12 md:py-20 px-4 bg-white">
      {/* Header Section */}
      <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
          Our <span className="text-[#ff4d8d]">Service</span>
        </h2>
        <p className="text font-medium text-sm md:text-base leading-relaxed px-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Cards Grid */}
      {/* Changed: grid-cols-1 -> md:grid-cols-2 -> lg:grid-cols-3 */}
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 md:gap-8 px-5">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col items-start p-8 md:p-10 bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-sm hover:shadow-lg transition-all duration-300 ${
              service.border
                ? "border border-[#ff4d8d]"
                : "border border-transparent"
            }`}
          >
            {/* Icon Wrapper */}
            <div className="w-16 h-16 md:w-20 md:h-20 mb-6 md:mb-8 flex items-center justify-center">
              <Image
                src={service.icon}
                alt={service.title}
                className="object-contain"
              />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 leading-tight">
              {service.title}
            </h3>

            <p className=" font-medium text-sm md:text-base mb-6 md:mb-8 leading-relaxed ">
              {service.description}
            </p>

            <button className="mt-auto w-full sm:w-auto px-8 py-2.5 border border-[#ff4d8d] text-[#ff4d8d] rounded-full font-semibold hover:bg-[#ff4d8d] hover:text-white transition-all duration-200 cursor-pointer">
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
