import React from 'react';

import '../styles/main.scss';
import "../assets/css/fontawesome.css";
import "../assets/css/brands.css";
import "../assets/css/solid.css";
import portrait from '../images/portrait-fg.jpg';

const About = () => {
  return (
    <div className='about-wrapper'>
      <div className='mobile-title'>
        <h1>Frank Gerngroß</h1>
        <h2>Frontend Developer & Graphic Designer</h2>
      </div>
      <div className='about-container'>
        <img src={portrait} alt='a portrait of me: Frank Gerngross'></img>
        <div className='about-text-wrapper'>
          <h1>Frank Gerngroß</h1>
          <h2>Frontend Developer & Graphic Designer</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
