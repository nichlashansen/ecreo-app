import Image from "next/image"


export default function EmployeeCard({ imgPath, name, subTitle, availabillity}){
    return(
        <>
        <article className={`flex flex-row p-3 m-5 bg-slate-300 w-[300px] rounded-2xl border-l-4 border-solid shadow-xl ${availabillity ? "border-green-500" : "border-red-500"}`}>
            <div className="w-[100px]">
                <Image width="100%" height='100%' layout="responsive" src={imgPath} objectFit="cover" className="rounded-full"></Image>
            </div>
            <div className="ml-4">
                <h3 className="text-xl mt-6">{name}</h3>
                <p className="text-sm">{subTitle}</p>
            </div>
        </article>
        </>
    )
}