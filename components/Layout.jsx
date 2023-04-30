import Header from './Header';
import Footer from './Footer'; 

export default function Layout(props) {
  return (
    <div>
      <Header/>
      <div className='px-4 sm:px-16 '> 
        { props.children }
      </div>
			<Footer/>
    </div>
  )
}