import { NextPageContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
// Styles
import styles from '../_static/Style/Pages/Error.module.scss';
// Components
import Header from '../_static/Components/Header';

const Error = ({ statusCode }: { statusCode: number }) => {
  return (
    <section>
      <Head>
        <title>Cmm Precision || Home</title>
        {/* TODO: */}
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <section className={styles.hero}>
        <div>
          <div>
            <h2>{`A ${statusCode} Error Occurred`}</h2>
            <button>
              <Link href="/">Return To Home</Link>
            </button>
          </div>
        </div>
        <picture className={styles.Overlay}>
          <img src="./Images/Hero.jpg" />
        </picture>
      </section>
    </section>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};


export default Error;
