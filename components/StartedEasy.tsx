import { UserPlus, Users, Headset } from "lucide-react";

const steps = [
  {
    number: "01",
    text: "Add requirements & sign up today",
    icon: <UserPlus size={48} className="text-[#331a1d]" />,
    plusColor: "text-[#ed426e]",
  },
  {
    number: "02",
    text: "Connect with your CSM &  onboarding team",
    icon: <Users size={48} className="text-[#331a1d]" />,
    plusColor: "text-[#ed426e]",
  },
  {
    number: "03",
    text: "Meet your STR Assistant next week",
    icon: <Headset size={48} className="text-[#331a1d]" />,
    plusColor: "text-[#ed426e]",
  },
];

export default function StartedEasy() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
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
              <div className="relative scale-125">
                {/* Lucide icons used here - you can replace with your custom SVGs */}
                {step.icon}
                <span
                  className={`absolute -top-1 -right-3 font-bold text-2xl ${step.plusColor}`}
                >
                  +
                </span>
              </div>
            </div>

            {/* Description Text */}
            <p className="text-center font-bold text-gray-900 text-lg max-w-[200px] leading-snug">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
