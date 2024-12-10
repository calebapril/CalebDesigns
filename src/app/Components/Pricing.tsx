import { MoveRight } from 'lucide-react'
import React from 'react'
import { PiSparkleFill } from 'react-icons/pi'

function Pricing({features, buttonText, title}:{
  features:[]; buttonText:string; title:string;
}) {
  return (
    <div className='mt-8'>
      <div className='max-w-7xl text-white font-geist'>
        <h2 className="text-2xl mb-4 text-white font-geist">
          Pricing
        </h2>
      </div>
      <div>
        <p className="text-neutral-400 text-[14.2px] font-geist">
          Our diverse plans offer a wide range of benefits to meet your special needs -- whether you prefer a flat-price website, a subscription-product design, or a combination of both.
        </p>
      </div>

      <div className='grid sm:grid-cols-2 gap-4 mt-9'>
        <div className='border border-neutral-800 rounded-xl p-4 bg-[#141414]'>
          <div className='flex items-center gap-x-2 text-white'>
            <PiSparkleFill className='text-white'/>
            <span>0</span>
            <MoveRight/>
            <span>1</span>
            <span>Design</span>
          </div>

          <div>
            <h2 className='text-2xl font-geist text-neutral-200 my-2'>
              Hello
            </h2>

            <p className="text-sm text-neutral-400 my-2">
              Your go-to-solution for whatever you may need -- we design everything!
            </p>
          </div>

          <div className='border border-dashed mt-4 border-neutral-800'/>
          
          <div className='border-dashed mt-4 border-neutral-800' >
            {
              features.map((item, idx) => (
                <div className='flex items-center py-0.5 gap-x-3 text-neutral-400 text-sm mt-2'>
                  {item.icon}
                  {item.text}
                </div>
              ))
            }
          </div>

          <div className='border border-dashed mt-4 border-neutral-800'/>

<button className='w-full mt-5 h-[40px] rounded-3xl bg-neutral-700 text-white'>
  Share your vision
</button>

        <div className='border border-neutral-800 rounded-xl p-5 bg-[#141414]'></div>
        </div>
      </div>
    </div>
  )
}

export default Pricing