import { PlusCircle, MinusCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function QuestionSection() {
  return (
    <section className="bg-[#f0f4f8] py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Accordion>
          <AccordionItem value="item-1" className="border-b border-pink-200">
            {/* The 'group' class is key here */}
            <AccordionTrigger className="hover:no-underline group py-6 [&>svg]:hidden">
              <span className="text-[17px] font-bold text-[#1a1a2e] text-left">
                Is there a free trial available?
              </span>
            </AccordionTrigger>

            <AccordionContent className="text-[#5f6368] text-[15px] leading-relaxed pb-6">
              Yes, you can try us for free for 30 days. We also provide a
              personalized onboarding call to help you get started.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-b border-pink-200">
            <AccordionTrigger className="hover:no-underline group py-6 [&>svg]:hidden">
              <span className="text-[17px] font-bold text-[#1a1a2e] text-left">
                Can I change my plan later?
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-[#5f6368] text-[15px] leading-relaxed pb-6">
              Yes, you can upgrade or downgrade your plan at any time from your
              dashboard.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
