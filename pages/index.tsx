// Styles
import styles from '../_static/Style/Pages/Index.module.scss';
// Images
import AboutImage from '../public/Images/About.webp';
import ExperienceImage from '../public/Images/Experience.webp';
// Components
import Link from 'next/link';
import Image from 'next/image';
import MetaData from '../_static/Components/MetaData';
import Hero from '../_static/Components/Hero';
import ImageCard from '../_static/Components/ImageCard';
import Header from '../_static/Components/Header';
import Footer from '../_static/Components/Footer';
import { Navigation } from '../_static/Navigation';

const Home = () => {
  return (
    <section>
      <MetaData PageTitle='Home' />
      {/* Header */}
      <Header Active='Home' />
      {/* Hero */}
      <Hero>
        <h2>Cmm Precision</h2>
      </Hero>
      {/* Content */}
      <main>
        {/* About */}
        <div className={styles.Article}>
          <h3>About</h3>
          <div className={styles.gridCol2}>
            <div className={styles.pictureBox}>
              <Image
                src={AboutImage}
                alt="Image Of Cmm With Part"
                width={650}
                height={375}
              />
              {/* <picture>
                <source srcSet={'/Images/About.webp'} type="image/webp" />
                <source srcSet={'/Images/About.jpg'} type="image/jpeg" />
                <img src={'/Images/About.jpg'} alt='Cmm Image' />
              </picture> */}
            </div>
            <div className={styles.gridText}>
              <p>
                With over 30 years of experience in the measurement field, we have the ability to provide a diverse range of quality services to our clients. Cmm Precision offers a wide array of quality services to many clients in the automotive, aerospace, medical, and many other industries.
              </p>
              <Link href={Navigation.Pages['About Us']} passHref={true}><button>More About Us</button></Link>
            </div>
          </div>
        </div>
        {/* Experience */}
        <div className={[styles.Article, styles.Desktop].join(' ')}>
          <h3>Experience</h3>
          <div className={styles.gridCol2}>
            <div>
              <p className={styles.gridText}>
                Cmm Precision has been serving clients for over 30 years with quality measurements and services. Allowing you to focus on your business while we focus on the quality of your products.
              </p>
              <p>
                Having done jobs for large multinational corporations and small local business Cmm Precision is perfect for any quality services you may need. 
              </p>
            </div>
            <div className={styles.pictureBox}>
              <Image
                src={ExperienceImage}
                alt="Image Of Cmm With Part"
                width={650}
                height={375}
              />
              {/* <picture>
                <source srcSet={'/Images/Experience.webp'} type="image/webp" />
                <source srcSet={'/Images/Experience.jpg'} type="image/jpeg" />
                <img src={'/Images/Experience.jpg'} alt='Cmm Image' />
              </picture> */}
            </div>
          </div>
        </div>
        {/* Services */}
        <div className={styles.Article}>
          <h3>Services</h3>
          <div className={styles.GridCards3}>
            {/* TODO: Replace Image */}
            <ImageCard ImagePath={'/Images/Hero.jpg'} OverlayText={'Fixture Certification'} />
            <ImageCard ImagePath={'/Images/About.jpg'} OverlayText={'Part Inspection'} />
            {/* TODO: Replace Image */}
            <ImageCard ImagePath={'/Images/Hero.jpg'} OverlayText={'Consultation'} />
            {/* TODO: Replace Image */}
            <ImageCard ImagePath={'/Images/Hero.jpg'} OverlayText={'On Site Inspection'} />
            {/* TODO: Replace Image */}
            <ImageCard ImagePath={'/Images/Hero.jpg'} OverlayText={'Reverse Engineering'} />
            {/* TODO: Replace Image */}
            <ImageCard ImagePath={'/Images/Hero.jpg'} OverlayText={'Part Rework & Sorting'} />
          </div>
        </div>
        {/* Equipment */}
        <div className={styles.Article}>
          <h3>Equipment</h3>
          <div className={styles.GridCards2}>
            <ImageCard ImagePath={'/Images/cmm.jpg'} OverlayText={'Brown & Sharp One CMM'} />
            <ImageCard ImagePath={'/Images/romorArm.jpg'} OverlayText={'Infinity 2.0 Romor Arm'} />
          </div>
        </div>
      </main>
      {/* Pre Footer */}
      {/* Footer */}
      <Footer />
    </section>
  );
};

export default Home;
