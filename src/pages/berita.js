import React from "react";
import Head from "next/head";
import Headers from "components/Headers";
import Cover from "components/Cover";
import Berita from "components/Berita";


export default function berita() {

    return (
        <>
        <Head>
        <title>Pelni Agencies</title>
        <meta name="description" content="Web Pelni Agencies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full mx-auto">
        <Headers />
        <Cover  src={"/images/coverBerita.png"}/>
        <Berita />
      </div>
      </>
    )
}