// Styles
import '../_static/Style/Theme/Dark.scss';
import '../_static/Style/Global.scss';
// Imports
import { GoogleAnalytics, event } from 'nextjs-google-analytics';
// Types
import type { AppProps, NextWebVitalsMetric } from 'next/app';

export function reportWebVitals({ id, name, label, value }: NextWebVitalsMetric) {
  event(name, {
    category: label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    label: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <script
        id="msClarity"
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
