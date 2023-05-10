import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import './styles/main.css';
import FractalTree from './components/FractalTree';
import TypingAnimation from './components/TypingAnimation';
import AboutMe from './components/AboutMe';
import SoftwareCreations from './components/SoftwareCreations';
import Bio from './components/Bio';
import linkedinLogo from './assets/linkedin.png';
import githubLogo from './assets/github.png';
import FadeInWhenVisible from './components/FadeInWhenVisible';


function App() {
  
  return (
    <div className="App">

      <FractalTree />
      <TypingAnimation
        className={'intro-text'}
        text='Hi, Sabateesh here.'
        speed={100}
      />

      <FadeInWhenVisible>
      <Bio />
      </FadeInWhenVisible>


      <FadeInWhenVisible>
      <AboutMe />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
      <SoftwareCreations />
      </FadeInWhenVisible>



      <a href='https://www.linkedin.com/in/sabateesh-s-83b532229/' target="_blank" rel="norefferer">
      <button className="button" style={{ backgroundImage: `url(${linkedinLogo})` }}></button>
      </a>
      <a href='https://github.com/Sabateesh' target="_blank" rel="norefferer">
        <button className="button2" style={{ backgroundImage: `url(${githubLogo})` }}></button>
      </a>
      
    </div>
  );
}

export default App;