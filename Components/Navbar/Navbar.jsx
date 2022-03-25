import Image from "next/image"
import Logo from '../../public/images/logo.webp'
import { HomeIcon,CollectionIcon,EmojiSadIcon,CalendarIcon } from '@heroicons/react/outline'
import { HeartIcon } from '@heroicons/react/solid'
import Link from "next/link"

export default function Navbar(){
    return(
        <nav>
        <ul className="p-3 md:w-[230px] md:h-[100%] md:fixed border-r-1 shadow-xl">
            <li className="max-w-[200px] p-4 md:border-b-2 pb-5">
                <Image src={Logo} layout="responsive"></Image>
            </li>
            <li className="md:border-b-2"><Link href="/"><a className="flex flex-row p-5 hover:text-ecreo transition ease-out delay-100 hover:scale-110">
                <HomeIcon className="w-[24px] mr-2"/>Hjem
            </a></Link></li>
            <li className="md:border-b-2"><Link href="/dashboard"><a className="flex flex-row p-5 hover:text-ecreo transition ease-out delay-100 hover:scale-110">
                <CollectionIcon className="w-[24px] mr-2"/>Dashboard
            </a></Link></li>
            <li className="md:border-b-2"><Link href="/absense"><a className="flex flex-row p-5 hover:text-ecreo transition ease-out delay-100 hover:scale-110">
                <EmojiSadIcon className="w-[24px] mr-2"/>Fravær
            </a></Link></li>
            <li className="md:border-b-2"><Link href="/calender"><a className="flex flex-row p-5 hover:text-ecreo transition ease-out delay-100 hover:scale-110">
                <CalendarIcon className="w-[24px] mr-2"/>Kalender
            </a></Link></li>
            <footer>
            <p className="text-xs text-center mt-10">Copyright 2022 Datamatikerne</p>
            <p className="text-xs text-center">Made with <HeartIcon className="w-[24px] text-ecreo inline hover:scale-110"/> in Odense</p>
            </footer>
        </ul>
        
        </nav>

    )
}