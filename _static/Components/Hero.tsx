import styles from '../Style/Components/Hero.module.scss';

interface Props {
  children: JSX.Element[] | JSX.Element;
}
const Hero = ({ children }: Props) => {
  // TODO: Improve the footer
  return (
    <section className={styles.hero}>
      <div>
        <div>
          {children}
        </div>
      </div>
      <picture className={styles.Overlay}>
        <img src="./Images/Hero.jpg" alt="Hero Image" />
      </picture>
    </section>
  );
};

export default Hero;
