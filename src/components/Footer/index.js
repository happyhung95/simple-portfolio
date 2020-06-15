import React from 'react';
import './Footer.scss';

const Footer = () => (
  <footer aria-label="footer section">
    <div className="footer" aria-label="Social media links">
      <div className="footer__text">
        <div>&copy; 2020 Hung Solutions. </div>
        <div>All rights reserved</div>
      </div>
      <div className="footer__logo">
        <a
          href="https://www.linkedin.com/in/nguyentrangiahung/"
          aria-label="Link to Linkedin"
        >
          <i
            className="fab fa-linkedin"
            aria-hidden="true"
            title="Link to Linkedin"
          />
        </a>
        <a href="https://github.com/happyhung95" aria-label="Link to Github">
          <i
            className="fab fa-github"
            aria-hidden="true"
            title="Link to Github"
          />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
