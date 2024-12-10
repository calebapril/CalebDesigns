// import Image from "next/image";

// export default function Home() {
//   return (
//     <main></main>
//   );
// }

import React from "react";
import Hero from "./Components/Hero";
import Work from "./Components/Work";
import Image from "next/image";
import WhyUs from "./Components/WhyUs";
import OurServices from "./Components/OurServices";
import HappyClient from "./Components/HappyClient";
import Pricing from "./Components/Pricing";
import { BsFillHeartFill } from "react-icons/bs";
import { CircleCheck, Figma, Framer, Palette } from "lucide-react";

let cardDetails = [
  {
    icon: <BsFillHeartFill className="text-neutral-500 mt-1" size={15} />,
    text: "Brand Identity Design",
  },

  {
    icon: <Figma className="text-neutral-500 mt-1" size={15} />,
    text: "Product and Website Design",
  },

  {
    icon: <Framer className="text-neutral-500 mt-1" size={15} />,
    text: "Framer Development",
  },

  {
    icon: <Palette className="text-neutral-500 mt-1" size={15} />,
    text: "Graphic and 3D Design",
  },

  {
    icon: <CircleCheck className="text-neutral-500 mt-1" size={15} />,
    text: "Unlimited revisions",
  },

  {
    icon: <CircleCheck className="text-neutral-500 mt-1" size={15} />,
    text: "Frequent updates",
  },
];

function page() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <Hero />
      {/* <Work/> */}
      <WhyUs/>
      <OurServices/>
      <HappyClient/>
      <Pricing
      title={"Custom Price"}
      features={cardDetails}
      buttonText="Let&apos;s work together"
      />
    </div>
  );
}

export default page;
