import React from 'react'
import Head from 'next/head'

export default ({ virtual_tour_link, width, height }) => {
  return (
    <>
      <Head>
        <script
          async
          defer
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}`}
        />
      </Head> 
      
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={virtual_tour_link}
          style={{ border: 0, width, height }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen={true}
        />
      </div>
    </>
  );
};