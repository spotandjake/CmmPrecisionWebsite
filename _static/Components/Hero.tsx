import styles from '../Style/Components/Hero.module.scss';

interface Props {
  children: JSX.Element[] | JSX.Element;
}
const Hero = ({ children }: Props) => {
  return (
    <section className={styles.hero}>
      <div>
        <div>
          {children}
        </div>
      </div>
      <picture className={styles.Overlay}>
        <source srcSet={require('../Images/Hero.jpg?webp')} type="image/webp" />
        <source srcSet={require('../Images/Hero.jpg')} type="image/jpeg" />
        <img src={require('../Images/Hero.jpg')} alt="Hero Image" />
      </picture>
    </section>
  );
};

export default Hero;
