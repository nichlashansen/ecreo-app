import Image from "next/image"
import PrimaryButton from "./Button/PrimaryButton"
import SecondaryButton from "./Button/SecondaryButton"

export default function Hero({headline, subHeadline, image}){
return(
    <section className=" mt-12 md:mt-6 flex flex-col lg:flex-row lg:justify-center items-center">
        <div className="mr-4">
            <h1 className="text-center text-3xl ">{headline}</h1>
            <h2 className="text-center text-xl">{subHeadline}</h2>
            <div className="">
                <PrimaryButton btnText="Login med Microsoft" href="/" />
            </div>
        </div>
        <div>
            <Image src={image} ></Image>

        </div>
    </section>
)
}