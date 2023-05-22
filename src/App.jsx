import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
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
import Button from '@mui/material/Button';

function App() {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToAboutme = () => {
    window.scrollTo({
      top: 450, 
      behavior: 'smooth'
    });
  };

  const scrollToSoftwareCreations = () => {
    window.scrollTo({
      top: 1000, 
      behavior: 'smooth'
    });
  };

  const handleResumeClick = () => {
    // logic for handling a click on the "Resume" button
    // for example, you might want to download a resume
    const link = document.createElement('a');
    link.href = './resume.pdf';
    link.download = 'resume.pdf';
    link.click();
    console.log("Resume button clicked!");
  };

  return (
    <div className="App">
      <FractalTree />
      <TypingAnimation
        className={'intro-text'}
        text='Hi, Sabateesh here 👋.'
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
      <button className="homeButton" onClick={scrollToTop}>
        <span className="number1">01. </span>
        <span className="text">Home</span>
      </button>

      <button className="aboutMeButton" onClick={scrollToAboutme}>
        <span className="number2">02. </span>
        <span className="text">About</span>
      </button>

      <button className="softwareCreationsButton" onClick={scrollToSoftwareCreations}>
        <span className="number3">03. </span>
        <span className="text">Projects</span>
      </button>

      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleResumeClick}
        style={{
          backgroundColor: 'transparent',
          border: '1px solid #64ffda',
          color: '#64ffda',
          top: 6,
          right: 20,
          position: 'fixed',
          margin: '10px',
          padding: '10px',
          fontFamily: "'SF Mono', Consolas, 'Courier New', monospace",
          fontSize: '16px',
          fontWeight: 'semi-bold',

        }}
      >
        résumé
      </Button>
    </div>
  );
}

export default App;
