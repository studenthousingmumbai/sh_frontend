import { useState } from 'react';  
import Head from 'next/head'
import Link from 'next/link'
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
import Modal from '../components/common/Modal';
import Carousel from '../components/common/Carousel';

export default function Home() {
	const [open, setOpen] = useState(true); 

	return (
		<div>
			<Head>
				<title>Book Hostels in Mumbai For College Students | Student Housing</title>
				<meta name="description" content="Student housing offers hostels in Mumbai for college students at a reasonable price. A fully functional clean apartment with regular cleaning services. We also provide additional services like meals, laundry and drop off to college." />
				<link rel="icon" href="/sh_logo.png" />
			</Head>
			
			<Modal open={open} onClose={() => setOpen(false)}>
				<Carousel 
					images={[
						'https://t4.ftcdn.net/jpg/02/19/66/93/360_F_219669327_v12pBKc7TB62E3uCJrgRRkDhfVENK3z5.jpg',
						'https://www.lendi.org/images/amenties/hostel/h1.jpg'
					]}
				/>
				<Link href='/listings'>
					<a
						href="#"
						className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent px-4 py-2 text-base font-medium text-gray-700 shadow-sm bg-[#ffcc29] hover:bg-[#fad45a]"
					>
						Book Now
					</a>
				</Link>
				<Link href='/contact-us'>
					<a
						href="#"
						className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent px-4 py-2 text-base font-medium text-gray-700 shadow-sm bg-[#ffcc29] hover:bg-[#fad45a]"
					>
						Learn More
					</a>
				</Link>
			</Modal>
			
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
