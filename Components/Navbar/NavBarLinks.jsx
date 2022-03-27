import Link from "next/link"
import { HomeIcon,CollectionIcon,EmojiSadIcon,CalendarIcon } from '@heroicons/react/outline'
import PrimaryButton from "../Button/PrimaryButton"
import SecondaryButton from "../Button/SecondaryButton"
import { useSession, signIn, signOut } from "next-auth/react"

export default function NavBarLinks(){
    const {data: session, status} = useSession();
    const loginClick = ()=> {
        signIn('azure-ad');
    }
    const logoutClick = () => {signOut()};
    return(<>
    {status === 'authenticated' ? 
        <span>
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
                <li className="mt-7 mr-7 ml-7"><PrimaryButton  btnText="Log Ud" onClick={logoutClick}/></li> 
        </span> : 
    <span>
        <li className="mt-7 mr-7 ml-7"><PrimaryButton  btnText="Login" onClick={loginClick}/></li>
        <li className="mr-7 ml-7 pb-7 md:pb-0"><SecondaryButton  btnText="Opret Bruger" onClick={loginClick}/></li>
    </span> }
    </>
        )
}