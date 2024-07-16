import React from 'react';
import './../styles/contact.css';
import github from './../shared/social/github.svg';
import linkedin from './../shared/social/linkedin.svg';
import circle from './../shared/circle_contact.gif';
import arrow from './../shared/arrow.gif';

const Contact = () => {

  return (
    <section className='contact_container' id='contact'>

      <div className='contact_circle'>
        <img src={circle} alt="" />
      </div>

      <div className='contact_title'>
        <h4>
          <div class="top">get in touch !</div>
          <div class="bottom" aria-hidden="true">get in touch !</div>
        </h4>
      </div>

      <div className="social_list">
        <ul>
          <hr />
          <li className='list_icon'>
            <a href="tel:+336.14.72.05.66" rel="noopener noreferrer" target="_blank" title="Call me">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.8} stroke="#000103" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </a>
          </li>
          <li className='list_icon'>
            <a href="mailto:khadidja.aitsiali@gmail.com" rel="noopener noreferrer" target="_blank" title="Email me">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.8} stroke="#000103" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            </a>
          </li>
          <li className='list_icon'>
            <a href="https://www.linkedin.com/in/khadidja-ait-si-ali/" rel="noopener noreferrer" target="_blank" title="Linkedin me">
              <img src={linkedin} alt="Linkedin logo" />
            </a>
          </li>
          <li className='list_icon'>
            <a href="https://github.com/Khadija-Asa" rel="noopener noreferrer" target="_blank" title="Github me">
              <img src={github} alt="Github logo" />
            </a>
          </li>
          <hr />
        </ul>
      </div>

      <div className='contact_text'>
        <p>
          Looking for a top-notch web developer? Contact me to discuss your <strong>project</strong> needs and
          bring your <strong>vision</strong> to life. Let's create something amazing <strong>together</strong>!
        </p>
      </div>


    </section>
  );
};

export default Contact;