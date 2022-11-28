import React from "react";
import Link from "next/link";
import Logo from "images/logo1.svg";
import Phone from "images/phone.svg";
import Telephone from "images/telephone.svg";
import Mail from "images/mail.svg";
import Lokasi from "images/lokasi.svg";

export default function index() {
  return (
    <div className="flex w-full mx-auto relative px-16 py-8 -mb-5 bg-color3">
      <div className="w-3/12 mr-14">
        <Logo className="w-[150px] h-[39px] mb-5" />
        <div className="">
          <h2 className="text-white text-lg font-semibold mb-6">
            Tentang Kami
          </h2>
          <p className="text-sm text-white/60 text-justify">
            PT Pelni adalah perusahaan pelayaran BUMN terbesar di Indonesia yang
            salah satu bisnis usahanya adalah menyediakan layanan keagenan
            kapal. Pelni Agencies telah melayani hampir 80% kapal asing yang
            memasuki wilayah perairan Indonesia juga kapal-kapal lokal. PT Pelni
            Memiliki 46 Kantor cabang yang tersebar di Indonesia.
          </p>
        </div>
      </div>
      <div className="w-5/12 pt-12 pl-14">
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
      <div className="w-4/12 ml-6 pt-12">
        <h1 className="text-white text-lg mb-5 font-semibold ">
          Keagenan Kapal Pelni
        </h1>
        <ul className="text-white/60">
          <Link href="/beranda">
            <li className="mb-3">Beranda</li>
          </Link>
          <Link href="/tentangkami">
            <li className="mb-3">Tentang Kami</li>
          </Link>
          <Link href="/cabang">
            <li className="mb-3">Cabang</li>
          </Link>
          <Link href="/layanan">
            <li className="mb-3">Layanan</li>
          </Link>
          <Link href="/berita">
            <li className="mb-3">Berita</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
