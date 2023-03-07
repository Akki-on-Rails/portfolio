import React from 'react';

import '../styles/main.scss';
import project1 from '../images/BoxTag-Mockup.jpg';

const WorksGalery = () => {
  return (
    <div className='galery-wrapper'>
      <h2>Projects</h2>
      <div className='element-container'>
        {/* TO DO: only first class is being used
        to style the div. WHY??? */}
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
