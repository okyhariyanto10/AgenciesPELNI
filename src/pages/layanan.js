import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Headers from "components/Headers";
import Footer from "components/Footer";
import Panah from "images/arrow-up-right.svg";

export default function layanan() {
  return (
    <div className="">
      <Head>
        <title>Pelni Agencies</title>
        <meta name="description" content="Web Pelni Agencies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full absolute z-10 py-5">
        <Headers />
        <div className="w-full mb-10">
          <Image src="/images/coverLayanan.png" width={1440} height={272} priority />
        </div>
        <div className="px-16 mb-7">
            <h1 className="mb-10 text-4xl font-semibold">Layanan Kami</h1>
            <div className="flex">
                <div className="w-3/12 mx-4">
                    <Image className="w-full rounded-t-3xl" src="/images/layanan1.png" width={306} height={359} alt="kapal pelni"/>
                    <h1 className="relative rounded-b-3xl bg-black text-white font-semibold text-base py-6 px-6">Full Port Agency
                    <span><Panah className="absolute right-4 top-5" /></span></h1>
                    
                </div>
                <div className="w-3/12 mx-4">
                    <Image className="w-full rounded-t-3xl" src="/images/layanan1.png" width={306} height={359} alt="kapal pelni"/>
                    <h1 className="relative rounded-b-3xl bg-black text-white font-semibold text-base py-6 px-6">Husbandary Service
                    <span><Panah className="absolute right-4 top-5" /></span></h1>
                    
                </div>
                <div className="w-3/12 mx-4">
                    <Image className="w-full rounded-t-3xl" src="/images/layanan1.png" width={306} height={359} alt="kapal pelni"/>
                    <h1 className="relative rounded-b-3xl bg-black text-white font-semibold text-base py-6 px-6">Sub Agency
                    <span><Panah className="absolute right-4 top-5" /></span></h1>
                </div>
                <div className="w-3/12 mx-4">
                    <Image className="w-full rounded-t-3xl" src="/images/layanan1.png" width={306} height={359} alt="kapal pelni"/>
                    <h1 className="relative rounded-b-3xl bg-black text-white font-semibold text-base py-6 px-6">General Hub
                    <span><Panah className="absolute right-4 top-5" /></span></h1>
                </div>
            </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
