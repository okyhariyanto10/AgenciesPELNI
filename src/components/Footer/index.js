import React from "react";
import FooterItems from "components/FooterItems";

import Link from "next/link";
import Logo from "images/logo1.svg";
import Phone from "images/phone.svg";
import Telephone from "images/telephone.svg";
import Mail from "images/mail.svg";
import Lokasi from "images/lokasi.svg";

export default function index() {
  return (
    <div className="w-full bg-greyfooter mt-14">
      <div className="container mx-auto py-8 px-14">
        <Logo className="w-[150px] h-[39px] mb-5" />
        <div className="flex">
          <div className="w-4/12 mr-14">
            <div className="">
              <h2 className="text-white text-lg font-semibold mb-6">
                Tentang Kami
              </h2>
              <p className="text-sm text-white/60 text-justify pr-16 leading-6">
                PT Pelni adalah perusahaan pelayaran BUMN terbesar di Indonesia yang
                salah satu bisnis usahanya adalah menyediakan layanan keagenan
                kapal. Pelni Agencies telah melayani hampir 80% kapal asing yang
                memasuki wilayah perairan Indonesia juga kapal-kapal lokal. PT Pelni
                Memiliki 46 Kantor cabang yang tersebar di Indonesia.
              </p>
            </div>
          </div>
          <div className="w-4/12">
            <h1 className="text-white text-lg mb-5 font-semibold ">Kontak Kami</h1>
            <div className="flex items-center mb-1">
              <Lokasi className="mr-2" />
              <p className=" text-white/60 text-sm">
                Kantor Pusat PT.PELNI (Persero) <br /> Jl. Gajah Mada No.14 Jakarta
                Pusat{" "}
              </p>

            </div>
            <div className="flex items-center mb-1">
              <Telephone className="mr-2" />
              <p className=" text-white/60 text-sm">(+6221) 63864837</p>
            </div>
            <div className="flex items-center mb-1">
              <Phone className="mr-2" />
              <p className=" text-white/60 text-sm">(+62) 813-8888-9162</p>
            </div>
            <div className="flex items-center mb-1">
              <Mail className="mr-2" />
              <p className=" text-white/60 text-sm">
                commercial@pelni-agencies.co.id
              </p>
            </div>
          </div>
          <div className="w-4/12 ml-6">

            <h1 className="text-white text-lg mb-5 font-semibold ">
              Keagenan Kapal Pelni
            </h1>
            <ul className="text-white/60">
              <FooterItems children={"Beranda"} url={"/beranda"} />
              <FooterItems children={"Tentang Kami"} url={"/tentangkami"} />
              <FooterItems children={"Cabang"} url={"/cabang"} />
              <FooterItems children={"Layanan"} url={"/layanan"} />
              <FooterItems children={"Berita"} url={"/berita"} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
