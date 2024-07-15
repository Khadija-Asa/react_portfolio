import React from 'react';
import './../styles/contact.css';
import github from './../shared/social/github.svg';
import gmail from './../shared/social/gmail.svg';
import linkedin from './../shared/social/linkedin.svg';
import phone from './../shared/social/telephone.svg';

const Contact = () => {

  return (
    <section className='contact_container'>

      <div className='contact_title'>
        <h4>get in touch</h4>
      </div>

      <div className="social_list">
        <ul>
          <li>
            <a href="tel:+336.14.72.05.66" rel="noopener noreferrer" target="_blank" title="Call me">
              <img src={phone} alt="Phone icon" />
            </a>
          </li>
          <li>
            <a href="mailto:khadidja.aitsiali@gmail.com" rel="noopener noreferrer" target="_blank" title="Email me">
              <img src={gmail} alt="Gmail logo" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/khadidja-ait-si-ali/" rel="noopener noreferrer" target="_blank" title="Linkedin me">
              <img src={linkedin} alt="Linkedin logo" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Khadija-Asa" rel="noopener noreferrer" target="_blank" title="Github me">
              <img src={github} alt="Github logo" />
            </a>
          </li>
        </ul>
      </div>

    </section>
  );
};

export default Contact;