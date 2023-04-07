import { useState } from 'react'
import Head from 'next/head';
import Modal from '../components/common/Modal';
// import VirtualTour from '../components/common/VirtualTour';
import Carousel from '../components/common/Carousel';
import VideoPlayer from '../components/common/VideoPlayer';

const images = [
  {
    src: '/female_banner.png',
    alt: 'Image 1',
  },
  {
    src: '/about-us.png', 
    alt: 'Image 2',
  }
];

export default function test() {
  const [open, setOpen] = useState(false); 

  return (
    <div className='p-6'>
      {/* <button onClick={() => setOpen(true)}>open 360 degree tour</button>
      <Modal title={"360 degree virtual tour"} open={open} onClose={() => setOpen(false)}>
        <VirtualTour 
          width={'100%'}
          height='500px' 
          virtual_tour_link={"https://www.google.com/maps/embed?pb=!4v1679126390569!6m8!1m7!1sCAoSLEFGMVFpcE5KUno3Vm9zU2tRLU1wa3NOZGEwNEFZRE5EaHpQR3R6TmhQWERn!2m2!1d19.10241309!2d72.83579384!3f195.21181298239262!4f-52.856295579796324!5f0.4000000000000002"}
        />
      </Modal> */}
      <div className='rounded-lg shadow-lg'>
        <Carousel 
          slideDuration={3000} 
          images={['/about-us.png', 'female_banner.png']}
          width="w-full"
          height="h-[80vh]"
          hideArrows={false}
          animationStyle="slide"
        />
      </div>
      <div className="w-1/2 mx-auto">
      </div>

      <div className="max-w-screen-lg mx-auto">
        <VideoPlayer videoLink={'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'} />
      </div>

    </div>
  );
}
