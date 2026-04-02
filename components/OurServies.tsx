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
    <section className="py-16 px-4  bg-white">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Our <span className="text-[#ff4d8d]">Service</span>
        </h2>
        <p className="text-black font-semibold ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo <br /> consequat.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col items-start p-10 bg-white rounded-[2rem] shadow-sm hover:shadow-md transition-shadow duration-300 ${service.border ? "border border-[#ff4d8d]" : ""}`}
          >
            {/* Icon Placeholder - Using div for illustration */}
            <div className="w-20 h-20 mb-8 relative">
              <Image src={service.icon} alt={service.title} />
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
              {service.title}
            </h3>

            <p className="text-black font-semibold mb-8 leading-relaxed">
              {service.description}
            </p>

            <button className="px-8 py-2 border border-[#ff4d8d] text-[#ff4d8d] rounded-full font-medium hover:bg-[#ff4d8d] hover:text-white transition-all duration-200 text">
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
