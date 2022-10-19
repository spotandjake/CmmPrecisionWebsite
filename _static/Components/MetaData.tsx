import Head from 'next/head';
import { useRouter } from 'next/router';

interface Props {
  PageTitle: string;
}
const MetaData = ({ PageTitle }: Props) => {
  const router = useRouter();
  return (
    <Head>
      <link rel="canonical" href={`https://cmmprecision.ca${router.pathname}`} />
      <title>{`Cmm Precision || ${PageTitle}`}</title>
      <meta name="description" content="Cmm Precision offering quality services that suit your need. We deal in quality and measurement services." />
      <meta name="keywords" content="Cmm, Precision, Oshawa, Toronto, GTA, Ontario, Metrology, Measurement, Reverse Engineering, Mechanical, Measure" />
      <meta name="author" content="Dave Follest" />
      <link rel="icon" href={'/favicon.svg'} />
    </Head>
  );
};

export default MetaData;
