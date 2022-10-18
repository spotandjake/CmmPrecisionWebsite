import Head from 'next/head';

interface Props {
  PageTitle: string;
}
const MetaData = ({ PageTitle }: Props) => {
  return (
    <Head>
      <title>{`Cmm Precision || ${PageTitle}`}</title>
      <meta name="description" content="Cmm Precision offering quality services that suit your need. We deal in quality and measurement services." />
      <meta name="keywords" content="Cmm, Precision, Oshawa, Toronto, GTA, Ontario, Metrology, Measurement, Reverse Engineering, Mechanical, Measure" />
      <meta name="author" content="Dave Follest" />
      <link rel="icon" href={'/favicon.svg'} />
    </Head>
  );
};

export default MetaData;
