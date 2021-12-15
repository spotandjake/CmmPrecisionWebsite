import React, { useState } from 'react';
import styles from '../Style/Components/Header.module.scss';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import MenuIcon from '@mui/icons-material/Menu';
import { HeaderLinks } from '../Navigation';
interface Props {
  Active: string;
}
const Header = ({ Active }: Props) => {
  const [ menuOpen, setMenuOpen ] = useState(false);
  return (
    <header className={menuOpen ? '' : styles.container}>
      <h1><Link href={'/'}>Cmm Precision</Link></h1>
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
          {HeaderLinks.map(({ Name, Address }, index) => {
            if (typeof Address == 'string') {
              return (
                <li className={Active == Name ? styles.Active : ''} onClick={() => setMenuOpen(false)} key={index}>
                  <Link href={Address}>{Name}</Link>
                </li>
              );
            } else {
              return (
                <li className={Object.values(Address).includes(Name) ? styles.Active : ''} key={index}>
                  <span>{Name}</span>
                  <ul>
                    {Object.entries(Address).map(([ Name, Address ], index) => {
                      return (
                        <li className={Active == Name ? styles.Active : ''} onClick={() => setMenuOpen(false)} key={index}>
                          <Link href={Address}>{Name}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            }
          })}
          <li onClick={() => setMenuOpen(false)}>
            <Link href="/Contact" passHref={true}><button>Contact Us</button></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
