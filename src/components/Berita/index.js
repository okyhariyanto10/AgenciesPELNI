import React from 'react';
import TitleItems from 'components/TitleItems';
import SubTitle from 'components/SubTitle';
import CardItems from 'components/CardItems';
import ButtonItems from 'components/ButtonItems';
import Footer from 'components/Footer';

export default function index() {
    return (
        <>
        <div className='container mx-auto '>
            <div className=' flex'>
                <div className='flex w-8/12 items-center space-x-80'>
                    <div className=''>
                        <TitleItems>Feed Berita</TitleItems>
                        <SubTitle className={"mb-0"}>Kumpulan Berita mengenai shipping agencies Pelni</SubTitle>
                    </div>
                    <div className=''>
                        <select
                            className="px-2 py-3 shadow border text-gray-700 focus:shadow-outline"
                            id="tahun"
                            type="text"
                        >
                            <option defaultValue>Pilih Tahun</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                        </select>
                    </div>
                    </div>
                <div className='w-4/12 text-center items-center justify-center mx-auto'>
                    <TitleItems className="mb-0 items-center">Berita Baru</TitleItems>
                </div>
            </div>
            <div className='flex container mt-10'>
                <div className='w-8/12'>
                <div className='grid grid-cols-2 gap-8'>
                    <CardItems
                        src={"/images/collectionkapal1.png"}
                        tanggal={"20 Oktober 2022"}
                        title={"Keagenan Kapal My Maloekoe oleh PT Pelni Ambon"}
                        deskripsi={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet."}
                    />
                    <CardItems
                        src={"/images/collectionkapal2.png"}
                        tanggal={"20 Oktober 2022"}
                        title={"Keagenan Kapal My Maloekoe oleh PT Pelni Ambon"}
                        deskripsi={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet."}
                    />
                    <CardItems
                        src={"/images/collectionkapal2.png"}
                        tanggal={"20 Oktober 2022"}
                        title={"Keagenan Kapal My Maloekoe oleh PT Pelni Ambon"}
                        deskripsi={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet."}
                    />
                    <CardItems
                        src={"/images/collectionkapal1.png"}
                        tanggal={"20 Oktober 2022"}
                        title={"Keagenan Kapal My Maloekoe oleh PT Pelni Ambon"}
                        deskripsi={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet."}
                    />
                    <CardItems
                        src={"/images/collectionkapal1.png"}
                        tanggal={"20 Oktober 2022"}
                        title={"Keagenan Kapal My Maloekoe oleh PT Pelni Ambon"}
                        deskripsi={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet."}
                    />
                    <CardItems
                        src={"/images/collectionkapal2.png"}
                        tanggal={"20 Oktober 2022"}
                        title={"Keagenan Kapal My Maloekoe oleh PT Pelni Ambon"}
                        deskripsi={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet."}
                    />
                </div>
                </div>
                <div className='w-4/12 ml-10 px-8 grid grid-cols-1'>
                <CardItems
                        src={"/images/collectionkapal2.png"}
                        tanggal={"20 Oktober 2022"}
                        title={"Keagenan Kapal My Maloekoe oleh PT Pelni Ambon"}
                        // deskripsi={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet."}
                        className={"w-[360px] h-[202px] p-0"}
                    />
                    <CardItems
                        src={"/images/collectionkapal2.png"}
                        tanggal={"20 Oktober 2022"}
                        title={"Keagenan Kapal My Maloekoe oleh PT Pelni Ambon"}
                        // deskripsi={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet."}
                        className={"w-[360px] h-[202px]"}
                    />
                    <CardItems
                        src={"/images/collectionkapal2.png"}
                        tanggal={"20 Oktober 2022"}
                        title={"Keagenan Kapal My Maloekoe oleh PT Pelni Ambon"}
                        // deskripsi={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet."}
                        className={"w-[360px] h-[202px]"}
                    />
                    <CardItems
                        src={"/images/collectionkapal2.png"}
                        tanggal={"20 Oktober 2022"}
                        title={"Keagenan Kapal My Maloekoe oleh PT Pelni Ambon"}
                        // deskripsi={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet."}
                        className={"w-[360px] h-[202px]"}
                    />
                    <CardItems
                        src={"/images/collectionkapal2.png"}
                        tanggal={"20 Oktober 2022"}
                        title={"Keagenan Kapal My Maloekoe oleh PT Pelni Ambon"}
                        // deskripsi={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet."}
                        className={"w-[360px] h-[202px]"}
                    />
                </div>
            </div>
            <div className='w-8/12 my-14 flex items-center justify-center'>
                <ButtonItems className={"bg-gray-200 rounded-lg"}>previous</ButtonItems>
                <div className='justify-center'>
                <span className='py-3 px-4 rounded-full bg-red-500 items-center'>1</span>
                <span className='py-3 px-4 rounded-full bg-gray-200 items-center'>2</span>
                <span className='py-3 px-4 rounded-full bg-gray-200 items-center'>3</span>
                </div>
                <ButtonItems className={"bg-red-500 rounded-lg"}>Next</ButtonItems>
            </div>
            
        </div>
        <Footer />
        </>
    )
}
