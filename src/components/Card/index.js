import React from "react";
import Image from "next/image";

export default function index() {
  return (
    <div className="mb-12 max-w-7xl px-4 mx-auto py-16 relative">
      <h1 className="flex text-black text-3xl mb-3 font-bold">
        Agency Services
      </h1>
      <h5 className="flex text-2xl font-normal mb-12">
        Offer a variety of services to suit your ship's needs
      </h5>
      <div className="flex">
        <div className=" relative w-3/12 px-6 py-6 -z-20 bg-black/100 text-white border rounded-3xl h-[436px] mr-7">
          <Image
            className="-z-20 opacity-20"
            src="/images/kapal1.png"
            layout="fill"
            alt="kapal pelni"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
          <h1 className="mb-4 font-semibold text-2xl leading-7">
            Full Port Agency
          </h1>
          <ul typeof="" className="list-disc pl-5 text-xs">
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
        <div className=" relative w-3/12 px-6 py-6 -z-20 bg-black/100 text-white border rounded-3xl h-[436px] mr-7">
          <Image
            className="-z-20 opacity-20"
            src="/images/cardkapal1.png"
            layout="fill"
            alt="kapal pelni"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
          <h1 className="mb-4 font-semibold text-2xl leading-7">
            Husbandary Service
          </h1>
          <ul typeof="" className="list-disc pl-5 text-xs">
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
        <div className=" relative w-3/12 px-6 py-6 -z-20 bg-black/100 text-white border rounded-3xl h-[436px] mr-7">
          <Image
            className="-z-20 opacity-20"
            src="/images/cardkapal2.png"
            layout="fill"
            alt="kapal pelni"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
          <h1 className="mb-4 font-semibold text-2xl leading-7">Sub Agency</h1>
          <ul typeof="" className="list-disc pl-5 text-xs">
            <li>Back office tasks to other shipping agencies</li>
            <li>Inward and outward clearance</li>
            <li>Attending vessel</li>
            <li>Cash to master hand over</li>
            <li>Delivery packages</li>
            <li>And more…</li>
          </ul>
        </div>
        <div className=" relative w-3/12 px-6 py-6 -z-20 bg-black/100 text-white border rounded-3xl h-[436px]">
          <Image
            className="-z-20 opacity-20"
            src="/images/cardkapal3.png"
            layout="fill"
            alt="kapal pelni"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
          <h1 className="mb-4 font-semibold text-2xl leading-7">General Hub</h1>
          <ul typeof="" className="list-disc pl-5 text-xs">
            <li>
              Coordination, management and supervision of multiple port calls
              along a trade route
            </li>
            <li>Single point communication and accounting procedures</li>
            <li>And more…</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
