import styles from '../Style/Components/ImageCard.module.scss';

interface Props {
  ImagePath?: string;
  OverlayText: string;
  children?: JSX.Element;
}
const ImageCard = ({ ImagePath, OverlayText, children }: Props) => {
  return (
    <div className={styles.Card}>
      <span className={styles.CardOverlay}>{OverlayText}</span>
      {
        ImagePath ? (
          <picture>
            <img src={ImagePath} alt={OverlayText} />
          </picture>
        ) : children
      }
    </div>
  );
};

export default ImageCard;
