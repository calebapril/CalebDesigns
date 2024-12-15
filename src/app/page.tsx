// import Image from "next/image";

// export default function Home() {
//   return (
//     <main></main>
//   );
// }

import React from "react";
import Hero from "./Components/Hero";
import Work from "./Components/Work";
import WhyUs from "./Components/WhyUs";
import OurServices from "./Components/OurServices";
import HappyClient from "./Components/HappyClient";
import Pricing from "./Components/Pricing";
import { Check } from "lucide-react";
import HowWeWork from "./Components/HowWeWork";
import Elevate from "./Components/Elevate";
import Footer from "./Components/Footer";

  const cardDetails = [
  {
    icon: <Check className="text-neutral-500 mt-1" size={15} />,
    text: "Custom Landing Page Design",
  },

  {
    icon: <Check className="text-neutral-500 mt-1" size={15} />,
    text: "Domain Purchase Included",
  },

  {
    icon: <Check className="text-neutral-500 mt-1" size={15} />,
    text: "Hosting & Maintenance Services",
  },

  {
    icon: <Check className="text-neutral-500 mt-1" size={15} />,
    text: "Integrated Contact Form",
  },

  {
    icon: <Check className="text-neutral-500 mt-1" size={15} />,
    text: "SSL Security Certificate",
  },

  {
    icon: <Check className="text-neutral-500 mt-1" size={15} />,
    text: "Mobile Responsive Design",
  },
];

function page() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <Hero />
      <Work/>
      <HowWeWork/>
      <OurServices/>
      <Pricing
      title="Custom Price"
      features={cardDetails}
      buttonText="Let&apos;s work together"
      />
      <HappyClient/>
      <WhyUs/>
      <Elevate/>
      <Footer/>
    </div>
  );
}

export default page;
