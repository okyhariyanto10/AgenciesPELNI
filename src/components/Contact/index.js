import React from 'react'
import Image from "next/legacy/image";
import TitleItems from 'components/TitleItems';
import SubTitle from 'components/SubTitle';
import ButtonItems from 'components/ButtonItems';

export default function index({}) {
    
    return (
        <div className="container mx-auto -my-14">
            <div className='px-14 py-14 flex'>
                <div className="w-7/12">
                   <TitleItems>Contact</TitleItems>
                   <SubTitle>Leave your message here</SubTitle>
                    <div className="">
                        <form className="pr-8">
                            <div className="mb-6">
                                <label className="text-lg mb-2">Name</label>
                                <input
                                    className="px-2 py-3 rounded-lg w-full shadow appearance-none border text-gray-700 focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    placeholder="Write your name"
                                ></input>
                            </div>
                            <div className="mb-6">
                                <label className="text-lg mb-2">Email</label>
                                <input
                                    className="px-2 py-3 rounded-lg w-full shadow appearance-none border text-gray-700 focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Write your email"
                                ></input>
                            </div>
                            <div className="mb-6">
                                <label className="text-lg mb-2">Phone</label>
                                <input
                                    className="px-2 py-3 rounded-lg w-full shadow appearance-none border text-gray-700 focus:outline-none focus:shadow-outline"
                                    id="phone"
                                    type="number"
                                    placeholder="Write your Number"
                                ></input>
                            </div>
                            <div className="mb-6">
                                <label className="text-lg mb-2">Country</label>

                                <select
                                    className="relative px-2 py-3 rounded-lg w-full shadow border text-gray-700 focus:outline-none focus:shadow-outline "
                                    id="username"
                                    type="text"
                                    placeholder="Select Country"
                                >
                                    <option defaultValue>Select City</option>
                                    <option value="1">DKI Jakarta</option>
                                    <option value="2">Jawa Barat</option>
                                    <option value="3">DI Yogyakarta</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <label className="text-lg mb-2">City</label>

                                <select
                                    className="relative px-2 py-3 rounded-lg w-full shadow border text-gray-700 focus:outline-none focus:shadow-outline "
                                    id="username"
                                    type="text"
                                    placeholder="Select City"
                                >
                                    <option defaultValue>Select City</option>
                                    <option value="1">Jakarta</option>
                                    <option value="2">Bandung</option>
                                    <option value="3">Yogyakarta</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <label className="text-lg mb-2">Address</label>
                                <input
                                    className="px-2 py-3 rounded-lg w-full shadow appearance-none border text-gray-700 focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    placeholder="Write your Address"
                                ></input>
                            </div>
                            <div className="mb-6">
                                <label className="text-lg mb-2">Message Content</label>
                                <textarea
                                    className="h-32 px-2 py-3 rounded-lg w-full shadow appearance-none border text-gray-700 focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    placeholder="Write your Address"
                                ></textarea>
                            </div>
                            <ButtonItems className={"float-right mx-auto rounded-lg"}children={""}>Kirim</ButtonItems>
                        </form>
                    </div>
                </div>
                <div className="w-5/12 ml-2 float-right">
                    <Image
                        src="/images/kapal4.png"
                        alt="Picture of the author"
                        width={475}
                        height={900}
                        objectFit="fill"
                    />
                </div>
            </div>
        </div>
    )
}
