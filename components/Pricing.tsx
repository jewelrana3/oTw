"use client";
import React, { useState } from "react";
import { Check, X } from "lucide-react";
import { plans } from "@/demoData";
import Image from "next/image";
import offer from "@/public/pricing/offer.png";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <section
      className="py-20 px-4 bg-white font-sans"
      ref={pricingRef}
      id="pricing"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Airbnbn Assistent <span className="text-[#ed426e]">pricing</span>
        </h2>
        <p className="text-gray-500 mb-8">Choose a plan that's right for you</p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 relative">
          <span
            className={`text-sm ${!isYearly ? "font-bold text-black " : "text-black"}`}
          >
            Pay Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="w-12 h-6 bg-gray-300 rounded-full relative transition-colors duration-200 focus:outline-none cursor-pointer"
          >
            <div
              className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ${isYearly ? "translate-x-6" : ""}`}
            />
          </button>
          <span
            className={`text-sm ${isYearly ? "font-bold text-black " : "text-black"}`}
          >
            Pay Yearly
          </span>
          <div className="absolute mt-40 md:mt-10 md:ml-110 flex flex-col items-center gap-2 mb-5">
            <Image src={offer} alt="Offer" />
            <div className="text-[#ed426e] text-xs font-semibold md:mt-10">
              Save 25%
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start mt-30">
        {plans?.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-3xl p-8 border ${plan.highlight ? "bg-[#ed426e] text-white border-[#ed426e] shadow-xl transform scale-105" : "bg-white text-gray-900 border-pink-100"}`}
          >
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <p
              className={`text-sm mb-8 h-12 ${plan.highlight ? "text-pink-100" : "text-gray-500"}`}
            >
              {plan.desc}
            </p>
            <div className="flex items-baseline mb-8">
              <span className="text-5xl font-bold">${plan.price}</span>
              <span
                className={`ml-2 text-sm ${plan.highlight ? "text-pink-100" : "text-gray-400"}`}
              >
                / Month
              </span>
            </div>

            <button
              className={`w-full py-3 rounded-lg cursor-pointer mb-8 border transition-all ${
                plan.highlight
                  ? "bg-white text-[#ed426e] hover:bg-pink-50"
                  : "border-[#ed426e] text-[#ed426e] hover:bg-pink-50"
              }`}
            >
              Get Started Now
            </button>

            <div className="space-y-4 text-left">
              {plan.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-center gap-3">
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      feature.included
                        ? plan.highlight
                          ? "bg-pink-400"
                          : "bg-pink-100"
                        : "bg-transparent border border-gray-200"
                    }`}
                  >
                    {feature.included ? (
                      <Check
                        size={20}
                        className={
                          plan.highlight ? "text-white" : "text-[#ed426e]"
                        }
                      />
                    ) : (
                      <X size={20} className="text-gray-300" />
                    )}
                  </div>
                  <span
                    className={`text-xs ${feature.included ? "" : "text-gray-0 opacity-60"}`}
                  >
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
