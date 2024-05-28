import Header from './Header';
import Footer from './Footer'; 
import Marquee from './MarqeeText';

export default function Layout(props) {
  return (
    <div>
      <Marquee text={"This is some sample marquee text"}/>
      <Header/>
        <div className=''> 
          { props.children }
        </div>
			<Footer/>
    </div>
  )
}