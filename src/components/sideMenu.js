import React from 'react';

import '../styles/main.scss';
import "../assets/css/fontawesome.css";
import "../assets/css/brands.css";
import "../assets/css/solid.css";

const SideMenu = () => {
  return (
    <div className='sideMenu-wrapper'>
      <a href='mailto:f.gerngross@googlemail.com'>
        <i class="fa-sharp fa-solid fa-envelope"></i>
        <h6>f.gerngross@googlemail.com</h6>
      </a>
      <a href='https://github.com/Akki-on-Rails' target='_blank'>
        <i class="fa-brands fa-github"></i>
        <h6>Akki-on-Rails</h6>
      </a>
    </div>
  )
}

export default SideMenu
