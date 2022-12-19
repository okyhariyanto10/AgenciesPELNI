import React from "react";
import Image from "next/legacy/image";
import LogoSearch from "images/search.svg";
import ImagesItems from "components/ImagesItems";


export default function index() {
  return (
    <div className="container mx-auto">
      <div className="py-8 px-14">
        <div className="justify-center mb-6 w-full text-center">
          <h1 className="font-bold mx-auto text-5xl leading-tight w-9/12">
            Pelni Shipping Agencies <br/> No agent Knows Indonesia Better Than Us
          </h1>
        </div>
        <div className="justify-center text-center mb-12 text-base">  
        </div>
        <div className="flex w-full justify-center">
          <div className="mb-3 xl:w-[805px] md:w-96">
            <div className="input-group flex flex-wrap items-stretch w-full mb-4">
              <input
                className="px-8 py-4 rounded-lg w-full shadow appearance-none border text-gray-700 focus:outline-none focus:shadow-outline"
                id="cabang"
                type="text"
                placeholder="Select Cabang"
              ></input>
            </div>
          </div>
        </div>
        <div className="w-full">
          <ImagesItems src="/images/maps.png" alt="Maps Kapal" width="1600" height="1000" />
        </div>
      </div>
    </div>
  );
}
