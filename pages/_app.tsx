// Styles
import '../_static/Style/Theme/Dark.scss';
import '../_static/Style/Global.scss';
// Imports
import Script from 'next/script';
// Types
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google Analytics */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-127375505-1"></Script>
      <script
        defer
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'UA-127375505-1');
        `,
        }}
      />
      {/* Microsoft Clarity */}
      <script
        id="msClarity"
        defer
        dangerouslySetInnerHTML={{
          __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "e4pkw0pjg0");
        `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
