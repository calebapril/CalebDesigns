import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="fixed left-0 right-0 top-0 z-20 w-full">
      <div className="px-4  backdrop-blur-sm bg-[#0f0f0f]/25 w-full max-w-2xl mx-auto rounded-b-3xl">
        <div className="flex justify-between items-center h-[72px]">
          <div className="flex-shrink-0">
            {/* <Image
          src={''} 
          className="sm:w-36 sm:36 w-20 h-20 transition-all ease-in-out duration-150 object-cover"
          width={600} 
          height={600} 
          alt="logo" /> */}

            <Image
              src={"/calebdesigns.png"}
              className="sm:w-36 sm:36 w-36 h-20 transition-all ease-in-out duration-150 object-none"
              alt="logo"
              width="65"
              height="50"
            />
          </div>
          <div className="flex space-x-4 font-geist">
            <button className="text-sm py-1 w-[100px] h-[40px]  bg-neutral-800 text-stone-300 rounded-full">
              View Work
            </button>
            <button className="bg-white font-geist w-[121px] h-[40px] text-neutral-800 rounded-full">
              Schedule Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
