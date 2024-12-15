// import { CalendarDays, CircleCheck, Figma, MoveRight, Zap } from 'lucide-react'
// import React from 'react'
// import { PiSparkleFill } from 'react-icons/pi'

// let cardDesign = [
//   {
//     icon: <CalendarDays className="text-neutral-500 mt-1" size={15} />,
//     text: "Trial week -- no strings attached",
//   },

//   {
//     icon: <Figma className="text-neutral-500 mt-1" size={15} />,
//     text: "Best in class design via Figma",
//   },

//   {
//     icon: <CircleCheck className="text-neutral-500 mt-1" size={15} />,
//     text: "Unlimited requests and revision",
//   },

//   {
//     icon: <CircleCheck className="text-neutral-500 mt-1" size={15} />,
//     text: "Frequent updates",
//   },

//   {
//     icon: <CircleCheck className="text-neutral-500 mt-1" size={15} />,
//     text: "Pause or Cancel anytime",
//   },

//   {
//     text: "Let&apos;s Work Together",
//   },
// ];

// function Pricing({features, buttonText, title}:{
//   features:[]; buttonText:string; title:string;
// }) {
//   return (
//     <div className='mt-8'>
//       <div className='max-w-7xl text-white font-geist'>
//         <h2 className="text-2xl mb-4 text-white font-geist">
//           Pricing
//         </h2>
//       </div>
//       <div>
//         <p className="text-neutral-400 text-[14.2px] font-geist">
//           Our diverse plans offer a wide range of benefits to meet your special needs -- whether you prefer a flat-price website, a subscription-product design, or a combination of both.
//         </p>
//       </div>

//       <div className='grid sm:grid-cols-2 gap-4 mt-9'>
//         <div className='border border-neutral-800 rounded-xl p-4 bg-[#141414]'>
//           <div className='flex items-center gap-x-2 text-white'>
//             <PiSparkleFill className='text-white'/>
//             <span>0</span>
//             <MoveRight/>
//             <span>1</span>
//             <span>Design</span>
//           </div>

//           <div>
//             <h2 className='text-2xl font-geist text-neutral-200 my-2'>
//               Hello
//             </h2>

//             <p className="text-sm text-neutral-400 my-2">
//               Your go-to-solution for whatever you may need -- we design everything!
//             </p>
//           </div>

//           <div className='border border-dashed mt-4 border-neutral-800'/>
          
//           <div className='border-dashed mt-4 border-neutral-800' >
//             {
//               features.map((item, idx) => (
//                 <div className='flex items-center py-0.5 gap-x-3 text-neutral-400 text-sm mt-2'>
//                   {item.icon}
//                   {item.text}
//                 </div>
//               ))
//             }
//           </div>

//           <div className='border border-dashed mt-4 border-neutral-800'/>

// <button className='w-full mt-5 h-[40px] rounded-3xl bg-neutral-700 text-white'>
//   Share your vision
// </button>


//         </div>

//         <div className='border border-neutral-800 rounded-xl p-5 bg-[#141414]'>
//           <div className="flex justify-between items-center">
//             <div className="flex items-center gap-x-2">
//               <Zap className='text-white'/>
//               <span className='text-white'>Unlimited</span>
//             </div>

//             <div className="text-xs px-1 bg-neutral-800 rounded-sm p-0.5 text-white font-geist">
//               <button>Subscription</button>
//             </div>
//           </div>

//           <div className="my-2">
//             <h2 className="text-2xl font-geist text-neutral-200">
//               $4.499/
//               <span className='text-sm'>m</span>
//             </h2>
//             <p className="text-sm text-neutral-400 my-2">
//               The ideal solution for those in need of design services of any type and scale.
//             </p>
//           </div>

//           <div className="border border-dashed mt-3 border-neutral-800"/>
//           {cardDesign.slice(0, -1).map((item, idx) => (
//             <div className="flex items-center py-0.5 gap-x-3 text-neutral-400 text-sm mt-2">
//               {item.icon}
//               <span>{cardDesign.length - 1 && item.text}</span>
//             </div>
//           ))}

//         <div className="border border-dashed mt-12 border-neutral-800"/>

//         <button className={`w-full mb-auto h-[40px] mt-5 rounded-3xl text-black ${"bg-white"}`}>
//           {buttonText}
//         </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Pricing














import { Check, MoveRight, Zap } from 'lucide-react';
import React from 'react';
import { PiSparkleFill } from 'react-icons/pi';

// Use 'const' instead of 'let' for 'cardDesign' since it's not reassigned
const cardDesign = [
  {
    icon: <Check className="text-neutral-500 mt-1" size={15} />,
    text: "All Starter Package Features",
  },
  {
    icon: <Check className="text-neutral-500 mt-1" size={15} />,
    text: "E-commerce/Booking/Marketplace Integration",
  },
  {
    icon: <Check className="text-neutral-500 mt-1" size={15} />,
    text: "Payment Integration Solutions",
  },
  {
    icon: <Check className="text-neutral-500 mt-1" size={15} />,
    text: "Advanced Performance Optimization",
  },
  {
    icon: <Check className="text-neutral-500 mt-1" size={15} />,
    text: "24/7 Dedicated Support",
  },
  {
    icon: <Check className="text-neutral-500 mt-1" size={15} />,
    text: "Training Videos for Self-Management",
  },
  {
    icon: <Check className="text-neutral-500 mt-1" size={15} />,
    text: "Email Setup and Support",
  },
  {
    text: "Let's Work Together",
  },
];

function Pricing({
  features,
  buttonText,
}: {
  features: { icon?: JSX.Element; text: string }[]; // Specify type for 'features'
  buttonText: string;
  title: string;
}) {
  return (
    <div className="mt-8">
      <div className="max-w-7xl text-white font-geist">
        <h2 className="text-2xl mb-4 text-white font-geist">Pricing</h2>
      </div>
      <div>
        <p className="text-neutral-400 text-[14.2px] font-geist">
          Our diverse plans offer a wide range of benefits to meet your special needs -- whether
          you prefer a flat-price website, a subscription-product design, or a combination of both.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mt-9">
        <div className="border border-neutral-800 rounded-xl p-4 bg-[#141414]">
          <div className="flex items-center gap-x-2 text-white">
            <PiSparkleFill className="text-white" />
            <MoveRight />
            <span>$700/</span>
            <span>1 year hosting included</span>
          </div>

          <div>
            <h2 className="text-2xl font-geist text-neutral-200 my-2">Starter Launch Package</h2>

            <p className="text-sm text-neutral-400 my-2">
            Kickstart your online presence with a professionally designed landing page, complete with all essentials.
            </p>
          </div>

          <div className="border border-dashed mt-4 border-neutral-800" />

          <div className="border-dashed mt-4 border-neutral-800">
            {features.map((item, idx) => (
              <div
                key={idx} // Added 'key' prop
                className="flex items-center py-0.5 gap-x-3 text-neutral-400 text-sm mt-2"
              >
                {item.icon}
                {item.text}
              </div>
            ))}
          </div>

          <div className="border border-dashed mt-4 border-neutral-800" />

          <button className="w-full mt-5 h-[40px] rounded-3xl bg-neutral-700 text-white">
            Share your vision
          </button>
        </div>

        <div className="border border-neutral-800 rounded-xl p-5 bg-[#141414]">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-2">
              <Zap className="text-white" />
              <span className="text-white">Retainer</span>
            </div>

            <div className="text-xs px-1 bg-neutral-800 rounded-sm p-0.5 text-white font-geist">
              <button>Subscription</button>
            </div>
          </div>

          <div className="my-2">
            <h2 className="text-2xl font-geist text-neutral-200">
              $4.499/<span className="text-sm">m</span>
            </h2>
            <p className="text-sm text-neutral-400 my-2">
              The ideal solution for those in need of design services of any type and scale.
            </p>
          </div>

          <div className="border border-dashed mt-3 border-neutral-800" />
          {cardDesign.slice(0, -1).map((item, idx) => (
            <div
              key={idx} // Added 'key' prop
              className="flex items-center py-0.5 gap-x-3 text-neutral-400 text-sm mt-2"
            >
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}

          <div className="border border-dashed mt-12 border-neutral-800" />

          <button
            className={`w-full mb-auto h-[40px] mt-5 rounded-3xl text-black ${'bg-white'}`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;