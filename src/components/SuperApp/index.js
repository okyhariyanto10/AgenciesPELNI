import React from 'react';
import Link from 'next/link';
import LogoApple from "images/logoApple.svg";
import LogoPlaystore from "images/logoPlaystore.svg";
import HPiphone from "images/iphone-13.svg";
import ViewHpAgencies from "images/viewHPAgencies.svg";

export default function index() {
    return (
        <div className="w-full flex mx-auto bg-gradient-to-t from-[#000000] to-[#4A0303] mt-16 mb-16">
            <div className="w-6/12 justify-center items-center py-44 px-16">
                <div className=" text-white mb-8">
                    <h1 className="text-6xl font-bold mb-4">
                        Don’t Have Pelni Superapp?
                    </h1>
                    <h3 className="text-2xl font-normal pr-6">
                        Download now to make pelni agencies transactions easier and
                        faster
                    </h3>
                </div>
                <div className="flex text-2xl font-semibold">
                    <li className="inline-block relative  bg-white px-8 py-4 border-0 rounded-2xl mr-4">
                        <Link className=" text-black ml-4" href="/contact">
                            App Store
                        </Link>
                        <LogoApple className="absolute left-4 top-[18px] w-6 h-6"></LogoApple>
                    </li>
                    <li className="inline-block relative  bg-white px-8 py-4 border-0 rounded-2xl">
                        <Link className=" text-black ml-4" href="/contact">
                            Play Store
                        </Link>
                        <LogoPlaystore className="absolute left-4 top-[18px] w-6 h-6"></LogoPlaystore>
                    </li>
                </div>
            </div>
            <div className="w-6/12  text-white">
                <div className="relative pr-32 ">
                    <div className="">
                        <HPiphone className="left-0 top-0"></HPiphone>
                        <ViewHpAgencies className="absolute -left-3 top-0 mt-[68px]"></ViewHpAgencies>
                    </div>
                </div>
            </div>
        </div>
    )
}
