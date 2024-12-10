import Image from 'next/image'
import React from 'react'
import { PiSparkleFill } from 'react-icons/pi'

function WhyUs() {
  return (
    <div className='lg:mt-[499px] pt-[19px] sm:pt-[40px] md:pt-[80px]'>
      <section className='max-w-7xl mx-auto'>
        <h2 className="text-2xl text-white font-geist">Why Us</h2>
        <div>
          <p className="text-neutral-400 text-[14.2px] mt-3 font-geist">
            Complicated problems don&apos;t call for complex interfaces -- we craft user-friendly and straightforward interfaces that simplify even the most sophisticated issues.
          </p>
        </div>

        <div>
          <div className='flex items-center gap-x-2 mt-3'>
            <div className='bg-neutral-900 w-fit p-2.5 rounded-lg border border-neutral-700 '>
              <PiSparkleFill className='text-neutral-500' />
            </div>
            <p className="text-white text-sm font-geist">
              Tailored design solutions that meet your specific needs and goals.
            </p>
          </div>

          <div className='flex items-center gap-x-2 mt-3'>
            <div className='bg-neutral-900 w-fit p-2.5 rounded-lg border-neutral-700 border'>
              <PiSparkleFill className='text-neutral-500' />
            </div>
            <p className="text-white text-sm font-geist">
              Rigorous quality checks and revisions to ensure the final deliverables meet high standards. 
            </p>
          </div>

          <div className='flex items-center gap-x-2 mt-3'>
            <div className='bg-neutral-900 w-fit p-2.5 rounded-lg border-neutral-700 border'>
              <PiSparkleFill className='text-neutral-500' />
            </div>
            <p className="text-white text-sm font-geist">
              Regular updates, clear communication, and transparency throughout the project lifecycle. 
            </p>
          </div>
        </div>

        <div>
          <p className="text-neutral-400 text-[14.2px] mt-3 font-geist">
            Your product is treated as ours with primary goal of your uncompromised satisfaction -- your success equals our success.
          </p>
        </div>

        <div className='flex items-center gap-x-6 mt-7'>
          <div className='flex items-center -space-x-4'>
            <Image
            src={"https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1442&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            width="700"
            height="700"
            className='w-10 h-10 rounded-full object-cover'
            alt=''/>

            <Image
            src={"https://images.unsplash.com/photo-1492462543947-040389c4a66c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"}
            width="700"
            height="700"
            className='w-10 h-10 rounded-full object-cover'
            alt=''/>
          </div>

          <div className='text-stone-500'>
            <p>Caleb Designs</p>
            <p>Sogo & Caleb</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhyUs