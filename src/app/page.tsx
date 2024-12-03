// import Image from "next/image";

// export default function Home() {
//   return (
//     <main></main>
//   );
// }

import React from "react";
import Hero from "./Components/Hero";
import Work from "./Components/Work";

function page() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <Hero />
      <Work/>
    </div>
  );
}

export default page;
