import React from "react";
import Image from "next/legacy/image";
import ArrowIcon from "images/panah.svg";

export default function index() {
  return (
    <div className="mb-6 max-w-7xl px-4 mx-auto py-16 relative">
      <h1 className="flex text-black text-3xl mb-3 font-bold">Press Release</h1>
      <h5 className="flex text-2xl font-normal mb-12">
        A collection of news about the shipping agency Pelni
      </h5>
      <div className="flex justify-center">
        <div className="w/4/12 border p-6 mx-6 shadow-md text-justify">
          <Image
            className="mb-6"
            src="/images/kapal1.png"
            alt="kapal pelni"
            width={383}
            height={320}
          />
          <p className="text-sm">20 Oktober 2022</p>
          <h2 className="leading-[140%] text-xl font-bold mb-2">
            Keagenan KM Kedung Mas Oleh PT Pelni cabang Ambon - Terminal Point
            Saumlaki
          </h2>
          <p className="font-normal text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc
            nisl eu consectetur. Mi massa elementum odio eu viverra amet. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu
            consectetur. Mi massa elementum odio eu viverra amet.
          </p>
        </div>
        <div className="w/4/12 border p-6 mx-6 shadow-md">
          <Image
            className="mb-6"
            src="/images/kapal2.png"
            alt="kapal pelni"
            width={383}
            height={320}
          />
          <p className="text-sm">20 Oktober 2022</p>
          <h2 className="leading-[140%] text-xl font-bold mb-2">
            Keagenan Kapal KM, Kasuari Pasifik III oleh PT Pelni Biak
          </h2>
          <p className="font-normal text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc
            nisl eu consectetur. Mi massa elementum odio eu viverra amet. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu
            consectetur. Mi massa elementum odio eu viverra amet.
          </p>
        </div>
        <div className="w/4/12 border p-6 mx-6 shadow-md">
          <Image
            className="mb-6"
            src="/images/kapal3.png"
            alt="kapal pelni"
            width={383}
            height={320}
          />
          <p className="text-sm">20 Oktober 2022</p>
          <h2 className="leading-[140%] text-xl font-bold mb-2">
            Keagenan Kapal My Maloekoe oleh PT Pelni Ambon
          </h2>
          <p className="font-normal text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc
            nisl eu consectetur. Mi massa elementum odio eu viverra amet. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu
            consectetur. Mi massa elementum odio eu viverra amet.
          </p>
        </div>
        <ul className="absolute bottom-0 left-8">
          <li className="left-0 bottom-0 w-4 h-4 rounded-full bg-color1 inline-flex m-2"></li>
          <li className="left-0 bottom-0 w-4 h-4 rounded-full bg-gray-600/40 inline-flex m-2"></li>
          <li className="left-0 bottom-0 w-4 h-4 rounded-full bg-gray-600/40 inline-flex m-2"></li>
        </ul>
        <ArrowIcon className="absolute z-30 right-24 bottom-0 inline-flex mr-4" />
        <ArrowIcon className="absolute z-30 right-20 bottom-0 inline-flex rotate-180 " />
      </div>
    </div>
  );
}
