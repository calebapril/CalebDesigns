import React from 'react'
import { CookingPot, Dock, Framer, MonitorDot, Palette } from 'lucide-react'
import { BsFillHeartFill } from 'react-icons/bs'

function OurServices() {
  return (
    <div className='mt-10'>
      <div className='max-w-7xl mx-auto'>
        <h2 className="text-2xl mb-4 text-white font-geist">
          Our Services
        </h2>
        <div>
          <p className="text-neutral-400 text-[14.2px] font-geist">
            Ever stumble upon a design that just clicks? It doesn&apos;t need an explanation; it resonates, like it was made to fit perfectly into your world. 
          </p>
          <p className="text-neutral-400 text-[14.2px] mt-3 font-geist">
            We strive to create solutions that spark this sense of connection, offering a comprehensive range of design services that cover everything from concept to completion.
          </p>
        </div>

        <div className='grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10'>
          <div className="h-[86px] bg-neutral-900 rounded-xl p-3 text-sm font-geist border border-neutral-800 text-white">
            <BsFillHeartFill className='text-neutral-500 mt-1' size={15}/>
            <p className="mt-4">
              Creating impactful brand identities.
            </p>
          </div>

          <div className="h-[86px] bg-neutral-900 rounded-xl p-3 text-sm font-geist border border-neutral-800 text-white">
            <MonitorDot className='text-neutral-500 mt-1' size={15}/>
            <p className="mt-4">
              Unforgettable brand identities. 
            </p>
          </div>

          <div className="h-[86px] bg-neutral-900 rounded-xl p-3 text-sm font-geist border border-neutral-800 text-white">
            <Dock className='text-neutral-500 mt-1' size={15}/>
            <p className="mt-4">
              Innovative, user-focused websites.
            </p>
          </div>

          <div className="h-[86px] bg-neutral-900 rounded-xl p-3 text-sm font-geist border border-neutral-800 text-white">
            <Framer className='text-neutral-500 mt-1' size={15}/>
            <p className="mt-4">
              Seamless experiences.
            </p>
          </div>

          <div className="h-[86px] bg-neutral-900 rounded-xl p-3 text-sm font-geist border border-neutral-800 text-white">
            <Palette className='text-neutral-500 mt-1' size={15}/>
            <p className="mt-4">
              Striking visuals, reimagined.
            </p>
          </div>

          <div className="h-[86px] bg-neutral-900 rounded-xl p-3 text-sm font-geist border border-neutral-800 text-white">
            <CookingPot className='text-neutral-500 mt-1' size={15}/>
            <p className="mt-4">
              Compelling, investor-ready decks.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices