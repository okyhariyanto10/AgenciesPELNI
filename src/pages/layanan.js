import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Headers from "components/Headers";
import Footer from "components/Footer";
import Panah from "images/arrow-up-right.svg";
import ImagesItems from "components/ImagesItems";
import CardItems from "components/CardItems";

export default function layanan() {
  return (
    <>
      <Head>
        <title>Pelni Agencies</title>
        <meta name="description" content="Web Pelni Agencies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Headers />
      <div className="w-full mx-auto">
        <ImagesItems
          src={"/images/coverLayanan.png"}
          alt="Kapal Pelni"
          width={600}
          height={200}
          className="w-full mb-14"
        /> </div>
        <div className="lg:grid gap-4 lg:grid-cols-4 sm:grid-cols-1 sm:grid container px-14 py-14 mx-auto">
          <div className="">
            <ImagesItems
              src={"/images/layanan1.png"}
              alt="Kapal"
              width={400}
              height={700}
              className="rounded-t-lg"
            />
            <h1 className="p-6 bg-black text-white font-semibold text-lg rounded-b-lg">General Hub</h1>
          </div>
          <div className="">
            <ImagesItems
              src={"/images/layanan1.png"}
              alt="Kapal"
              width={400}
              height={700}
              className="rounded-t-lg"
            />
            <h1 className="p-6 bg-black text-white font-semibold text-lg rounded-b-lg">General Hub</h1>
          </div>
          <div className="">
            <ImagesItems
              src={"/images/layanan1.png"}
              alt="Kapal"
              width={400}
              height={700}
              className="rounded-t-lg"
            />
            <h1 className="p-6 bg-black text-white font-semibold text-lg rounded-b-lg">General Hub</h1>
          </div>
        <div className="">
          <ImagesItems
            src={"/images/layanan1.png"}
            alt="Kapal"
            width={400}
            height={700}
            className="rounded-t-lg"
          />
          <h1 className="p-6 bg-black text-white font-semibold text-lg rounded-b-lg">General Hub</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}
