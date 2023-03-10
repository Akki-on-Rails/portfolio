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
          <img src={project1} alt={Project[0].alt}></img>
          <h4>{Project[0].short}</h4><p>Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut
            labore et dolore magna aliquyam</p>
        </div>
        <div className='galery-element card-shadow'>
          <img src={project1} alt='image of the BoxTag app'></img>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut
            labore et dolore magna aliquyam</p>
        </div>
        <div className='galery-element card-shadow'>
          <img src={project1} alt='image of the BoxTag app'></img>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut
            labore et dolore magna aliquyam</p>
        </div>
        <div className='galery-element card-shadow'>
          <img src={project1} alt='image of the BoxTag app'></img>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut
            labore et dolore magna aliquyam</p>
        </div>
        <div className='galery-element card-shadow'>
          <img src={project1} alt='image of the BoxTag app'></img>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut
            labore et dolore magna aliquyam</p>
        </div>
        <div className='galery-element card-shadow'>
          <img src={project1} alt='image of the BoxTag app'></img>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut
            labore et dolore magna aliquyam</p>
        </div>
      </div>
    </div>
  )
}

export default WorksGalery
