import { NextPageContext } from 'next';
import Link from 'next/link';
// Components
import MetaData from '../_static/Components/MetaData';
import Header from '../_static/Components/Header';
import Hero from '../_static/Components/Hero';

const Error = ({ statusCode }: { statusCode: number }) => {
  return (
    <section>
      <MetaData PageTitle='Error Page' />
      {/* Header */}
      <Header Active='None' />
      {/* Hero */}
      <Hero>
        <h2>{`A ${statusCode} Error Occurred`}</h2>
        <Link href="/" passHref={true}><button>Return To Home</button></Link>
      </Hero>
    </section>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};


export default Error;
