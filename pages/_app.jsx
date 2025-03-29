import "../styles/globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect } from "react";
import { useRouter } from "next/router";

function FacebookPixel() {
  const router = useRouter();

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("983766016309702");
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  });

  return null;
}

function MyApp({ Component, pageProps }) {
  const google_client_id = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  useEffect(() => {
    window.addEventListener("phx:page-loading-stop", (event) => {
      // trigger flowbite events
      window.document.dispatchEvent(
        new Event("DOMContentLoaded", {
          bubbles: true,
          cancelable: true,
        })
      );
    });

    const use = async () => {
      (await import("tw-elements")).default;
      (await import("flowbite")).default;
    };
    use();
  }, []);

  return (
    <GoogleOAuthProvider clientId={google_client_id}>
      <FacebookPixel />
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  );
}

export default MyApp;
