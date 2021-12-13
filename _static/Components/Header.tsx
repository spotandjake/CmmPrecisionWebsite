import styles from '../Style/Components/Header.module.scss';
import Link from 'next/link';

interface Props {
  Active: string;
}
const Header = ({ Active }: Props) => {
  return (
    <header className={styles.container}>
      <h1>Cmm Precision</h1>
      <nav className={styles.navContainer}>
        <ul>
          <li className={Active == 'Home' ? styles.Active : ''}>
            <Link href="/">Home</Link>
          </li>
          <li className={Active == 'About' ? styles.Active : ''}>
            <Link href="/ComingSoon">About</Link>
          </li>
          <li className={Active == 'Certificate' ? styles.Active : ''}>
            <Link href="/ComingSoon">Certifications</Link>
          </li>
        </ul>
      </nav>
      <Link href="/ComingSoon" passHref={true}><button>Contact Us</button></Link>
    </header>
  );
};

export default Header;
