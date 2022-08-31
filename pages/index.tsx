// Styles
import styles from '../_static/Style/Pages/Index.module.scss';
// Components
import Link from 'next/link';
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
            <div>
              <picture>
                <source srcSet={'/Images/About.webp'} type="image/webp" />
                <source srcSet={'/Images/About.jpg'} type="image/jpeg" />
                <img src={'/Images/About.jpg'} alt='Cmm Image' />
              </picture>
            </div>
            <div className={styles.gridText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus quam leo, et tincidunt risus porttitor ut. Aenean enim magna, volutpat in odio nec, pretium sagittis lacus. Integer non elit a dolor maximus vehicula quis id dolor. Ut malesuada elit quis ante volutpat, nec finibus justo interdum. Nulla porta leo non enim congue sagittis. Mauris aliquam porttitor dui nec fermentum. Donec scelerisque ex vel ipsum vulputate, at egestas dolor lobortis. Nullam tristique egestas rhoncus.
              </p>
              <Link href={Navigation.Pages['About']} passHref={true}><button>Read More</button></Link>
            </div>
          </div>
        </div>
        {/* Experience */}
        <div className={[styles.Article, styles.Desktop].join(' ')}>
          <h3>Experience</h3>
          <div className={styles.gridCol2}>
            <div>
              <p className={styles.gridText}>
                With over 20 years of experience in the field, we have the ability to provide a wide range of services to our clients and ensure you are getting quality measurements. Offering a wide range of services to suit your needs along with a wide range of tools and equipment, we are able to provide you with quality results every time.
              </p>
              <p>
                Having done jobs for large multinational corporations and small local business CMM Precision is perfect for any quality services you may need. 
              </p>
            </div>
            <div>
              <picture>
                <source srcSet={'/Images/Experience.webp'} type="image/webp" />
                <source srcSet={'/Images/Experience.jpg'} type="image/jpeg" />
                <img src={'/Images/Experience.jpg'} alt='Cmm Image' />
              </picture>
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
