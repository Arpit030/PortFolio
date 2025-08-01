import React, { useState } from 'react';
import './Home.css';
import { assets } from '../../assets/assets';

function Home() {
  // State for tilt effect on the AvatarMaker image
  const [tiltStyle, setTiltStyle] = useState({
    transform: "perspective(300px) rotateX(0deg) rotateY(0deg)"
  });

  const handleMouseMove = (e) => {
    const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    const rotateX = (-y / height) * 20; // Adjusting sensitivity
    const rotateY = (x / width) * 20;

    setTiltStyle({
      transform: `perspective(300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(300px) rotateX(0deg) rotateY(0deg)"
    });
  };

  return (
    <div className='home' id='home'>
      <div className='homeupper'>
        <div className='links'>
          <a href='https://www.linkedin.com/in/arpit-verma-46b8ab244' target="_blank" rel="noopener noreferrer">
            <img src={assets.linkedin} alt="LinkedIn"/>
          </a>
          <a href='https://github.com/Arpit030' target="_blank" rel="noopener noreferrer">
            <img src={assets.github} alt="Github"/>
          </a>
          <a href='https://leetcode.com/u/Arp17032003/' target="_blank" rel="noopener noreferrer">
            <img src={assets.leetcode} alt="Leetcode"/>
          </a>
        </div>
        <div className='title'>
          <h1>Hi, I'm Arpit</h1>
          <h3>I am a Web Developer</h3>
          <p className='para'>Building Website to solve real life problems</p>
          <button className='contactButton'>
            <a href='#contact'>Contact Me</a>
            <img src={assets.send} alt=''></img>
          </button>
        </div>
        <div 
          className='avatar'
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={tiltStyle}
        >
          <img src={assets.AvatarMaker} alt='Avatar Maker'></img>
        </div>
      </div>
      {/* <div className='homelower'>
        <img src={assets.mouse} alt=''></img>
        <p>Scroll Down</p>
        <img src={assets.downA} alt=''></img>
      </div> */}
    </div>
  );
}

export default Home;
