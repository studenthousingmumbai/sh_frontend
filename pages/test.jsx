import { useState } from 'react'
import Head from 'next/head';
import Modal from '../components/common/Modal';
import VirtualTour from '../components/common/VirtualTour';

export default function test() {
  const [open, setOpen] = useState(false); 

  return (
    <div>
      <button onClick={() => setOpen(true)}>open 360 degree tour</button>
      <Modal title={"360 degree virtual tour"} open={open} onClose={() => setOpen(false)}>
        <VirtualTour 
          width={'100%'}
          height='500px' 
          virtual_tour_link={"https://www.google.com/maps/embed?pb=!4v1679126390569!6m8!1m7!1sCAoSLEFGMVFpcE5KUno3Vm9zU2tRLU1wa3NOZGEwNEFZRE5EaHpQR3R6TmhQWERn!2m2!1d19.10241309!2d72.83579384!3f195.21181298239262!4f-52.856295579796324!5f0.4000000000000002"}
        />
      </Modal>
    </div>
  );
}
