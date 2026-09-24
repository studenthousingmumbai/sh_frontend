import { Head, Html, Main, NextScript } from "next/document";

// Analytics / chat scripts now live in _app.jsx (via next/script) and fonts
// are loaded through next/font, so this file only keeps static head tags.
export default function Document() {
  return (
    <Html className="h-full bg-white antialiased" lang="en">
      <Head>
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="TdH2yMKePDJB-Vb8XETapJ-ad9iQF7dCnPKwIk0PJQw"
        />
        <link rel="icon" href="/sh_logo.png" />
      </Head>

      <body className="h-full">
        {/* Google Tag Manager (noscript) — must stay in <body> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TJ4M6SS3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <div id="modal-root"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}