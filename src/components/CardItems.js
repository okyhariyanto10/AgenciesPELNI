import React from 'react'
import Image from 'next/image'

export default function CardItems({tanggal, title, deskripsi,src, className}) {
  const addClassName = className ? ` ${className}` : "";

  return (
    <div className="border p-6 shadow-md text-justify md:w-full items-center justify-center rounded-md">
          <Image
            src={src}
            alt="kapal pelni"
            width={400}   
            height={700}
            className={`h-[350px] rounded-lg mx-auto items-center justify-center ${addClassName}`}
          />
          <p className="text-sm mt-4">{tanggal}</p>
          <h2 className="text-xl font-bold ">{title}</h2>
          <p className="font-normal text-base mt-2 text-justify">{deskripsi}</p>
        </div>
  )
}
