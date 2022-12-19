import React from 'react'

import Link from 'next/link'
import Logo from 'images/logo1.svg'
import Language from 'images/usa.svg'
import NavItems from "../NavItems";
import ButtonItems from 'components/ButtonItems';

export default function index() {
  return (
    <div className='container mx-auto'>
      <div className='flex py-8 px-14 items-center'>
        <div className='w-3/12 '>
          <Logo className="w-36" />
        </div>
        <div className='w-7/12'>
          <div className='flex'>
            <ul className='flex justify-center mx-auto space-x-12 '>
              <NavItems url={`/`} >Beranda</NavItems>
              <NavItems url={`/tentangkami`}>Tentang Kami</NavItems>
              <NavItems url={`/cabang`}>Cabang</NavItems>
              <NavItems url={`/layanan`}>Layanan</NavItems>
              <NavItems url={`/berita`}>Berita</NavItems>
            </ul>
            <ul className='items-center justify-center flex'>
            <li className='flex mx-auto'><Language className='items-center mt-1 ml-6' />
              <Link className='px-1 text-black font-medium text-base' href="/beranda">EN</Link></li>
            <li className='flex ml-6 mx-auto'>
              <span className='w-2 h-2 border-black border-b border-r transform rotate-45 translate-y-1/2 -ml-6 mt-[2px] '></span></li>
              </ul>
          </div>
        </div>
        <div className='w-2/12 items-center justify-center'>
          <ButtonItems>Contact</ButtonItems>
        </div>
      </div>
    </div>
  )
}
