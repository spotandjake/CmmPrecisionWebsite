// Styles
import '../_static/Style/Theme/Dark.scss';
import '../_static/Style/Global.scss';
// Types
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
