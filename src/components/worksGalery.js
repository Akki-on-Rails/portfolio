import React from 'react';

import '../styles/main.scss';
import '../styles/atoms/shadowEffects.scss';

const WorksGalery = () => {
  return (
    <div className='galery-wrapper'>
      <h2>Projects</h2>
      <div className='element-container'>
        {/* TO DO: only first class is being used
        to style the div. WHY??? */}
        <div className='galery-element effect5 test'></div>
        <div className='galery-element'></div>
        <div className='galery-element'></div>
        <div className='galery-element'></div>
      </div>
    </div>
  )
}

export default WorksGalery
