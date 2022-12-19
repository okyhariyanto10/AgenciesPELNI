import React from "react";
import Image from "next/image";
import TitleItems from "components/TitleItems";
import ImagesItems from "components/ImagesItems";
import SubTitle from "../SubTitle";

export default function index() {
  return (
    <div className="container mt-16 mx-auto -my-14">
      <div className="px-14 py-14">
      <TitleItems>Agency Services</TitleItems>
      <SubTitle>Offer a variety of services to suit your ship's needs</SubTitle>
      <div className="lg:grid gap-8 lg:grid-cols-4 sm:grid-cols-1 sm:grid">
        <div className=" bg-black-700">
          <div className="opacity-20 rounded-3xl absolute h-[500px]">
          </div>
          <h1 className="mb-4 font-semibold text-2xl leading-7">
            Full Port Agency
          </h1>
          <ul className="list-disc pl-5 text-sm">
            <li>Pre arrival preparation</li>
            <li>Custom Clearance handling</li>
            <li>Vessel’s movement</li>
            <li>
              Keeping concerned parties fully up-dated regarding prospects and
              vessels port stay
            </li>
            <li>
              Monitoring / coordinating port operations, stevedoring and cargo
              handling
            </li>
            <li>
              Arranging suitable contractors & specialists for vessel repairs
              surveys, spares, ship stores, nautical charts
            </li>
            <li>
              Arranging / coordinating bunkering, fresh water & waste removal
              service
            </li>
            <li>Attending / representing principal at the of port cal</li>
            <li>
              Detailed, accurate and timely production of Pro-forma & final
              disbursement accounts
            </li>
            <li>
              Post departure: documentation and settlement of final disbursement
              account for services rendered
            </li>
          </ul>
          </div>
        </div>
        {/* <div className=" relative w-3/12 px-6 py-6 -z-20 bg-black/100 text-white border rounded-3xl h-[480px] mr-8">
        <div className="-z-20 opacity-20 rounded-3xl">
            <Image  
            src="/images/cardkapal1.png"
            alt="kapal pelni"
            fill
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
          </div>
          <h1 className="mb-4 font-semibold text-2xl leading-7">
            Husbandary Service
          </h1>
          <ul typeof="" className="list-disc pl-5 text-sm">
            <li>Arranging doctor appointments</li>
            <li>Sanitation certificates</li>
            <li>Coordinate store/spare deliveries</li>
            <li>
              Full crew change management: Flights, airport transfers,
              accommodation, medical assistance and repatriations along with all
              immigration formalities
            </li>
            <li>Secure cash to master delivery</li>
            <li>Delivery and execution of third party</li>
            <li>Arrangements (lub oil, chemicals, paints, etc.)</li>
            <li>Attending / representing principal at the of port cal</li>
            <li>Class and statutory surveys/certification</li>
            <li>Crew changes and transportation</li>
            <li>Mail and courier services</li>
            <li>Ship spares delivery</li>
            <li>
              Dry-docking, repairs and technical assistance Inspection and
              consultancy services
            </li>
          </ul>
        </div>
        <div className=" relative w-3/12 px-6 py-6 -z-20 bg-black/100 text-white border rounded-3xl h-[480px] mr-8">
        <div className="-z-20 opacity-20 rounded-3xl">
            <Image  
            src="/images/cardkapal2.png"
            alt="kapal pelni"
            fill
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
          </div>
          <h1 className="mb-4 font-semibold text-2xl leading-7">Sub Agency</h1>
          <ul typeof="" className="list-disc pl-5 text-sm">
            <li>Back office tasks to other shipping agencies</li>
            <li>Inward and outward clearance</li>
            <li>Attending vessel</li>
            <li>Cash to master hand over</li>
            <li>Delivery packages</li>
            <li>And more…</li>
          </ul>
        </div>
        <div className=" relative w-3/12 px-6 py-6 -z-20 bg-black/100 text-white border rounded-3xl h-[480px]">
        <div className="-z-20 opacity-20 rounded-3xl">
            <Image  
            src="/images/cardkapal.png"
            alt="kapal pelni"
            fill
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
          </div>
          <h1 className="mb-4 font-semibold text-2xl leading-7">General Hub</h1>
          <ul typeof="" className="list-disc pl-5 text-sm">
            <li>
              Coordination, management and supervision of multiple port calls
              along a trade route
            </li>
            <li>Single point communication and accounting procedures</li>
            <li>And more…</li>
          </ul>
        </div> */}
      </div>
      </div>
  );
}
