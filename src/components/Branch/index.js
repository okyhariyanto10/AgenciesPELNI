import React from "react";
import Image from "next/legacy/image";
import LogoSearch from "images/search.svg";


export default function index() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-center text-center mb-3">
        <h1 className="font-bold text-5xl leading-[140%]">
          Pelni Shipping Agencies <br /> No agent Knows Indonesia Better Than Us
        </h1>
      </div>
      <div className="flex justify-center text-center mb-12">
        <h4 className="text-color2 font-normal text-2xl">
          We are focused on meeting customer’s requiretments and satisfaction
        </h4>
      </div>
      <div class="flex justify-center">
        <div class="mb-3 xl:w-[805px]">
          <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
            <LogoSearch className="absolute bottom-5 left-2 z-20 " />
            <input
              type="search"
              class="pl-8 form-control h-14 relative flex-auto min-w-0 block w-full px-3 py-2 rounded-xl text-base font-medium text-gray-700 bg-white bg-clip-padding border border-solid border-color2 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-color1 focus:outline-none"
              placeholder="Search Branch"
            />
            <span className="absolute right-4 bottom-8 w-2 h-2 border-black border-b border-r transform rotate-45 translate-y-1/2 -ml-6 mt-[2px] "></span>
          </div>
        </div>
      </div>
      <Image
        className="w-[100%]"
        src="/images/maps.png"
        alt="posisi kapal"
        width={1442}
        height={662}
      />
    </div>
  );
}
