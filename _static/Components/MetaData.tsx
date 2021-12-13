import Head from 'next/head';

interface Props {
  PageTitle: string;
}
const MetaData = ({ PageTitle }: Props) => {
  return (
    <Head>
      <title>Cmm Precision || {PageTitle}</title>
      {/* TODO: Add Description */}
      <meta name="description" content="Cmm Precision Website" />
      {/* TODO: Get A Better Icon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default MetaData;
