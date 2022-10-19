import styles from '../Style/Components/Footer.module.scss';
import Link from 'next/link';
import SvgIcon from '@mui/material/SvgIcon';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FooterLinks } from '../Navigation';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.moto}>
          <h3><Link href={'/'}>Cmm Precision</Link></h3>
          <p>Cmm Inspection That Meets Your Needs.</p>
        </div>
        <div>
          <h3>Navigation</h3>
          <ul>
            {FooterLinks.map(({ Name, Address }) => {
              return (
                <li key={Name}>
                  <span className={styles.arrow}></span><Link href={Address}>{Name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3>Media</h3>
          <ul className={styles.mediaList}>
            <li>
              <SvgIcon
                component={LinkedInIcon}
                viewBox="0 0 24 24"
              />
              <Link href="https://ca.linkedin.com/in/david-follest-83458841">LinkedIn</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>
          FOLLEST CMM &amp; PRECISION TOOLING, <a href="tel:289-314-7770">(289)-314-7770</a>, <a href="mailto:dfollest@live.com">dfollest@live.com</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
