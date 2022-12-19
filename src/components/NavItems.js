import Link from "next/link";

export default function NavItems({ children, url }) {
  return (
    <li><Link className=' text-black font-medium text-base hover: p-2 hover:border-b-2 hover:border-red-500' href={url}>{children}</Link></li>
  )
}