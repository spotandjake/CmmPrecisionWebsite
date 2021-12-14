import styles from '../Style/Components/Footer.module.scss';
import Link from 'next/link';
import { FooterLinks } from '../Navigation';
import SvgIcon from '@mui/material/SvgIcon';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <div>
          <h3>Cmm Precision</h3>
          <p>Cmm Inspection That Meats Your Needs.</p>
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
            {/* TODO: Get this link */}
            <li>
              <SvgIcon
                component={LinkedInIcon}
                viewBox="0 0 24 24"
              />
              <Link href="/">LinkedIn</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>
          FOLLEST CMM &amp; PRECISION TOOLING , 1-289-314-7770 , <a href="mailto:dfollest@live.com">dfollest@live.com</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
