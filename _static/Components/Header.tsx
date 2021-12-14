import React, { useState } from 'react';
import styles from '../Style/Components/Header.module.scss';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import MenuIcon from '@mui/icons-material/Menu';
interface Props {
  Active: string;
}
const Header = ({ Active }: Props) => {
  const [ menuOpen, setMenuOpen ] = useState(false);
  return (
    <header className={menuOpen ? '' : styles.container}>
      <h1>Cmm Precision</h1>
      <nav className={styles.navContainer}>
        <IconButton 
          aria-label="Menu Toggle" 
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <SvgIcon
            className={styles.Icon}
            fontSize={'large'}
            component={MenuIcon}
            viewBox="0 0 24 24"
          />
        </IconButton>
        <ul className={[ styles.navLinks, menuOpen ? styles.menuOpen : '' ].join(' ')}>
          <li className={Active == 'Home' ? styles.Active : ''} onClick={() => setMenuOpen(false)}>
            <Link href="/">Home</Link>
          </li>
          <li className={Active == 'About' ? styles.Active : ''} onClick={() => setMenuOpen(false)}>
            <Link href="/ComingSoon">About</Link>
          </li>
          <li className={Active == 'Certificate' ? styles.Active : ''} onClick={() => setMenuOpen(false)}>
            <Link href="/ComingSoon">Certifications</Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link href="/ComingSoon" passHref={true}><button>Contact Us</button></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
