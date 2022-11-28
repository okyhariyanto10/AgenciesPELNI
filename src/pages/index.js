import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";

import Header from "components/Headers";
import Branch from "components/Branch";
import Collection from "components/Collection";
import Card from "components/Card";
import Footer from "components/Footer";

import PanahAtas from "images/panahatas.svg";
import { useState } from "react";
import LogoApple from "images/logoApple.svg";
import LogoPlaystore from "images/logoPlaystore.svg";
import HPiphone from "images/iphone-13.svg";
import ViewHpAgencies from "images/viewHPAgencies.svg";


export default function Home() {
  const [faq, setFaq] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);

  return (
    <div className="">
      <Head>
        <title>Pelni Agencies</title>
        <meta name="description" content="Web Pelni Agencies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full absolute z-10 py-5">
        <Header />
        <Branch />
        <Collection />
        <Card />
        <div className="mb-8 max-w-7xl px-4 mx-auto relative py-28">
          <h1 className="font-bold text-4xl mb-9">
            Frequenly Ask Question (FAQ)
          </h1>
          <div className="flex flex-col px-12 py-4 ">
            <div
              className="relative text-left font-semibold text-2xl cursor-pointer py-6"
              onClick={() => setFaq(!faq)}
            >
              <button className="">
                Can PT PELNI (Persero) provide additional services for ship
                agency services?
              </button>
              {faq == false ? (
                <PanahAtas className="absolute right-0 top-6" />
              ) : (
                <PanahAtas className="absolute right-0 top-6 rotate-180" />
              )}
            </div>
            {faq && (
              <div className="py-6 px-2 bg-slate-100">
                <p>
                  Yes, we can provide additional services (husbandary services)
                  for ship agency services in the territory of Indonesia.
                </p>
              </div>
            )}
            <div
              className="relative text-left font-semibold text-2xl cursor-pointer py-6"
              onClick={() => setFaq2(!faq2)}
            >
              <button className="">
                Who can be contacted regarding ship agency services by PT PELNI
                (Persero)?
              </button>
              {faq2 == false ? (
                <PanahAtas className="absolute right-0 top-6" />
              ) : (
                <PanahAtas className="absolute right-0 top-6 rotate-180" />
              )}
            </div>
            {faq2 && (
              <div className="py-6 px-2 bg-slate-100">
                <p>Our Sales</p>
                <p>Phone : (+62) 813-8888-9162 / (+6221) 6386 4837</p>
                <p>E-mail : commercial@pelni-agencies.co.id</p>
              </div>
            )}
            <div
              className="relative text-left py-4 font-semibold text-2xl cursor-pointer mb-4"
              onClick={() => setFaq3(!faq3)}
            >
              <button className="">
                How long does it take for the principal/general agent to get an
                agency price quote?
              </button>
              {faq3 == false ? (
                <PanahAtas className="absolute right-0 top-6" />
              ) : (
                <PanahAtas className="absolute right-0 top-6 rotate-180" />
              )}
            </div>
            {faq3 && (
              <div className="py-6 px-2 bg-slate-100">
                <p>Maximum within 3x24 hours.</p>
              </div>
            )}
            <div
              className="relative text-left py-4 font-semibold text-2xl cursor-pointer"
              onClick={() => setFaq4(!faq4)}
            >
              <button className="">
                How is the payment system for ship agency services?
              </button>
              {faq4 == false ? (
                <PanahAtas className="absolute right-0 top-6" />
              ) : (
                <PanahAtas className="absolute right-0 top-6 rotate-180" />
              )}
            </div>
            {faq4 && (
              <div className="py-6 px-2 bg-slate-100">
                <p>
                  Payment is made in two stages. In the first stage the
                  Principal, Charterer or Operator must pay 80% and the second
                  stage 20%.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="w-full flex mx-auto bg-gradient-to-t from-[#000000] to-[#4A0303] mb-24">
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
        <div className="w-full px-16 flex mb-12">
          <div className="w-8/12">
            <div className="">
              <h1 className="text-4xl font-bold mb-2">Contact</h1>
              <h3 className="text-2xl font-normal mb-6">
                Leave your message here
              </h3>
            </div>
            <div className="">
              <form className="pr-8">
                <div className="mb-6">
                  <label className="text-lg mb-2">Name</label>
                  <input
                    className="px-2 py-4 rounded-lg w-full shadow appearance-none border text-gray-700 focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Write your name"
                  ></input>
                </div>
                <div className="mb-6">
                  <label className="text-lg mb-2">Email</label>
                  <input
                    className="px-2 py-4 rounded-lg w-full shadow appearance-none border text-gray-700 focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Write your email"
                  ></input>
                </div>
                <div className="mb-6">
                  <label className="text-lg mb-2">Phone</label>
                  <input
                    className="px-2 py-4 rounded-lg w-full shadow appearance-none border text-gray-700 focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="number"
                    placeholder="Write your Number"
                  ></input>
                </div>
                <div className="mb-6">
                  <label className="text-lg mb-2">Country</label>

                  <select
                    className="relative px-2 py-4 rounded-lg w-full shadow border text-gray-700 focus:outline-none focus:shadow-outline "
                    id="username"
                    type="text"
                    placeholder="Select Country"
                  >
                    <option selected>Select City</option>
                    <option value="1">DKI Jakarta</option>
                    <option value="2">Jawa Barat</option>
                    <option value="3">DI Yogyakarta</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="text-lg mb-2">City</label>

                  <select
                    className="relative px-2 py-4 rounded-lg w-full shadow border text-gray-700 focus:outline-none focus:shadow-outline "
                    id="username"
                    type="text"
                    placeholder="Select City"
                  >
                    <option selected>Select City</option>
                    <option value="1">Jakarta</option>
                    <option value="2">Bandung</option>
                    <option value="3">Yogyakarta</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="text-lg mb-2">Address</label>
                  <input
                    className="px-2 py-4 rounded-lg w-full shadow appearance-none border text-gray-700 focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Write your Address"
                  ></input>
                </div>
                <div className="mb-6">
                  <label className="text-lg mb-2">Message Content</label>
                  <textarea
                    className="h-56 px-2 py-4 rounded-lg w-full shadow appearance-none border text-gray-700 focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Write your Address"
                  ></textarea>
                </div>
                <button className="float-right px-8 py-4 bg-color1 rounded-xl text-white font-semibold text-base">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="w-4/12 ml-2">
            <Image
              src="/images/kapal4.png"
              alt="Picture of the author"
              width={475}
              height={800}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
