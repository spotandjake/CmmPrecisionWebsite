import Link from 'next/link';
// Components
import MetaData from '../_static/Components/MetaData';
import Header from '../_static/Components/Header';
import Hero from '../_static/Components/Hero';

const ComingSoon = () => {
  return (
    <section>
      <MetaData PageTitle='ComingSoon' />
      {/* Header */}
      <Header Active='None' />
      {/* Hero */}
      <Hero>
        <h2>This Page is Coming Soon</h2>
        <Link href="/" passHref={true}><button>Return To Home</button></Link>
      </Hero>
    </section>
  );
};


export default ComingSoon;
