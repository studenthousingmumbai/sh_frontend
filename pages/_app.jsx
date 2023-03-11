import '../styles/globals.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
      (await import('flowbite')).default;
    };
    use();
  }, []);
  
  return (
    <GoogleOAuthProvider clientId="135627911225-famonrqmd3uclb46loag3oeg53t7fbq5.apps.googleusercontent.com">
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  )
}

export default MyApp
