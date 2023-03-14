import '../styles/globals.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const google_client_id = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  useEffect(() => {
    window.addEventListener('phx:page-loading-stop', (event) => {
      // trigger flowbite events
      window.document.dispatchEvent(new Event("DOMContentLoaded", {
        bubbles: true,
        cancelable: true
      }));
    });
    
    const use = async () => {
      (await import('tw-elements')).default;
      (await import('flowbite')).default;
    };
    use();
  }, []);
  
  return (
    <GoogleOAuthProvider clientId={google_client_id}>
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  )
}

export default MyApp
