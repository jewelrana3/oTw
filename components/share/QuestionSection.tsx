
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/demoData";

export default function QuestionSection() {
  return (
    <section className="bg-[#f0f4f8] rounded-2xl max-w-4xl mx-auto my-8">
      <div className=" py-16 px-4 text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          Frequently asked <span className="text-pink-500">questions</span>
        </h2>

        {/* Description */}
        <p className="mt-4 text-sm md:text-base text-black font-semibold leading-relaxed max-w-3xl mx-auto">
          Everything you need to know about the product and billing.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion>
          {faqData?.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="border-b border-pink-200 last:border-0 "
            >
              {/* The 'group' class is key here */}
              <AccordionTrigger className="hover:no-underline cursor-pointer group py-6 [&>svg]:hidden">
                <span className="text-[17px] font-bold text-[#1a1a2e] ">
                  {item.question}
                </span>
              </AccordionTrigger>

              <AccordionContent className="text-[#5f6368] ml-3 text-[15px] leading-relaxed pb-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
