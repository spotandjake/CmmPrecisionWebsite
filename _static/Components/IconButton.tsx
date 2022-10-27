import styles from '../Style/Components/IconButton.module.scss';
import Image from 'next/image';

interface Props {
  buttonIcon: string; // TODO: Determine a type for this
  altText: string;
  onClick: () => void;
}
const IconButton = ({ buttonIcon, altText, onClick }: Props) => {
  return (
    <button
      className={styles.IconButton}
      aria-label={altText}
      onClick={(evt) => onclick}
    >
      <Image
        src={buttonIcon}
        alt={altText}
        fill
      />
    </button>
  );
};

export default IconButton;
