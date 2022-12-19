import React from "react";
import Head from "next/head";
import Headers from "components/Headers";
import Footer from "components/Footer";
import Cover from "components/Cover"
import TitleItems from "components/TitleItems";
import ImagesItems from "components/ImagesItems";

export default function cabang() {
  return (
    <>
      <Head>
        <title>Pelni Agencies</title>
        <meta name="description" content="Web Pelni Agencies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="w-full mx-auto">
        <Headers />
        <Cover src={"/images/coverCabang.png"} />
        <div className="container px-14 py-14 mx-auto">
          <TitleItems>Cabang Kami</TitleItems>
          <ImagesItems
            className={"w-full -px-14 -py-14 mb-14"}
            src={"/images/map.png"}
            width={400}
            alt={"Kapal Pelni"}
            height={200}
          />
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
      </>
  );
}
