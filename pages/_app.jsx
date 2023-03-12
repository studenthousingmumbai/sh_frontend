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
    <GoogleOAuthProvider clientId={google_client_id}>
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  )
}

export default MyApp
