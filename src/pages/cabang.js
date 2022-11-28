import React from "react";
import Link from "next/link";
import Head from "next/head";
import Headers from "components/Headers";
import Image from "next/legacy/image";
import Footer from "components/Footer";

export default function cabang() {
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
          <Image src="/images/coverCabang.png" width={1440} height={272} alt="kapal pelni" />
        </div>
        <div className="px-16 mb-9">
          <h1 className="text-4xl font-semibold mb-4">Cabang Kami</h1>
          <Image src="/images/map.png" width={1312} height={580} alt="kapal pelni"/>
        </div>
        <div className="px-16 mb-9">
          <h1 className="text-xl font-semibold mb-4">Pilih Cabang</h1>
          <select className="mb-7 px-6 py-3 w-full border rounded-lg text-gray-800 focus:outline-none focus:shadow-outline">
            <option>Select Branch</option>
            <option value="1">Jakarta</option>
            <option value="2">Belawan</option>
            <option value="3">Surabaya</option>
            <option value="4">Tanjung Pinang</option>
            <option value="5">Denpasar</option>
          </select>
          <button className="float-right mb-7 px-8 py-3 bg-color1 rounded-xl text-white font-semibold text-base">
            Search
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
}
