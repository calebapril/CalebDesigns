// import Image from "next/image";

// export default function Home() {
//   return (
//     <main></main>
//   );
// }
// Don't touch this code..pls
// import React from "react";
// import Hero from "./Components/Hero";
// import Work from "./Components/Work";
// import WhyUs from "./Components/WhyUs";
// import OurServices from "./Components/OurServices";
// import HappyClient from "./Components/HappyClient";
// import Pricing from "./Components/Pricing";
// import { Check } from "lucide-react";
// import HowWeWork from "./Components/HowWeWork";
// import Elevate from "./Components/Elevate";
// import Footer from "./Components/Footer";

//   const cardDetails = [
//   {
//     icon: <Check className="text-neutral-500 mt-1" size={15} />,
//     text: "Custom Landing Page Design",
//   },

//   {
//     icon: <Check className="text-neutral-500 mt-1" size={15} />,
//     text: "Domain Purchase Included",
//   },

//   {
//     icon: <Check className="text-neutral-500 mt-1" size={15} />,
//     text: "Hosting & Maintenance Services",
//   },

//   {
//     icon: <Check className="text-neutral-500 mt-1" size={15} />,
//     text: "Integrated Contact Form",
//   },

//   {
//     icon: <Check className="text-neutral-500 mt-1" size={15} />,
//     text: "SSL Security Certificate",
//   },

//   {
//     icon: <Check className="text-neutral-500 mt-1" size={15} />,
//     text: "Mobile Responsive Design",
//   },
// ];

// function page() {
//   return (
//     <div className="max-w-2xl mx-auto px-4">
//       <Hero />
//       <Work/>
//       <HowWeWork/>
//       <OurServices/>
//       <Pricing
//       title="Custom Price"
//       features={cardDetails}
//       buttonText="Let&apos;s work together"
//       />
//       <HappyClient/>
//       <WhyUs/>
//       <Elevate/>
//       <Footer/>
//     </div>
//   );
// }

// export default page;

// Don't touch this code..pls














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
import Script from 'next/script';

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

export default function Home() {
  // Define structured data for your web agency
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CalebDesign",
    "url": "https://calebdesigns.vercel.app/", 
    "logo": "/calebdesigns.png",
    "description": "Caleb Designs is a web design agency specializing in building stunning, responsive websites for startup businesses in africa.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+2347032661150",
      "contactType": "customer service",
      "areaServed": "NG",
      "availableLanguage": "English"
    },
    // "sameAs": [
    //   "https://www.facebook.com/calebdesign",
    //   "https://www.instagram.com/calebdesign",
    //   "https://twitter.com/calebdesign"
    // ]
  };

  return (
    <>
      {/* Add JSON-LD structured data to the page */}
      <Script
        type="application/ld+json"
        id="structured-data"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Your agency's homepage content */}
      {/* <header>
        <h1>Welcome to CalebDesign - Your Trusted Web Design Agency</h1>
        <p>We specialize in creating stunning, responsive websites for businesses.</p>
      </header> */}

      {/* Additional content of your homepage (portfolio, contact section, etc.) */}
      <div className="max-w-2xl mx-auto px-4">
        <Hero />
        <Work />
        <HowWeWork />
        <OurServices />
        <Pricing
          title="Custom Price"
          features={cardDetails}
          buttonText="Let&apos;s work together"
        />
        <HappyClient />
        <WhyUs />
        <Elevate />
        <Footer />
      </div>
    </>
  );
}
