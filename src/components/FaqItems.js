import React, { useState } from 'react'
import PanahAtas from "images/panahatas.svg";

export default function FaqItems({ title, question, answer }) {

    const [faq, setFaq] = useState(false)

    return (
        <div>
            <div
                className="relative text-left font-semibold text-xl cursor-pointer py-6"
                onClick={() => setFaq(!faq)}
            >
                <div className="">
                    <p>{question}</p>
                    {faq == false ? (
                        <PanahAtas className="absolute right-0 top-6 rotate-180" />
                    ) : (
                        <>
                            <PanahAtas className="absolute right-0 top-6 " />
                            <div className="py-6 px-2 bg-slate-100 mt-6">
                                <p className='text-base'>{answer}</p>
                            </div>
                        </>
                    )}
                </div>   
            </div>
        </div>
    )
}
