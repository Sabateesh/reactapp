import React from 'react';
import Button from '@mui/material/Button';

const Bio = () => {
  const handleemailClick = () => {
    window.open('mailto:SabateeshSivakumar@cmail.carleton.ca', '_blank');
  };

  return (
    <div className="bio">
      <p>
          <b>I like to code stuff sometimes.</b>
      </p>
      <p>
          <b>I'm a Computer Science Student at Carleton University in the Software Engineering Stream. I am based in Ottawa/Toronto. Currently, pursuing a career in software development. My interests lie in full-stack development, artificial intelligence, Mobile App development, and everything in between.</b>
      </p>
      <p>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleemailClick}
          style={{
            backgroundColor: 'transparent',
            border: '1px solid #64ffda',
            color: '#64ffda',
            position: 'fixed',
            padding: '10px',
            fontFamily: "'SF Mono', Consolas, 'Courier New', monospace",
            fontSize: '16px',
            fontWeight: 'semi-bold',
          }}
        >
          Email Me
        </Button>
      </p>
    </div>
  );
};

export default Bio;
