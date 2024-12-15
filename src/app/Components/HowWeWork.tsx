import React from 'react'

function HowWeWork() {
  return (
    <div className='max-w-7xl mt-9'>
      <h2 className="text-2xl mb-4 text-white font-geist">
        How We Work
      </h2>
      <div>
        <p className="text-neutral-400 text-[14.2px] font-geist">
          Discover how our bullet-proof collaboration process takes your pr from 0 to 1, ensuring your satisfaction every step of the way.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
        <div className="bg-[#141414] rounded-xl p-4 text-sm font-geist border border-neutral-800 text-white">
          <div className='flex items-center gap-x-2'>
            <h3 className="bg-neutral-700 rounded-full p-2 w-6 h-6 flex items-center justify-center">1</h3>
            <span>Have a meeting</span>
          </div>

          <p className="mt-4 text-sm text-neutral-500">
            We&apos;ll have a quick meeting where we&apos;ll discuss your ideas and how we can help you achieve them.
          </p>
        </div>

        <div className='bg-[#141414] rounded-xl p-4 text-sm font-geist border border-neutral-800'>
        <div className='flex items-center gap-x-2'>
        <h3 className="bg-neutral-700 rounded-full p-2 w-6 h-6 flex items-center justify-center">2</h3>
        <span>Research and Preparation</span>
        </div>

        <p className="mt-4 text-sm text-neutral-500">
            We&apos;ll have a quick meeting where we&apos;ll discuss your ideas and how we can help you achieve them.
          </p>
        </div>

        <div className="bg-[#141414] rounded-xl p-4 text-sm font-geist border border-neutral-800">
          <div className="flex items-center gap-x-2">
          <h3 className="bg-neutral-700 rounded-full p-2 w-6 h-6 flex items-center justify-center">3</h3>
          <span>Delivery</span>
          </div>

          <p className="mt-4 text-sm text-neutral-500">
            We&apos;ll have a quick meeting where we&apos;ll discuss your ideas and how we can help you achieve them.
          </p>
        </div>

        <div className="bg-[#141414] rounded-xl p-4 text-sm font-geist border border-neutral-800">
          <div className="flex items-center gap-x-2">
          <h3 className="bg-neutral-700 rounded-full p-2 w-6 h-6 flex items-center justify-center">4</h3>
          <span>Delivery</span>
          </div>

          <p className="mt-4 text-sm text-neutral-500">
            We&apos;ll have a quick meeting where we&apos;ll discuss your ideas and how we can help you achieve them.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HowWeWork