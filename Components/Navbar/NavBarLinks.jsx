import Link from "next/link"
import { HomeIcon,CollectionIcon,EmojiSadIcon,CalendarIcon } from '@heroicons/react/outline'
import PrimaryButton from "../Button/PrimaryButton"
import SecondaryButton from "../Button/SecondaryButton"

export default function NavBarLinks(){
    return(<>
        <li className="md:border-b-2 text-white text-opacity-80 md:text-black"><Link href="/"><a className="flex flex-row p-5 md:hover:text-ecreo transition ease-out delay-100 md:hover:scale-110">
        <HomeIcon className="w-[24px] mr-2"/>Hjem
    </a></Link></li>
    <li className="md:border-b-2 text-white text-opacity-80 md:text-black"><Link href="/dashboard"><a className="flex flex-row p-5 md:hover:text-ecreo transition ease-out delay-100 md:hover:scale-110">
        <CollectionIcon className="w-[24px] mr-2"/>Dashboard
    </a></Link></li>
    <li className="md:border-b-2 text-white text-opacity-80 md:text-black"><Link href="/absense"><a className="flex flex-row p-5 md:hover:text-ecreo transition ease-out delay-100 md:hover:scale-110">
        <EmojiSadIcon className="w-[24px] mr-2"/>Fravær
    </a></Link></li>
    <li className="md:border-b-2 text-white text-opacity-80 md:text-black"><Link href="/calender"><a className="flex flex-row p-5 md:hover:text-ecreo transition ease-out delay-100 md:hover:scale-110">
        <CalendarIcon className="w-[24px] mr-2"/>Kalender
    </a></Link></li>
    <li className="mt-7 mr-7"><PrimaryButton  btnText="Login" href="/login"/></li>
    <li className="mr-7"><SecondaryButton  btnText="Opret Bruger" href="/signup"/></li>
    </>
        )
}