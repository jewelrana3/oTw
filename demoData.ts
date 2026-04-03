export const plans = [
  {
    name: "Freebie",
    price: "0",
    desc: "Ideal for individuals who need quick access to basic features.",
    features: [
      { text: "20,000+ of PNG & SVG graphics", included: true },
      { text: "Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: false },
      { text: "Unlimited Sharing", included: false },
      { text: "Upload graphics & video in up to 4k", included: false },
      { text: "Unlimited Projects", included: false },
      { text: "Instant Access to our design system", included: false },
      { text: "Create teams to collaborate on designs", included: false },
    ],
    highlight: false,
  },
  {
    name: "Professional",
    price: "25",
    desc: "Ideal for individuals who who need advanced features and tools for client work.",
    features: [
      { text: "20,000+ of PNG & SVG graphics", included: true },
      { text: "Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: true },
      { text: "Unlimited Sharing", included: true },
      { text: "Upload graphics & video in up to 4k", included: true },
      { text: "Unlimited Projects", included: true },
      { text: "Instant Access to our design system", included: false },
      { text: "Create teams to collaborate on designs", included: false },
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "100",
    desc: "Ideal for businesses who need personalized services and security for large teams.",
    features: [
      { text: "20,000+ of PNG & SVG graphics", included: true },
      { text: "Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: true },
      { text: "Unlimited Sharing", included: true },
      { text: "Upload graphics & video in up to 4k", included: true },
      { text: "Unlimited Projects", included: true },
      { text: "Instant Access to our design system", included: true },
      { text: "Create teams to collaborate on designs", included: true },
    ],
    highlight: false,
  },
];

export const tools = [
  { image: "/our-tools/two.png" },
  { image: "/our-tools/one.png" },
  { image: "/our-tools/three.png" },
  { image: "/our-tools/five.png" },
  { image: "/our-tools/four.png" },
  { image: "/our-tools/one.png" },
  { image: "/our-tools/five.png" },
  { image: "/our-tools/four.png" },
  { image: "/our-tools/one.png" },
];

export const faqData = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "personalized 30-minute onboarding call to get you up and running as soon as", // Add answer here if available
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "personalized 30-minute onboarding call to get you up and running as soon as", // Add answer here if available
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "personalized 30-minute onboarding call to get you up and running as soon as", // Add answer here if available
  },
  {
    question: "How does billing work?",
    answer:
      "personalized 30-minute onboarding call to get you up and running as soon as", // Add answer here if available
  },
  {
    question: "How do I change my account email?",
    answer:
      "personalized 30-minute onboarding call to get you up and running as soon as", // Add answer here if available
  },
];



import one from "@/public/our-services/one.png";
import two from "@/public/our-services/two.png";
import three from "@/public/our-services/three.png";
import four from "@/public/our-services/four.png";
import five from "@/public/our-services/five.png";
import six from "@/public/our-services/six.png";
export const services = [
  {
    title: "Manage Property Listings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: one, // Replace with your actual icon paths
    border: false,
  },
  {
    title: "Manage Customer Bookings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: two,
    border: true,
  },
  {
    title: "Schedule House Cleaning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: three,
    border: true,
  },
  {
    title: "Monitor Guest Reviews",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: six,
    border: true,
  },
  {
    title: "Track & Report Expenses",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: five,
    border: true,
  },
  {
    title: "Guest Inquiry & Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: four,
    border: true,
  },
];
