import { Github } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='flex justify-between text-neutral-500 mt-16 mb-5 font-geist text-sm'>
      <p className="text-sm">© Caleb Designs {new Date().getFullYear()}</p>

      <div className="inline-flex animate-shine bg-[linear-gradient(110deg,#414141,45%,#fff,55%,#414141)] bg-[length:200%_100%] bg-clip-text font-medium text-transparent font-geist gap-x-2 text-sm items-center">
        <Image
        className='w-6 h-6 border border-neutral-700 rounded-full object-cover'
        width={499}
        height={600}
        alt='user'
        src="https://images.unsplash.com/photo-1511551203524-9a24350a5771?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8"/>
        Caleb Designs
      </div>

      <div className='flex items-center gap-x-2'>
        <Github size={14} />
        <a
    href="https://github.com/calebapril/"
    target="_blank" 
    rel="noopener noreferrer"
  >
        Github
        </a>
      </div>
    </div>
  )
}

export default Footer