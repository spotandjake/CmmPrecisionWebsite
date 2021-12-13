// Styles
import styles from '../_static/Style/Pages/Index.module.scss';
// Components
import MetaData from '../_static/Components/MetaData';
import Hero from '../_static/Components/Hero';
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
                <img src="./Images/About.jpg" alt="Cmm Image" />
              </picture>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus quam leo, et tincidunt risus porttitor ut. Aenean enim magna, volutpat in odio nec, pretium sagittis lacus. Integer non elit a dolor maximus vehicula quis id dolor. Ut malesuada elit quis ante volutpat, nec finibus justo interdum. Nulla porta leo non enim congue sagittis. Mauris aliquam porttitor dui nec fermentum. Donec scelerisque ex vel ipsum vulputate, at egestas dolor lobortis. Nullam tristique egestas rhoncus.
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>
        {/* Experience */}
        <div className={styles.Article}>
          <h3>Experience</h3>
          <div className={styles.gridCol2}>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis tellus pellentesque, eleifend nisl in, auctor nunc. Aliquam vulputate non nibh sit amet congue. Fusce quis finibus nulla. Aenean non hendrerit tellus, ac fringilla arcu. Aliquam magna ipsum, finibus et est sed, porta bibendum lacus. Sed dignissim metus risus. Duis porta rhoncus enim, vehicula vulputate justo tristique ac. Nulla ac enim non ex vestibulum tristique. Nulla facilisi. Sed nunc elit, tristique vel porta vel, convallis nec justo.
              </p>
              <p>
                Pellentesque cursus sit amet orci sed tristique. Mauris tellus neque, rutrum ut mauris quis, dapibus varius massa. Suspendisse id elit ex. Maecenas sed ante ut metus porta venenatis. Donec at vulputate sem, non eleifend purus. Aliquam dictum vestibulum tempus. Proin nec porta justo. Etiam nec laoreet tellus. Aliquam scelerisque, nisi nec dignissim condimentum, lacus ex fermentum erat, quis vestibulum elit diam quis felis.
              </p>
            </div>
            <div>
              <picture>
                <img src="./Images/Experience.jpg" alt="Cmm Image" />
              </picture>
            </div>
          </div>
        </div>
        {/* Services */}
        <div className={styles.Article}>
          <h3>Services</h3>
          <div className={styles.GridCards3}>
            <div className={styles.Card}>
              <span className={styles.CardOverlay}>Fixture Certification</span>
              {/* TODO: Replace The Photo */}
              <picture>
                <img src="./Images/Hero.jpg" alt="Fixture Being Certified" />
              </picture>
            </div>
            <div className={styles.Card}>
              <span className={styles.CardOverlay}>Part Inspection</span>
              <picture>
                <img src="./Images/About.jpg" alt="Part Inspection" />
              </picture>
            </div>
            <div className={styles.Card}>
              <span className={styles.CardOverlay}>Consultation</span>
              {/* TODO: Replace The Photo */}
              <picture>
                <img src="./Images/Hero.jpg" alt="Consultation" />
              </picture>
            </div>
            <div className={styles.Card}>
              <span className={styles.CardOverlay}>On Site Inspection</span>
              {/* TODO: Replace The Photo */}
              <picture>
                <img src="./Images/Hero.jpg" alt="On Site Inspection" />
              </picture>
            </div>
            <div className={styles.Card}>
              <span className={styles.CardOverlay}>Reverse Engineering</span>
              {/* TODO: Replace The Photo */}
              <picture>
                <img src="./Images/Hero.jpg" alt="Reverse Engineering" />
              </picture>
            </div>
            <div className={styles.Card}>
              <span className={styles.CardOverlay}>Part Rework &amp; Sorting</span>
              {/* TODO: Replace The Photo */}
              <picture>
                <img src="./Images/Hero.jpg" alt="TODO: Add Alternate" />
              </picture>
            </div>
          </div>
        </div>
        {/* Equipment */}
        <div className={styles.Article}>
          <h3>Equipment</h3>
          <div className={styles.GridCards2}>
            <div className={[ styles.Card, styles.EquipmentCard ].join(' ')}>
              <span className={styles.CardOverlay}>Cmm Brown &amp; Sharpe</span>
              <picture>
                <img src="./Images/cmm.jpg" alt="Cmm" />
              </picture>
            </div>
            <div className={[ styles.Card, styles.EquipmentCard ].join(' ')}>
              <span className={styles.CardOverlay}>Romor Arm</span>
              {/* TODO: Replace The Photo */}
              <picture>
                <img src="./Images/romor arm.jpg" alt="Romor Arm" />
              </picture>
            </div>
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
