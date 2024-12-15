import { MoveRight } from 'lucide-react'
import React from 'react'

function Elevate() {
  return (
    <div className='max-w-7xl mx-auto mt-12'>
      <h1 className="text-2xl text-white font-geist">
        Shift your idea from 0 → 1 with Caleb Designs.
      </h1>

      <div className='flex justify-between items-center my-2 h-[72px]'>
        <div className="flex space-x-2 font-geist">
          <button className="text-sm py-1 w-[121px] h-[40px] bg-white text-neutral-800 rounded-full">Schedule Call</button>

          <button className="text-sm py-1 w-[100px] h-[40px] bg-neutral-800 text-stone-300 rounded-full">View Work</button>
        </div>
      </div>

      <div className="flex items-center gap-x-2 text-neutral-400">
        <p>Or drop me an email</p>
        <span>
          <MoveRight/>
        </span>
        <span className='text-neutral-200'>Calebnyong02@gmail.com</span>
      </div>
    </div>
  )
}

export default Elevate