// Styles
import '../_static/Style/Theme/Dark.scss';
import '../_static/Style/Global.scss';
// Imports
import { GoogleAnalytics } from 'nextjs-google-analytics';
// Types
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
