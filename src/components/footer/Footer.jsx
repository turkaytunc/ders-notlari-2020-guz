import './footer.scss';

import React from 'react';

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-social">
        <div className="footer-social-container">
          <a
            href="https://github.com/turkaytunc"
            className="footer-link"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={`${process.env.PUBLIC_URL}/footer-icons/github-icon-white.png`}
              alt="github"
            />
            Github
          </a>
        </div>
        <div className="footer-social-container">
          <a
            href="https://www.linkedin.com/in/turkaytunc/"
            className="footer-link"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={`${process.env.PUBLIC_URL}/footer-icons/linkedin.png`}
              alt="linkedin"
            />
            LinkedIn
          </a>
        </div>
      </div>
      <div className="footer-copy">&copy; 2020 Türkay Tunç</div>
    </div>
  );
};
