import React from 'react';
import './Footer.scss';

const Footer = () => (
  <footer aria-label="footer section">
    <div className="footer" aria-label="Social media links">
      <div>&copy; 2020 Hung Solutions. All rights reserved</div>
      <div>
        <a href="#" aria-label="Link to Linkedin">
          <i
            className="fab fa-linkedin"
            aria-hidden="true"
            title="Link to Linkedin"
          />
        </a>
        <a href="#" aria-label="Link to Github">
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
