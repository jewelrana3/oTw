import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function QuestionSection() {
  return (
    <>
      {" "}
      <section className="bg-[#f0f4f8] py-16 text-center">
        <h1 className="text-4xl font-bold text-[#1a1a2e] mb-4">
          Frequently asked <span className="text-[#f0306a]">questions</span>
        </h1>
        <p className="text-[#5f6368] text-lg">
          Everything you need to know about the product and billing.
        </p>
      </section>
      {/* question and answer items */}
      <div className="bg-[#f0f4f8] px-6 py-10">
        <Accordion className="max-w-2xl mx-auto">
          <AccordionItem
            value="free-trial"
            className="border-b border-[#f0306a]/30 py-2"
          >
            <AccordionTrigger className="text-[15px] font-bold text-[#1a1a2e] hover:no-underline hover:text-[#f0306a] [&>svg]:hidden [&[data-state=open]>span.icon]:opacity-100 group">
              Is there a free trial available?
              {/* <span className="icon ml-auto text-[#f0306a] text-xl font-light">
              &#8722;
            </span> */}
            </AccordionTrigger>
            <AccordionContent className="text-[#5f6368] text-sm leading-relaxed pb-4">
              Yes, you can try us for free for 30 days. If you want, we&apos;ll
              provide you with a free, personalized 30-minute onboarding call to
              get you up and running as soon as possible.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="plan-change"
            className="border-b border-[#f0306a]/30 py-2"
          >
            <AccordionTrigger className="text-[15px] font-bold text-[#1a1a2e] hover:no-underline hover:text-[#f0306a] [&>svg]:hidden">
              Can I change my plan later?
              {/* <span className="ml-auto text-[#f0306a] text-xl font-light">
                &#43;
              </span> */}
            </AccordionTrigger>
            <AccordionContent className="text-[#5f6368] text-sm leading-relaxed pb-4">
              Yes, you can upgrade or downgrade your plan at any time from your
              account dashboard. Changes take effect immediately.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
