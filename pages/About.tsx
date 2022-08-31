import styles from '../_static/Style/Pages/About.module.scss';
// Components
import MetaData from '../_static/Components/MetaData';
import Header from '../_static/Components/Header';
import Footer from '../_static/Components/Footer';
import Hero from '../_static/Components/Hero';
// import ImageCard from '../_static/Components/ImageCard';

const About = () => {
  return (
    <section className={styles.container}>
      <MetaData PageTitle='About Us' />
      {/* Header */}
      <Header Active='About' />
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
              &ensp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus quam leo, et tincidunt risus porttitor ut. Aenean enim magna, volutpat in odio nec, pretium sagittis lacus. Integer non elit a dolor maximus vehicula quis id dolor. Ut malesuada elit quis ante volutpat, nec finibus justo interdum. Nulla porta leo non enim congue sagittis. Mauris aliquam porttitor dui nec fermentum. Donec scelerisque ex vel ipsum vulputate, at egestas dolor lobortis. Nullam tristique egestas rhoncus.
            </p>
            <h3>FOLLEST CMM &amp; PRECISION TOOLING OFFERS</h3>
            <div className={styles.flexGrid}>
              <div>
                <ul>
                  <li>
                    Cmm Programming And Operating
                  </li>
                  <li>
                    Consulting Fixturing And Prototyping
                  </li>
                  <li>
                    Gauge R&R's
                  </li>
                  <li>
                    Co-Relation Study's
                  </li>
                  <li>
                    Supply Quality Documentation
                  </li>
                  <li>
                    Inspection Sheets
                  </li>
                  <li>
                    Calibration Certificates
                  </li>
                  <li>
                    Process / Product Audit Information
                  </li>
                  <li>
                    Reverse Engineering
                  </li>
                  <li>
                    3rd Part Fixture Certification
                  </li>
                  <li>
                    Tooling And Parts Measurement
                  </li>
                  <li>
                    Supports All PPAP, APQP, And Quality Activities
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    Cad Modeling
                  </li>
                  <li>
                    Recommendations
                  </li>
                  <li>
                    Product Development Consulting
                  </li>
                  <li>
                    Process Development Consulting
                  </li>
                  <li>
                    General Consulting
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <picture>
              <source srcSet={'/Images/cmm.webp'} type="image/webp" />
              <source srcSet={'/Images/cmm.jpg'} type="image/jpeg" />
              <img src={'/Images/cmm.jpg'} alt='Cmm Image' />
            </picture>
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