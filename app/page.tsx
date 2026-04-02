import TestimonialSection from "@/components/OurClients";
import ServicesSection from "@/components/OurServies";
import Pricing from "@/components/Pricing";
import QuestionSection from "@/components/share/QuestionSection";
import StillHaveQuestion from "@/components/StillHaveQuestion";
import React from "react";

export default function page() {
  return (
    <>
      <ServicesSection />
      <Pricing />
      <TestimonialSection />
      <QuestionSection />
      <StillHaveQuestion />
    </>
  );
}
