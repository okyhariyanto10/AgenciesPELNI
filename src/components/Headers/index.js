import React from 'react'

import Link from 'next/link'
import Logo from 'images/logo1.svg'
import Language from 'images/usa.svg'

export default function index() {
  return (
    <header className='max-w-7xl mx-auto px-4 mb-4'>
          <div className='flex justify-between items-center'>
            <div className='w-36 cursor-pointer'>
            <Logo />
            </div>
            <div className='justify-end'>
              <ul className='flex items-center font-sans-[]'>
                <li className=''>
                 <Link className='px-8 text-black font-medium text-xs' href="/">Beranda</Link>
                </li>
                <li className=''>
                 <Link className='px-8 text-black font-medium text-xs' href="/tentangkami">Tentang Kami</Link>
                </li>
                <li className=''>
                 <Link className='px-8 text-black font-medium text-xs' href="/cabang">Cabang</Link>
                </li>
                <li className=''>
                 <Link className='px-8 text-black font-medium text-xs' href="/layanan">Layanan</Link>
                </li>
                <li className=''>
                 <Link className='px-8 text-black font-medium text-xs' href="/berita">Berita</Link>
                </li>
                <button className='relative'>
                <Language className='w-3 absolute left-2 bottom-[6px]'/>
                 <Link className='px-8 text-black font-medium text-xs' href="/beranda">EN</Link>
                 <span className='absolute w-2 h-2 border-black border-b border-r transform rotate-45 translate-y-1/2 -ml-6 mt-[2px] '></span>
                </button>
                <li className=''>
                 <Link className=' px-6 py-2 border-0 bg-color1 text-white rounded-2xl font-medium text-xs' href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
  )
}
