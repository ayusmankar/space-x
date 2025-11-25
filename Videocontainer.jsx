import React from 'react';
import Bgvideo from "../assests/Bgvideo.mp4";

const Videocontainer = () => {
  return (
    <div className='video'>
      <video className="videobackground" autoPlay loop muted playsInline>
        <source src={Bgvideo} type="video/mp4"  />
      </video>
      <div className='Btn'>
        <h4>Recent Launch</h4>
        <h1>Starship's sixth flight test</h1>
        <button>Rewatch</button>
      </div>
    </div>
  );
};

export default Videocontainer;
