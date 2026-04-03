import Image from "next/image";
import one from "@/public/ours-clients/one.png";
import two from "@/public/ours-clients/two.png";
import three from "@/public/ours-clients/three.png";

const testimonials = [
  {
    name: "Jenny Wilson",
    image: one,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
  },
  {
    name: "Esther Howard",
    image: two,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
    highlight: true,
  },
  {
    name: "Robert Fox",
    image: three,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
  },
];

export default function TestimonialSection() {
  return (
    <>
      <div className="bg-white py-16 text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          Check Our Clients <span className="text-pink-500">Review</span>
        </h2>

        {/* Description */}
        <p className="mt-4 text-sm md:text-base text-black font-semibold leading-relaxed max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap- mb-32">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className={`rounded-xl p-5 shadow-sm transition-all duration-300 text-black ${
              item.highlight ? "bg-white" : "bg-[#F6F6F6]"
            }`}
          >
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <Image
                src={item.image}
                alt={item.name}
                width={48}
                height={48}
                className="rounded-full object-cover w-24 h-24"
                sizes="100"
              />

              {/* Content */}
              <div>
                <h3 className="font-semibold text-sm  mb-1">{item.name}</h3>

                <p className="text-xs  leading-relaxed mb-3">{item.text}</p>

                {/* Stars */}
                <div className="flex gap-1 text-orange-400 text-sm">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
