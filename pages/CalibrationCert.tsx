import styles from '../_static/Style/Pages/Certification.module.scss';
// Components
import React, { useEffect } from 'react';
import MetaData from '../_static/Components/MetaData';
import Header from '../_static/Components/Header';
import Footer from '../_static/Components/Footer';
import Hero from '../_static/Components/Hero';
import ViewSDKClient from '../_static/Code/ViewSDKClient';
const CertPage = () => {
  useEffect(() => {
    const viewSDKClient = new ViewSDKClient('./certificate.pdf', 'CalibrationCert.pdf', '');
    viewSDKClient.ready().then(() => {
      /* Invoke file preview */
      viewSDKClient.previewFile('pdf-div', {
        /* Pass the embed mode option here */
        embedMode: 'IN_LINE'
      });
    });
  }, []);
  return (
    <section className={styles.container}>
      <MetaData PageTitle='Calibration Cert' />
      {/* Header */}
      <Header Active='Calibration Cert' />
      {/* Hero */}
      <Hero>
        <h2>Calibration Cert</h2>
      </Hero>
      {/* Certification Section */}
      <section className={styles.certSection}>
        <div>
          <div id="pdf-div" className="in-line-div"/>
        </div>
      </section>
      {/* Footer */}
      <Footer />
      {/* Script */}
      <script type="text/javascript" src="https://documentcloud.adobe.com/view-sdk/main.js" async></script>
    </section>
  );
};


export default CertPage;
