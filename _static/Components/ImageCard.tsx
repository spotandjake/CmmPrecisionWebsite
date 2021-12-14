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
        <img src={ImagePath} alt={OverlayText} />
      </picture>
    </div>
  );
};

export default ImageCard;
