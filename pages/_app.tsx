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
      {/* <script
        id="msClarity"
        defer
        dangerouslySetInnerHTML={{
          __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){
              (c[a].q=c[a].q||[]).push(arguments)
            };
            t=l.createElement(r);
            t.async=1;
            t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
            y=l.getElementsByTagName(r)[0];
            y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "e4pkw0pjg0");
        `,
        }}
      /> */}
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
