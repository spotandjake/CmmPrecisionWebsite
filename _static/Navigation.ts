type Index = { [key: string]: string | Index };
interface NavigationConfig {
  Pages: Index;
  Header: string[];
  Footer: string[];
}
export const Navigation: NavigationConfig = {
  Pages: {
    'Home': '/',
    'About Us': '/About',
    // 'Certifications': {
    //   'Calibration Cert': '/CalibrationCert',
    //   'Laboratory Cert': '/ComingSoon',
    // },
    'Contact Us': '/Contact'
  },
  Header: [
    'Home',
    'About Us',
    // 'Certifications'
  ],
  Footer: [
    'Home',
    'About Us',
    'Contact Us'
  ]
};
export const HeaderLinks = Navigation.Header.map((Name) => ({ Name: Name, Address: Navigation?.Pages[Name] || 'Unknown' }));
export const FooterLinks = Navigation.Footer.map((Name) => ({ Name: Name, Address: Navigation?.Pages[Name] || 'Unknown' }));