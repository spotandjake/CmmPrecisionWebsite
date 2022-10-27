import styles from '../_static/Style/Pages/About.module.scss';
// Images
import CmmImage from '../public/Images/cmm.webp';
// Components
import Image from 'next/future/image';
import MetaData from '../_static/Components/MetaData';
import Header from '../_static/Components/Header';
import Footer from '../_static/Components/Footer';
import Hero from '../_static/Components/Hero';
// import ImageCard from '../_static/Components/ImageCard';
// About Content
const alphabetSort = (arr: string[]) => arr.sort();
const lengthSort = (arr: string[]) => arr.sort((a, b) => b.length - a.length);
const alphabetlengthSort = (arr: string[]) =>
  arr.sort((a, b) => a.localeCompare(b) * 10 + b.length - a.length);
const aboutContenRowCount = 12;
const aboutContent = [
  'Cmm Programming And Operating',
  'Consulting Fixturing And Prototyping',
  'Gauge R&R\'s',
  'Co-Relation Study\'s',
  'Supply Quality Documentation',
  'Inspection Sheets',
  'Calibration Certificates',
  'Process / Product Audit Information',
  'Reverse Engineering',
  '3rd Part Fixture Certification',
  'Tooling And Parts Measurement',
  'Supports All PPAP, APQP, And Quality Activities',
  'Cad Modeling',
  'Recommendations',
  'Product Development Consulting',
  'Process Development Consulting',
  'General Consulting',
  '3rd Party Sorting',
  '3rd Party Rework',
];
// About Page
const About = () => {
  // Build The Offers Area
  const columns = [];
  const sortedContent = alphabetlengthSort(aboutContent);
  for (let i = 0; i < sortedContent.length; i += aboutContenRowCount) {
    const chunk = lengthSort(sortedContent.slice(i, i + aboutContenRowCount));
    // Build it
    columns.push(
      <div className={styles.columns}>
        <ul>
          {chunk.map((v) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      </div>
    );
  }
  // Return Element
  return (
    <section className={styles.container}>
      <MetaData PageTitle="About Us" />
      {/* Header */}
      <Header Active="About" />
      {/* Hero */}
      <Hero>
        <h2>About Us</h2>
      </Hero>
      {/* Content Section */}
      <section className={styles.aboutSection}>
        {/* About Area */}
        <div className={styles.flexGrid}>
          <div>
            <h2>About Us</h2>
            <p>
              &ensp;With over 30 years of experience in the measurement field,
              we have the ability to provide a diverse range of quality services
              to our clients. Cmm Precision offers a wide array of quality
              services to many clients in the automotive, aerospace, medical,
              and many other industries.
            </p>
            <h3>FOLLEST CMM &amp; PRECISION TOOLING OFFERS</h3>
            <div className={styles.flexGrid}>{columns}</div>
          </div>
          <div className={styles.pictureBox}>
            <Image
              src={CmmImage}
              alt="Cmm Image"
              fill
            />
            {/* <picture>
              <source srcSet={'/Images/cmm.webp'} type="image/webp" />
              <source srcSet={'/Images/cmm.jpg'} type="image/jpeg" />
              <img src={'/Images/cmm.jpg'} alt="Cmm Image" />
            </picture> */}
          </div>
        </div>
        {/* Our Team */}
        {/* <div>
          <h3>Our Team</h3>
          <div className={styles.flexGrid}>
            <ImageCard ImagePath={'/Images/Hero.jpg'} OverlayText={'Dave Follest'} />
          </div>
        </div> */}
      </section>
      {/* Footer */}
      <Footer />
    </section>
  );
};
export default About;
