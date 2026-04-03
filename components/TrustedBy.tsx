import one from "@/public/trusted/one.png";
import two from "@/public/trusted/two.png";
import four from "@/public/trusted/four.png";
import five from "@/public/trusted/five.png";
import six from "@/public/trusted/six.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const allImages = [four, one, two, four, five, six];

export default function TrustedBy() {
  return (
    <>
      <div className="w-full text-center my-10">
        <p className="text-gray-900 font-bold text-xl">
          Trusted by leaders in 50+ industries
        </p>
      </div>

      <div className="bg-[#F6F6F6] py-6 w-72 sm:w-160 md:w-200 lg:w-250 xl:w-full mx-auto">
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          /* The gap is handled internally so there's no "jump" at the end */
        >
          {allImages.map((img, index) => (
            <div key={index} className="mx-10 flex justify-center">
              <Image
                src={img}
                alt={`Logo ${index}`}
                className="h-12 w-24 object-contain"
                width={96}
                height={48}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
}
