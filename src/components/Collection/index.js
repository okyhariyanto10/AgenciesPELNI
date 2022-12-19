import React from "react";
import Image from "next/legacy/image";
import ArrowIcon from "images/panah.svg";
import TitleItems from "components/TitleItems";
import CardItems from "components/CardItems";
import SubTitle from "../SubTitle"

export default function index() {
  return (
    <div className="container mx-auto -my-14">
      <div className="px-14 py-14 ">
        <TitleItems>Press Release</TitleItems>
        <SubTitle>A collection of news about the shipping agency Pelni</SubTitle>
        <div className="lg:grid gap-8 lg:grid-cols-3 sm:grid-cols-1 sm:grid">
          <CardItems
            src={`/images/collectionkapal1.png`}
            tanggal={`20 Oktober 2022`}
            title={`Keagenan Kapal KM, Kasuari Pasifik III oleh PT Pelni Biak`}
            deskripsi={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc
            nisl eu consectetur. Mi massa elementum odio eu viverra amet. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu
            consectetur. Mi massa elementum odio eu viverra amet.`}
          />
          <CardItems
            src={`/images/collectionkapal2.png`}
            tanggal={`20 Oktober 2022`}
            title={`Keagenan Kapal KM, Kasuari Pasifik III oleh PT Pelni Biak`}
            deskripsi={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc
            nisl eu consectetur. Mi massa elementum odio eu viverra amet. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu
            consectetur. Mi massa elementum odio eu viverra amet.`}
          />
          <CardItems
            src={`/images/collectionkapal1.png`}
            tanggal={`20 Oktober 2022`}
            title={`Keagenan Kapal KM, Kasuari Pasifik III oleh PT Pelni Biak`}
            deskripsi={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc
            nisl eu consectetur. Mi massa elementum odio eu viverra amet. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu
            consectetur. Mi massa elementum odio eu viverra amet.`}
          />
        </div>
      </div>
    </div>
  );
}
