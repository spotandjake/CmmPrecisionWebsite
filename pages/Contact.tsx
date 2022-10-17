import styles from '../_static/Style/Pages/Contact.module.scss';
// Components
import React, { useState, useEffect } from 'react';
import { NextPageContext } from 'next';
import MetaData from '../_static/Components/MetaData';
import Header from '../_static/Components/Header';
import Footer from '../_static/Components/Footer';
import Hero from '../_static/Components/Hero';

const Contact = ({ query }: NextPageContext) => {
  const [popup, setPopup] = useState(<></>);
  useEffect(() => {
    const closeModal = () => {
      // Remove Popup
      setPopup(<></>);
      // Reset Query Params
      window.history.replaceState(null, '', '/Contact');
    };
    if (query && query.failed) {
      if (query.failed == '1') {
        // Failure
        setPopup(
          <div className={styles.ModalContainer} onClick={() => closeModal()}>
            <div className={styles.Modal}>
              <h1>
                An unknown Error has Occurred And Your Message Could Not Be Sent
                Please Try Again.
              </h1>
              <div className={styles.statusBar}></div>
            </div>
          </div>
        );
      } else {
        // Success
        setPopup(
          <div className={styles.ModalContainer} onClick={() => closeModal()}>
            <div className={styles.Modal}>
              <h1>Your Message Was Successfully Sent.</h1>
              <div
                className={[styles.statusBar, styles.Success].join(' ')}
              ></div>
            </div>
          </div>
        );
      }
    }
  }, []);
  return (
    <section className={styles.container}>
      <MetaData PageTitle="Contact Us" />
      {/* Header */}
      <Header Active="Contact" />
      {/* Hero */}
      <Hero>
        <h2>Contact Us</h2>
      </Hero>
      {/* PopUp Section */}
      {popup}
      {/* Contact Us Section */}
      <section className={styles.ContactSection}>
        <div>
          <form action="/api/contactForm" method="post">
            <label htmlFor="name">Name</label>
            <input required type="text" id="name" name="name" />
            <label htmlFor="email">Email</label>
            <input required type="email" id="email" name="email" />
            <label htmlFor="phone">Phone Number</label>
            <input required type="tel" id="phone" name="phone" />
            <label htmlFor="message">Message</label>
            <textarea
              required
              name="message"
              id="message"
              cols={30}
              rows={10}
            ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className={styles.Info}>
          <div>
            <h3>Where Are We Located</h3>
            <ul>
              <li>910 Renaissance Dr,</li>
              <li>Oshawa, ON</li>
              <li>L1J 8K4</li>
            </ul>
            <hr />
          </div>
          <div>
            <h3>Contact Info</h3>
            <ul>
              <li>
                <a href="mailto:dfollest@live.com">dfollest@live.com</a>
              </li>
              <li>
                <a href="tel:289-314-7770">(289)-314-7770</a>
              </li>
            </ul>
            <hr />
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </section>
  );
};

Contact.getInitialProps = ({ query }: NextPageContext) => ({ query });

export default Contact;
