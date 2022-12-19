import Link from "next/link";

export default function FooterItems({ children, url }) {
    return (
        <>
            <li className="mb-3"><Link className=' text-white/60 font-medium text-base hover:border-b-2 hover:border-white' href={url}>{children}</Link></li>
        </>
    )
}