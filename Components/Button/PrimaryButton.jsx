import Link from "next/link";

export default function PrimaryButton({ btnText, onClick}){

    return (
        <button data-testid="primaryBtn" onClick={onClick} className="px-6 py-3 bg-cyan-600 text-white hover:bg-cyan-500 rounded-md mt-3 text-xl md:text-lg w-full">{btnText}</button>
    )
}