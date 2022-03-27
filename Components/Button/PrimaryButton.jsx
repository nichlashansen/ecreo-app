import Link from "next/link";

export default function PrimaryButton({ btnText, href }){

    return (<Link href={href}><a>
        <button className="px-6 py-3 bg-cyan-600 text-white hover:bg-cyan-500 rounded-md m-3 text-xl md:text-lg w-full">{btnText}</button></a></Link>
    )
}