import styles from '../Style/Components/Hero.module.scss';
import Image from 'next/future/image';
import HeroImage from '../../public/Images/Hero.webp';
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
      <Image
        className={styles.Overlay}
        src={HeroImage}
        alt="Hero Image"
        fill
        priority
      />
      {/* <picture className={styles.Overlay}>
        <source srcSet={'/Images/Hero.webp 1x /Images/Hero_Large.webp 2x'} type="image/webp" />
        <source srcSet={'/Images/Hero.jpg'} type="image/jpeg" />
        <img src={'/Images/Hero.jpg'} alt="Hero Image" width={1200} height={700} />
      </picture> */}
    </section>
  );
};

export default Hero;
