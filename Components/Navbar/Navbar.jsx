import Image from "next/image"
import Logo from '../../public/images/logo.webp'
import { MenuIcon, XIcon } from "@heroicons/react/solid"
import { HeartIcon } from '@heroicons/react/solid'
import Link from "next/link"
import NavBarLinks from "./NavBarLinks"
import { useState } from 'react'
import { useSession } from "next-auth/react"



export default function Navbar() {
    const [open,setOpen] = useState(false);

    return(
        <nav className="z-2">
            <div className="flex flex-row m-4 justify-between md:hidden">
            <span className="w-[200px]">
                <Image src={Logo} width='200px' height='100px' layout="responsive" className="md:hidden" alt="Ecreo Logo"></Image> 
            </span>
            {!open ?
            <MenuIcon  className="w-[24px] cursor-pointer" onClick={() => setOpen(!open)}/> :
            <XIcon  className="w-[24px] cursor-pointer" onClick={() => setOpen(!open)}/> }
            </div>
            {open ?
            <ul className="bg-ecreo bg-opacity-90 z-10 md:hidden pb-5">
                <NavBarLinks/>
            </ul> : '' }

        <ul className="hidden md:inline-block px-2 md:w-[230px] md:h-[100%] md:fixed top-0 left-0 md:border-r-2 shadow-xl">
            <li className="max-w-[200px] p-4 md:border-b-2 pb-5">
                <Image src={Logo} layout="responsive"></Image>
            </li>
            <NavBarLinks />
            <footer className="hidden md:inline">
            <p className="text-xs text-center mt-10">Copyright 2022 Datamatikerne</p>
            <p className="text-xs text-center">Made with <HeartIcon className="w-[24px] text-ecreo inline hover:scale-110"/> in Odense</p>
            </footer>
        </ul>
        
        </nav>

    )
}