import Head from 'next/head'
import Image from 'next/image'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar/Navbar'
import heroImage from '../public/images/homeHero.webp'

export default function Home() {
  return (
    <>
    <Navbar />
    <main className='md:ml-[250px]'>
    <Hero headline="Ecreo Fraværsportal" subHeadline="One stop fraværs registrering" image={heroImage}/>
    </main></>
  )
}