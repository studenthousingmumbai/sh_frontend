import '../styles/globals.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

function MyApp({ Component, pageProps }) {
  const google_client_id = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID

  console.log("Google client id: ", google_client_id);

  return (
    <GoogleOAuthProvider clientId={google_client_id}>
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  )
}

export default MyApp
