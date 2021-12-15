import Link from 'next/link';
// Components
import MetaData from '../_static/Components/MetaData';
import Header from '../_static/Components/Header';
import Hero from '../_static/Components/Hero';

const Error = () => {
  return (
    <section>
      <MetaData PageTitle='404 Page' />
      {/* Header */}
      <Header Active='None' />
      {/* Hero */}
      <Hero>
        <h2>{'A 404 Error Occurred'}</h2>
        <Link href="/" passHref={true}><button>Return To Home</button></Link>
      </Hero>
    </section>
  );
};
export default Error;
