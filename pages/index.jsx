import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Hero from '../components/Homepage/Hero';
import Features from '../components/Homepage/Features';
import Awards from '../components/Homepage/Awards';
import Amenities from '../components/Homepage/Amenities'; 

// import Reviews from '../components/Homepage/Reviews';
import Faqs from '../components/Homepage/Faqs';
import Footer from '../components/Footer';
import Team from '../components/Homepage/Team';
import Content from '../components/Homepage/Content';
import Stats from '../components/Homepage/Stats';
import Contact from '../components/Homepage/Contact';
import LogoCloud from '../components/Homepage/LogoCloud';
import Layout from '../components/Layout'; 
import Stepper  from '../components/Stepper'; 
// import Carousel from '../components/Carousel';
import { Reviews } from '../components/Homepage/Testimonials';
import WhatsAppButton from '../components/common/WhatsappButton';

export default function Home() {
  return (
    <div>
		{/* <Head>
			<title>Student Housing</title>
			<meta name="description" content="Student Housing in Mumbai" />
			<link rel="icon" href="/sh_logo.png" />
		</Head> */}

		<Layout>
			<span className='fixed bottom-[25px] right-[20px] z-[1000]'>
				<WhatsAppButton message={""}/>
			</span>

			<Hero/>
			{/* <div className='h-screen w-full bg-orange-400  lg:bg-red-400'></div> */}
			<LogoCloud/>
			<Features/>
			<Amenities/>
			<Awards/>
			<Reviews/>
			<Faqs/>
			<Contact/>
		</Layout>
    </div>
  )
}
