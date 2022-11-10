// Styles
import '../_static/Style/Theme/Dark.scss';
import '../_static/Style/Global.scss';
// Types
import type { AppProps, NextWebVitalsMetric } from 'next/app';

export function reportWebVitals({
  id,
  name,
  label,
  value,
}: NextWebVitalsMetric) {
  // @ts-ignore
  window.galite('send', 'event', {
    eventCategory:
      label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    eventAction: name,
    eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google Analytics */}
      <script
        defer
        dangerouslySetInnerHTML={{
          __html: `
          (function(e,t,n,i,s,a,c){e[n]=e[n]||function(){(e[n].q=e[n].q||[]).push(arguments)}
            ;a=t.createElement(i);c=t.getElementsByTagName(i)[0];a.async=true;a.src=s
            ;c.parentNode.insertBefore(a,c)
            })(window,document,"galite","script","https://cdn.jsdelivr.net/npm/ga-lite@2/dist/ga-lite.min.js");

            galite('create', 'UA-127375505-1', 'auto');
            galite('send', 'pageview');
            const terminationEvent = 'onpagehide' in window ? 'pagehide' : 'unload';
            window.addEventListener(terminationEvent, function() {
              galite('send', 'timing', 'JS Dependencies', 'unload')
            });
        `,
        }}
      />
      {/* Microsoft Clarity */}
      <script
        id="msClarity"
        dangerouslySetInnerHTML={{
          __html: `
          (function(c,l,a){
            c[a]=c[a]||function(){
              (c[a].q=c[a].q||[]).push(arguments)
            };
          })(window, document, "clarity");
        `,
        }}
      />
      <script id="msClarity"></script>
      <script async src="./Clarity/tag.js?ref=bwt"></script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
