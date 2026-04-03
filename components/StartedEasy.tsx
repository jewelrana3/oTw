import one from "@/public/easy/one.png";
import two from "@/public/easy/two.png";
import three from "@/public/easy/three.png";
import Image from "next/image";

const steps = [
  {
    number: "01",
    text: "Add requirements & sign up today",
    icon: one,
    plusColor: "text-[#ed426e]",
  },
  {
    number: "02",
    text: "Connect with your CSM &  onboarding team",
    icon: three,
    plusColor: "text-[#ed426e]",
  },
  {
    number: "03",
    text: "Meet your STR Assistant next week",
    icon: two,
    plusColor: "text-[#ed426e]",
  },
];

export default function StartedEasy() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
          Getting Started is <span className="text-[#ff4d8d]">Easy</span>
        </h2>
        <p className="text-black font-semibold ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo <br /> consequat.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 px-6">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Card Container */}
            <div className="relative w-full aspect-4/3 sm:aspect-3/2 bg-white border border-pink-100 rounded-xl flex items-center justify-center mb-6">
              {/* Number Badge */}
              <div className="absolute -top-5 -left-5 w-16 h-16 rounded-full border-4 border-[#ed426e] bg-white flex items-center justify-center">
                <span className="text-lg font-bold text-gray-800">
                  {step.number}
                </span>
              </div>

              {/* Icon Placeholder */}
              <div className="">
                <Image
                  src={step.icon}
                  alt={`Step ${index + 1}`}
                  width={90}
                  height={90}
                  className="h-auto w-auto object-contain"
                />
              </div>
            </div>

            {/* Description Text */}
            <p className="text-center font-bold text-gray-900 text-lg  leading-snug">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
