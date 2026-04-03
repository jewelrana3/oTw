import Image from "next/image";
import one from "@/public/still/one.png";
import two from "@/public/still/two.png";
import three from "@/public/still/three.png";

const SupportCard = () => {
  return (
    <div className="flex items-center justify-center p-8 bg-[#f0f4f8] rounded-2xl max-w-4xl mx-auto  mb-16">
      <div className="w-full px-8 py-12 text-center">
        {/* Avatar Stack */}
        <div className="flex justify-center -space-x-3 mb-8">
          <Image
            className="inline-block h-14 w-14 rounded-full ring-4 ring-white object-cover"
            src={one}
            alt="Team member 1"
          />
          <Image
            className="z-10 inline-block h-16 w-16 rounded-full ring-4 ring-white object-cover transform -translate-y-1"
            src={two}
            alt="Team member 2"
          />
          <Image
            className="inline-block h-14 w-14 rounded-full ring-4 ring-white object-cover"
            src={three}
            alt="Team member 3"
          />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Still have Questions?
        </h3>
        <p className="text-gray-500 text-lg mb-8">
          Can't find the answer you're looking for? Please chat to our friendly
          team.
        </p>

        {/* Button */}
        <button className="bg-[#ed426e] hover:bg-[#d63a62] text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default SupportCard;
