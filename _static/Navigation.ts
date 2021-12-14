interface NavigationConfig {
  Pages: { [key: string]: string };
  Header: string[];
  Footer: string[];
}
export const Navigation: NavigationConfig = {
  Pages: {
    'Home': '/',
    'About': '/ComingSoon',
    'Certifications': '/ComingSoon',
    'Contact Us': '/ComingSoon'
  },
  Header: [
    'Home',
    'About',
    'Certifications'
  ],
  Footer: [
    'Home',
    'About',
    'Contact Us'
  ]
};
export const HeaderLinks = Navigation.Header.map((Name) => ({ Name: Name, Address: Navigation?.Pages[Name] || 'Unknown' }));
export const FooterLinks = Navigation.Footer.map((Name) => ({ Name: Name, Address: Navigation?.Pages[Name] || 'Unknown' }));