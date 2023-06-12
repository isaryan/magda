import React from 'react';
import brush from '../../assets/brush.mp4';
import Magda from '../../assets/Magda.svg';
import './Home.css';

 const Home = () => {
    return (
<div id='home'>
    <div className='Background' dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="${brush}"
        />
      ` }}></div>
    
    <div className="content">
    <div className="Logo">
        <img src={Magda} alt="Magda de Paiva logo" />
    </div>
    <div className="link">
        <a href="/portfolio">portfolio</a>
    </div>
    </div>
</div>

)};

export default Home