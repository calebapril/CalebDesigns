"use client"
import React from 'react'
import Slider from './Slider'
import Image from 'next/image'

const projects = [
  { id: 1, name: "Caleb", image: "/24-241323_chelsea-fc-and-nike-join-forces-to-unveil.jpg"},
  { id: 2, name: "Caleb", image: "/240506-drake-al-1156-0a35a0-710x473.jpg"},
  { id: 3, name: "Caleb", image: "/240506-drake-al-1156-0a35a0-710x473.jpg"},
  { id: 4, name: "Caleb", image: "/240506-drake-al-1156-0a35a0-710x473.jpg"},
  { id: 5, name: "Caleb", image: "/240506-drake-al-1156-0a35a0-710x473.jpg"},
  { id: 6, name: "Caleb", image: "/240506-drake-al-1156-0a35a0-710x473.jpg"},
];

function Work() {
  return (
    <div className='mt-[23px] px-4' id="work">
      <div className='max-w-7xl mx-auto'>
        <h2 className="text-3xl mb-8 text-white font-geist">
          My Work
        </h2>

        <div>
          <div className='lg:absolute relative md:left-0 md:right-0'>
            <Slider durationOnHover={295} gap={10}>
              {projects.map((project) => (
                <div key={project.id}>
                  <Image
                  width={700}
                  height={700}
                  src={project.image}
                  alt={project.name}
                  className='object-cover lg:h-[516px] sm:h-[400px]' />

                  <div className="relative z-10 mt-7 bottom-4">
                    <h3 className="text-sm text-neutral-400">{project.name}</h3>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work