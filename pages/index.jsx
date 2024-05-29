import { useState, useEffect } from 'react';  
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

	useEffect(() => {
		if (open) {
			document.body.classList.add('modal-open');
		} else {
			document.body.classList.remove('modal-open');
		}

		// remove class when component unmounts
		return () => {
			document.body.classList.remove('modal-open');
		};
	}, [open]);

	return (
		<div>
			<Head>
				<title>Book Hostels in Mumbai For College Students | Student Housing</title>
				<meta name="description" content="Student housing offers hostels in Mumbai for college students at a reasonable price. A fully functional clean apartment with regular cleaning services. We also provide additional services like meals, laundry and drop off to college." />
				<link rel="icon" href="/sh_logo.png" />
			</Head>
			
			<div className='z-50'>
				<Modal open={open} onClose={() => setOpen(false)}>
					<div className='flex flex-col gap-4'>
						<Carousel 
							images={[
								'/HomeCarousel/banner_1.jpeg',
								'/HomeCarousel/banner_2.jpeg',
								'/HomeCarousel/banner_3.jpeg',
								'/HomeCarousel/banner_4.jpeg',
							]}
						/>
						<div className='flex justify-center sm:justify-end gap-4'>
							<Link href='/listings'>
								<a
									href="#"
									className="inline-flex items-center text-center justify-center rounded-md border border-transparent px-2 py-1 sm:px-4 sm:py-2  text-sm sm:text-base font-medium text-gray-700 shadow-sm bg-[#ffcc29] hover:bg-[#fad45a]"
								>
									Book Now
								</a>
							</Link>
							<Link href='/contact-us'>
								<a
									href="#"
									className="inline-flex items-center text-center justify-center rounded-md border border-transparent px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base font-medium text-gray-700 shadow-sm bg-[#ffcc29] hover:bg-[#fad45a]"
								>
									Learn More
								</a>
							</Link>
						</div>
					</div>
				</Modal>
			</div>
			
			<div className='z-40'>
				<Layout open={open}>
					<span className='fixed bottom-[25px] right-[20px] z-[1000]'>
						<WhatsAppButton message={""}/>
					</span>
					<Hero/>
					<LogoCloud/>
					<Features/>
					<Amenities/>
					<Awards/>
					<Reviews/>
					<Faqs/>
					<Contact/>
				</Layout>
			</div>
		</div>
	)
}
