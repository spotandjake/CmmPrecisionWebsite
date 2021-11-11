import styles from '../Style/Components/Header.module.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.container}>
      <h1>Cmm Precision</h1>
      <nav className={styles.navContainer}>
        <ul>
          <li className={styles.Active}>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="">About</Link>
          </li>
          <li>
            <Link href="">Certifications</Link>
          </li>
        </ul>
      </nav>
      <button>Contact Us</button>
    </header>
  );
};

export default Header;
