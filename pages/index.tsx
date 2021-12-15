// Styles
import styles from '../_static/Style/Pages/Index.module.scss';
// Components
import Link from 'next/link';
import MetaData from '../_static/Components/MetaData';
import Hero from '../_static/Components/Hero';
import ImageCard from '../_static/Components/ImageCard';
import Header from '../_static/Components/Header';
import Footer from '../_static/Components/Footer';

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
                <source srcSet={require('../_static/Images/About.jpg?webp')} type="image/webp" />
                <source srcSet={require('../_static/Images/About.jpg')} type="image/jpeg" />
                <img src={require('../_static/Images/About.jpg')} alt='Cmm Image' />
              </picture>
            </div>
            <div className={styles.gridText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus quam leo, et tincidunt risus porttitor ut. Aenean enim magna, volutpat in odio nec, pretium sagittis lacus. Integer non elit a dolor maximus vehicula quis id dolor. Ut malesuada elit quis ante volutpat, nec finibus justo interdum. Nulla porta leo non enim congue sagittis. Mauris aliquam porttitor dui nec fermentum. Donec scelerisque ex vel ipsum vulputate, at egestas dolor lobortis. Nullam tristique egestas rhoncus.
              </p>
              <Link href="/ComingSoon" passHref={true}><button>Read More</button></Link>
            </div>
          </div>
        </div>
        {/* Experience */}
        <div className={styles.Article}>
          <h3>Experience</h3>
          <div className={styles.gridCol2}>
            <div>
              <p className={styles.gridText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis tellus pellentesque, eleifend nisl in, auctor nunc. Aliquam vulputate non nibh sit amet congue. Fusce quis finibus nulla. Aenean non hendrerit tellus, ac fringilla arcu. Aliquam magna ipsum, finibus et est sed, porta bibendum lacus. Sed dignissim metus risus. Duis porta rhoncus enim, vehicula vulputate justo tristique ac. Nulla ac enim non ex vestibulum tristique. Nulla facilisi. Sed nunc elit, tristique vel porta vel, convallis nec justo.
              </p>
              <p>
                Pellentesque cursus sit amet orci sed tristique. Mauris tellus neque, rutrum ut mauris quis, dapibus varius massa. Suspendisse id elit ex. Maecenas sed ante ut metus porta venenatis. Donec at vulputate sem, non eleifend purus. Aliquam dictum vestibulum tempus. Proin nec porta justo. Etiam nec laoreet tellus. Aliquam scelerisque, nisi nec dignissim condimentum, lacus ex fermentum erat, quis vestibulum elit diam quis felis.
              </p>
            </div>
            <div>
              <picture>
                <source srcSet={require('../_static/Images/Experience.jpg?webp')} type="image/webp" />
                <source srcSet={require('../_static/Images/Experience.jpg')} type="image/jpeg" />
                <img src={require('../_static/Images/Experience.jpg')} alt='Cmm Image' />
              </picture>
            </div>
          </div>
        </div>
        {/* Services */}
        <div className={styles.Article}>
          <h3>Services</h3>
          <div className={styles.GridCards3}>
            {/* TODO: Replace Image */}
            <ImageCard OverlayText={'Fixture Certification'} >
              <picture>
                <source srcSet={require('../_static/Images/Hero.jpg?webp')} type="image/webp" />
                <source srcSet={require('../_static/Images/Hero.jpg')} type="image/jpeg" />
                <img src={require('../_static/Images/Hero.jpg')} alt='Fixture Certification' />
              </picture>
            </ImageCard>
            <ImageCard OverlayText={'Part Inspection'} >
              <picture>
                <source srcSet={require('../_static/Images/About.jpg?webp')} type="image/webp" />
                <source srcSet={require('../_static/Images/About.jpg')} type="image/jpeg" />
                <img src={require('../_static/Images/About.jpg')} alt='Part Inspection' />
              </picture>
            </ImageCard>
            {/* TODO: Replace Image */}
            <ImageCard OverlayText={'Consultation'} >
              <picture>
                <source srcSet={require('../_static/Images/Hero.jpg?webp')} type="image/webp" />
                <source srcSet={require('../_static/Images/Hero.jpg')} type="image/jpeg" />
                <img src={require('../_static/Images/Hero.jpg')} alt='Consultation' />
              </picture>
            </ImageCard>
            {/* TODO: Replace Image */}
            <ImageCard OverlayText={'On Site Inspection'} >
              <picture>
                <source srcSet={require('../_static/Images/Hero.jpg?webp')} type="image/webp" />
                <source srcSet={require('../_static/Images/Hero.jpg')} type="image/jpeg" />
                <img src={require('../_static/Images/Hero.jpg')} alt='On Site Inspection' />
              </picture>
            </ImageCard>
            {/* TODO: Replace Image */}
            <ImageCard OverlayText={'Reverse Engineering'} >
              <picture>
                <source srcSet={require('../_static/Images/Hero.jpg?webp')} type="image/webp" />
                <source srcSet={require('../_static/Images/Hero.jpg')} type="image/jpeg" />
                <img src={require('../_static/Images/Hero.jpg')} alt='Reverse Engineering' />
              </picture>
            </ImageCard>
            {/* TODO: Replace Image */}
            <ImageCard OverlayText={'Part Rework & Sorting'} >
              <picture>
                <source srcSet={require('../_static/Images/Hero.jpg?webp')} type="image/webp" />
                <source srcSet={require('../_static/Images/Hero.jpg')} type="image/jpeg" />
                <img src={require('../_static/Images/Hero.jpg')} alt='Part Rework & Sorting' />
              </picture>
            </ImageCard>
          </div>
        </div>
        {/* Equipment */}
        <div className={styles.Article}>
          <h3>Equipment</h3>
          <div className={styles.GridCards2}>
            <ImageCard OverlayText={'Cmm Brown & Sharpe'}>
              <picture>
                <source srcSet={require('../_static/Images/cmm.jpg?webp')} type="image/webp" />
                <source srcSet={require('../_static/Images/cmm.jpg')} type="image/jpeg" />
                <img src={require('../_static/Images/cmm.jpg')} alt='Cmm Brown & Sharpe' />
              </picture>
            </ImageCard>
            <ImageCard OverlayText={'Romor Arm'}>
              <picture>
                <source srcSet={require('../_static/Images/romor arm.jpg?webp')} type="image/webp" />
                <source srcSet={require('../_static/Images/romor arm.jpg')} type="image/jpeg" />
                <img src={require('../_static/Images/romor arm.jpg')} alt='Romor Arm' />
              </picture>
            </ImageCard>
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
