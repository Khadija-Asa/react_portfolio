import React from 'react';
import './../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer_title">

        <h5>
          frontend developer
        </h5>

        <h6 data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="2500">
          since 2021. <br />
          let's innovate together.
        </h6>

      </div>

      <div className="footer_button">

        <a href="https://www.linkedin.com/in/khadidja-ait-si-ali/" target="_blank" rel="noopener noreferrer">
          Linkedin.
        </a>
        <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
          X.
        </a>
        <a href="https://www.malt.fr/profile/khadidjaaitsiali1" target="_blank" rel="noopener noreferrer">
          Malt.
        </a>
        <a href="https://github.com/Khadija-Asa" target="_blank" rel="noopener noreferrer">
          Github.
        </a>

      </div>
      
      <div className="footer_bottom"> 

        <p className="bottom_title main-style">
          <span>All rights reserved 2024</span>
          <span><a href="/">Mentions légales</a></span>
        </p>

      </div>
    </footer>
  );
};

export default Footer;