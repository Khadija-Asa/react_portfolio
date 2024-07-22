import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './../styles/overlay.css'; 

const Overlay = () => {
  useEffect(() => {
    gsap.to(".first", {
      duration: 1.5,
      delay: 0.4,
      top: "-100%",
      ease: "expo.inOut"
    });
    
    gsap.to(".second", {
      duration: 1.5,
      delay: 0.6,
      top: "-100%",
      ease: "expo.inOut"
    });
    
    gsap.to(".third", {
      duration: 1.5,
      delay: 0.8,
      top: "-100%",
      ease: "expo.inOut"
    });
  }, []); // The empty array ensures this runs only once after the initial render

  return (
    <div>
      <div className="overlay first">First</div>
      <div className="overlay second">Second</div>
      <div className="overlay third">Third</div>
    </div>
  );
};

export default Overlay;
