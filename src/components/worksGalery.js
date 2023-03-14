import React from 'react';

import '../styles/main.scss';
import project1 from '../images/BoxTag-Mockup.jpg';
import { Project } from '../data/projectsInfo'

import { textTruncate } from '../functions/textTruncate';

// TO DO: need to call item and iterate over it to
// be able to use the content data for the cards.

const WorksGalery = () => {
  return (
    <div className='galery-wrapper'>
      <h2>Projects</h2>
      <div className='card-wrapper'>
        <div className='card card-shadow'>
          <img src={Project[0].image[0]} alt={Project[0].alt}></img>
          <div className='card-info'>
            <h4>{Project[0].name}</h4>
            {/* for the short text add a conditional to clip the text: */}
            {/* textTruncate(text, num) where num ist the max. number of characters */}
            <p>{textTruncate(Project[0].short, 70)}</p>
          </div>
        </div>
        <div className='card card-shadow'>
          <img src={Project[1].image[0]} alt={Project[1].alt}></img>
          <div className='card-info'>
            <h4>{Project[1].name}</h4>
            <p>{textTruncate(Project[1].short, 70)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorksGalery
