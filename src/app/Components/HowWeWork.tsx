import React from 'react'

function HowWeWork() {
  return (
    <div className='lg:mt-[499px] pt-[19px] sm:pt-[40px] md:pt-[80px]'>
      <h2 className="text-2xl mb-4 text-white font-geist">
        How We Work
      </h2>
      <div>
        <p className="text-neutral-400 text-[14.2px] font-geist">
        Crafting Your Vision: From Discovery to Website Launch
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
        <div className="bg-[#141414] rounded-xl p-4 text-sm font-geist border border-neutral-800 text-white">
          <div className='flex items-center gap-x-2'>
            <h3 className="bg-neutral-700 rounded-full p-2 w-6 h-6 flex items-center justify-center">1</h3>
            <span>Unlock Your Vision in 15 Minutes: Schedule a Discovery Call</span>
          </div>

          <p className="mt-4 text-sm text-neutral-500">
            In just 15 minutes, we’ll explore your goals and discuss how our web design expertise can bring your vision to life. Book your call today!
          </p>
        </div>

        <div className='bg-[#141414] rounded-xl p-4 text-sm font-geist border border-neutral-800 text-white'>
        <div className='flex items-center gap-x-2'>
        <h3 className="bg-neutral-700 rounded-full p-2 w-6 h-6 flex items-center justify-center">2</h3>
        <span>Kickstart Your Web Presence: Initial Demo</span>
        </div>

        <p className="mt-4 text-sm text-neutral-500">
        Get a sneak peek of how a custom website can elevate your brand. In this quick demo, we’ll show you the possibilities and guide you toward your digital success.
          </p>
        </div>

        <div className="bg-[#141414] rounded-xl p-4 text-sm font-geist border border-neutral-800 text-white">
          <div className="flex items-center gap-x-2">
          <h3 className="bg-neutral-700 rounded-full p-2 w-6 h-6 flex items-center justify-center">3</h3>
          <span>Test, Optimize, Deploy: Your Website’s Path to Launch</span>
          </div>

          <p className="mt-4 text-sm text-neutral-500">
          Test, Optimize, Deploy: Your Website’s Path to Launch ensures a flawless launch. We test every feature, optimize performance, and deploy with confidence, setting your site up for success.
          </p>
        </div>

        <div className="bg-[#141414] rounded-xl p-4 text-sm font-geist border border-neutral-800 text-white">
          <div className="flex items-center gap-x-2">
          <h3 className="bg-neutral-700 rounded-full p-2 w-6 h-6 flex items-center justify-center">4</h3>
          <span>Why Choose Us?</span>
          </div>

          <p className="mt-4 text-sm text-neutral-500">
          At Caleb Designs, we’re more than just a web design agency—we’re your dedicated partner in bringing your online vision to life.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HowWeWork