import Head from 'next/head';

interface Props {
  PageTitle: string;
}
const MetaData = ({ PageTitle }: Props) => {
  return (
    <Head>
      <title>Cmm Precision || {PageTitle}</title>
      <meta name="description" content="Cmm Precision offering quality services that suit your need. We deal in quality and measurement services." />
      <link rel="icon" href={'/favicon.svg'} />
    </Head>
  );
};

export default MetaData;
