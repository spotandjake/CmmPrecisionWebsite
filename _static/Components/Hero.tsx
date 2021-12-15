import styles from '../Style/Components/Hero.module.scss';

interface Props {
  children: JSX.Element[] | JSX.Element;
  Fullscreen?: Boolean ;
}
const Hero = ({ children, Fullscreen = false }: Props) => {
  return (
    <section className={[ styles.hero, Fullscreen ? styles.fullScreen : '' ].join(' ')}>
      <div>
        <div>
          {children}
        </div>
      </div>
      <picture className={styles.Overlay}>
        <source srcSet={'/Images/Hero.webp'} type="image/webp" />
        <source srcSet={'/Images/Hero.jpg'} type="image/jpeg" />
        <img src={'/Images/Hero.jpg'} alt="Hero Image" />
      </picture>
    </section>
  );
};

export default Hero;
