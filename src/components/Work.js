import React from 'react';
import './../styles/work.css';
import moon from './../shared/mockups/moon_mockup.svg';
import nft from './../shared/mockups/nft_mockup.svg';
import space from './../shared/mockups/space_mockup.svg';
import numeriquelles from './../shared/mockups/numeriquelles_mockup.svg';
import levyna from './../shared/mockups/levyna_mockup.svg';
import portfolio from './../shared/mockups/khadidja_mockup.svg';

const Work = () => {
  return (
    <section className='work_container' id='work'>

      <div className="work_rows">

        <article className="rows">
          <div className="rows_title">
            <h5 data-aos="fade-down"
     data-aos-duration="1000">
              moon crypto
            </h5>
            <img src={moon} alt="Mockup of Moon crypto's website" />
          </div>
          <div className="rows_list">
              <div className="row_buttons">
                <button>
                    landing page
                </button>
                <button>
                  <span className="button_top">
                    css
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    style
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    javascript
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    mobile first design
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    css grid
                  </span>
                </button>
              </div>
          </div>
        </article>

        <article className="rows">
          <div className="rows_title">
            <h5 data-aos="fade-down"
     data-aos-duration="1000">nft equilibrium</h5>
            <img src={nft} alt="Mockup of Nft's website" />
          </div>
          <div className="rows_list">
              <div className="row_buttons">
                <button>
                  <span className="button_top">
                    landing page
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    css flexbox
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    style
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    javascript
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    design system
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    code review
                  </span>
                </button>
              </div>
          </div>
        </article>

        <article className="rows">
          <div className="rows_title">
            <h5 data-aos="fade-down"
     data-aos-duration="1000">space tourism</h5>
            <img src={space} alt="Mockup of Space tourism's website" />           
          </div>
          <div className="rows_list">
              <div className="row_buttons">
                <button>
                  <span className="button_top">
                    reactjs
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    web components
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    mega menu
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    client-side routing 
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    framework js
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    web api
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    micro-frontends
                  </span>
                </button>
              </div>
          </div>
        </article>

        <article className="rows">
          <div className="rows_title">
            <h5 data-aos="fade-down"
     data-aos-duration="1000">numeriqu'elles</h5>
            <img src={numeriquelles} alt="Mockup of Numériqu'Elles's website" />
          </div>
          <div className="rows_list">
              <div className="row_buttons">
                <button>
                  <span className="button_top">
                    soft skills
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    css processor
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    bootstrap
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    sass
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    javascript
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    version control
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    pair programming
                  </span>
                </button>
              </div>
          </div>
        </article>

        <article className="rows">
          <div className="rows_title">
            <h5 data-aos="fade-down"
     data-aos-duration="1000">levyna</h5>
            <img src={levyna} alt="Mockup of Levyna's website" />
          </div>
          <div className="rows_list">
              <div className="row_buttons">
                <button>
                  <span className="button_top">
                    javascript
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    reactjs
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    style
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    javascript
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    ux/ui design
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    code quality
                  </span>
                </button>
              </div>
          </div>
        </article>

        <article className="rows">
          <div className="rows_title">
            <h5 data-aos="fade-down"
     data-aos-duration="1000">portfolio</h5>
            <img src={portfolio} alt="Mockup of Portfolio's website" />
          </div>
          <div className="rows_list">
              <div className="row_buttons">
                <button>
                  <span className="button_top">
                    animation
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    design
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    style
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    javascript
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    responsive design
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    github
                  </span>
                </button>
                <button>
                  <span className="button_top">
                    animation web
                  </span>
                </button>
              </div>
          </div>
        </article>

      </div>

<br />
<br />
<br />
<br />
      
    </section>
  );
};

export default Work;