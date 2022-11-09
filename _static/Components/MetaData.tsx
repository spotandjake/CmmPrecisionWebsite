import Head from 'next/head';
import { useRouter } from 'next/router';

interface Props {
  PageTitle: string;
}

const structuredData = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  'image': [
    'https://cmmprecision.ca/images/cmm.jpg',
    'https://cmmprecision.ca/images/About.jpg',
    'https://cmmprecision.ca/images/Experience.jpg',
    'https://cmmprecision.ca/images/romorArm.jpg'
  ],
  'name': 'Cmm Precision',
  'description': 'Cmm Precision Offers Quality Services That Suite Your Needs.',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': '910 Rennasance Dr',
    'addressLocality': 'Oshawa',
    'addressRegion': 'Ontario',
    'postalCode': 'L1K 8K4',
    'addressCountry': 'Canada'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 43.857110,
    'longitude': -78.860980
  },
  'url': 'http://www.cmmprecision.ca/',
  'telephone': '+12893147770'
});

const MetaData = ({ PageTitle }: Props) => {
  const router = useRouter();
  return (
    <Head>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{
          __html: structuredData,
        }}
      />
      <link rel="canonical" href={`https://cmmprecision.ca${router.pathname}`} />
      <title>{`Cmm Precision || ${PageTitle}`}</title>
      <meta name="description" content="Cmm Precision offering quality services that suit your need. We deal in quality and measurement services." />
      <meta name="keywords" content="Cmm, Precision, Oshawa, Toronto, GTA, Ontario, Metrology, Measurement, Reverse Engineering, Mechanical, Measure" />
      <meta name="author" content="Dave Follest" />
      <link rel="icon" href={'/favicon.svg'} />
      {/* Open Graph */}
      <meta property="og:title" content={`Cmm Precision || ${PageTitle}`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://cmmprecision.ca/" />
      <meta property="og:image" content="https://cmmprecision.ca/Images/Hero.jpg" />
    </Head>
  );
};

export default MetaData;
