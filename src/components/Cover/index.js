import React from 'react'
import Image from 'next/image'

export default function index({src}) {
  return (
    <div className='w-full mx-auto'>
        <div className="w-full mb-10 mx-auto">
          <Image 
            src={src}
            alt="kapal pelni"
            width={1080}   
            height={450}
            className="w-full"
            />
        </div>
    </div>
  )
}
