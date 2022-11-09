import styles from '../Style/Components/ImageCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  ImagePath: string;
  OverlayText: string;
  Url?: string;
}
const ImageCard = ({ ImagePath, OverlayText, Url }: Props) => {
  const path = `${ImagePath.split('.').slice(0, -1).join('.')}.webp`;
  if (Url == undefined) {
    return (
      <div className={styles.Card}>
        <span className={styles.CardOverlay}>{OverlayText}</span>
        <div className={styles.pictureBox}>
          <Image src={path} alt={OverlayText} fill />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.Card}>
        <Link href={Url} prefetch={false}>
          <span className={styles.CardOverlay}>{OverlayText}</span>
          <div className={styles.pictureBox}>
            <Image src={path} alt={OverlayText} fill />
          </div>
        </Link>
      </div>
    );
  }
};

export default ImageCard;
