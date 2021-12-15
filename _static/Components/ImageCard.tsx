import styles from '../Style/Components/ImageCard.module.scss';

interface Props {
  ImagePath: string;
  OverlayText: string;
}
const ImageCard = ({ ImagePath, OverlayText }: Props) => {
  return (
    <div className={styles.Card}>
      <span className={styles.CardOverlay}>{OverlayText}</span>
      <picture>
        <source srcSet={`${ImagePath.split('.').slice(0, -1).join('.')}.webp`} type="image/webp" />
        <source srcSet={ImagePath} type="image/jpeg" />
        <img src={ImagePath} alt={OverlayText} />
      </picture>
    </div>
  );
};

export default ImageCard;
