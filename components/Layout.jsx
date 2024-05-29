import Header from './Header';
import Footer from './Footer'; 
import Marquee from './MarqeeText';
import { useState } from 'react';

export default function Layout(props) {
  const [marqueeOpen, setMarqueeOpen] = useState(true)
  return (
    <div className=''>
      <div className={`z-40 ${props?.open === false ? 'relative sticky top-0' : ''}`}>
        {marqueeOpen && (
          <Marquee
            text={"This is some sample marquee text"}
            marqueeOpen={marqueeOpen}
            setMarqueeOpen={setMarqueeOpen}
          />
        )}
        <Header/>
      </div>
      <div className='z-30'> 
        { props.children }
      </div>
			<Footer/>
    </div>
  )
}