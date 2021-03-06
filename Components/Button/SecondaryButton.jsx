import Link from "next/link";

export default function PrimaryButton({ btnText, onClick }){

    return (
        <button onClick={onClick} className="px-6 py-3 bg-slate-500 text-white hover:bg-slate-600 rounded-md mt-3 text-xl md:text-lg w-full">{btnText}</button>
    )
}