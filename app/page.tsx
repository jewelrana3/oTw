import WhyChooseUs from "@/components/ChooseUs";
import HeroSection from "@/components/HeroSection";
import TestimonialSection from "@/components/OurClients";
import ServicesSection from "@/components/OurServies";
import OurTools from "@/components/OurTools";
import Pricing from "@/components/Pricing";
import QuestionSection from "@/components/share/QuestionSection";
import StartedEasy from "@/components/StartedEasy";
import StillHaveQuestion from "@/components/StillHaveQuestion";
import React from "react";

export default function page() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <Pricing />
      <OurTools />
      <StartedEasy />
      <WhyChooseUs />
      <TestimonialSection />
      <QuestionSection />
      <StillHaveQuestion />
    </>
  );
}
