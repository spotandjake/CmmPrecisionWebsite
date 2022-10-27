import styles from '../Style/Components/ImageCard.module.scss';
import Image from 'next/image';

interface Props {
  ImagePath: string;
  OverlayText: string;
}
const ImageCard = ({ ImagePath, OverlayText }: Props) => {
  return (
    <div className={styles.Card}>
      <span className={styles.CardOverlay}>{OverlayText}</span>
      <div className={styles.pictureBox}>
        <Image
          src={`${ImagePath.split('.').slice(0, -1).join('.')}.webp`}
          alt={OverlayText}
          fill
        />
      </div>
      {/* <picture>
        <source srcSet={`${ImagePath.split('.').slice(0, -1).join('.')}.webp`} type="image/webp" />
        <source srcSet={ImagePath} type="image/jpeg" />
        <img src={ImagePath} alt={OverlayText} />
      </picture> */}
    </div>
  );
};

export default ImageCard;
