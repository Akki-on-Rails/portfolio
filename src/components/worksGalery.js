import React from 'react';

import '../styles/main.scss';
import project1 from '../images/BoxTag-Mockup.jpg';
import { Project } from '../data/projectsInfo'

// TO DO: need to call item and iterate over it to
// be able to use the content data for the cards.

const WorksGalery = () => {
  return (
    <div className='galery-wrapper'>
      <h2>Projects</h2>
      <div className='element-container'>
        <div className='galery-element card-shadow'>
          <img src={Project[0].image[0]} alt={Project[0].alt}></img>
          <div className='element-text-container'>
            <h4>{Project[0].name}</h4>
            <p>{Project[0].short}</p>
          </div>
        </div>
        <div className='galery-element card-shadow'>
          <img src={Project[1].image[0]} alt={Project[1].alt}></img>
          <div className='element-text-container'>
            <h4>{Project[1].name}</h4>
            <p>{Project[1].short}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorksGalery
