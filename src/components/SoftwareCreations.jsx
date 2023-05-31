import React, { useRef } from 'react';
import { AiOutlineFolder } from "react-icons/ai";
const OCT = '/assets/OCT.png';
const gif ='./assets/OCt.mp4';

const SoftwareCreations = () => {
  const cardRef = useRef();
  const sectionRef = useRef();
  const creationImgRef = useRef();
  const gitlinkRef = useRef();

  const linkStyle = {
    textDecoration: 'none',
  };

  const hoverStyle = {
    textDecoration: 'none',
  };

  return (
    <section className="software-creations" ref={sectionRef}>
      <h2>.software-creations()</h2>
      <a 
        href='https://github.com/Sabateesh/OC-Transpo-App' 
        target="_blank" 
        rel="noopener noreferrer" 
        style={linkStyle} 
        onMouseOver={() => linkStyle.textDecoration = 'none'}
        onMouseOut={() => linkStyle.textDecoration = hoverStyle.textDecoration}
      >
        <div className="creation" ref={cardRef}>
          <button className="button3">
            <AiOutlineFolder size={50}/> 
          </button>
          <img ref={creationImgRef} src={OCT} alt="Creation 1" width="200" height="200" />
          <h3>OC Transpo App</h3>
          <p>
            An app that uses OC Transpo API to provide reliable Bus Schedules to
            user.
          </p>
          <p>
          Swift | OC Transpo API | Google Maps API
          </p>
        </div>
      </a>

      <video className="octapp-gif" width={250} height={500} autoPlay loop muted ref={video => video && video.load()}>
        <source src={gif} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </section>
  );
};

export default SoftwareCreations;
