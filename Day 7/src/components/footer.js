import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  faFileAlt, // Icon for Terms and Conditions
  faQuestionCircle, // Icon for FAQ
  faShieldAlt, // Icon for Privacy Policy
} from '@fortawesome/free-solid-svg-icons';

import '../assets/css/footer.css'; // Import your CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        {/* Footer Links */}
        &copy; {new Date().getFullYear()} Rights Reserved.
      </div>
      <div className="footer-links">
        {/* Social Media Icons */}
        <a href="/terms">
          <FontAwesomeIcon icon={faFileAlt} /> Terms and Conditions
        </a>
        <a href="/faq">
          <FontAwesomeIcon icon={faQuestionCircle} /> FAQ
        </a>
        <a href="/privacy">
          <FontAwesomeIcon icon={faShieldAlt} /> Privacy Policy
        </a>
        
      </div>
      <div className="footer-social">
        
        <a href="https://www.instagram.com">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.twitter.com">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.linkedin.com">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
