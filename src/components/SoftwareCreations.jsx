import React, { useEffect, useRef } from 'react';
import { AiOutlineFolder } from "react-icons/ai";
const OCT = '/assets/OCT.png';
const gif ='./assets/OCt.webm';


const SoftwareCreations = () => {
  const cardRef = useRef();
  const sectionRef = useRef();
  const creationImgRef = useRef();
  const gitlinkRef = useRef();

  return (
    <section className="software-creations" ref={sectionRef}>
      <h2>.software-creations()</h2>
      <div className="creation" ref={cardRef}>
      <a href='https://github.com/Sabateesh/OC-Transpo-App' target="_blank" rel="norefferer">
        <button className="button3">
          <AiOutlineFolder size={50}/> 
        </button>
      </a>
        <img ref={creationImgRef} src={OCT} alt="Creation 1" width="100" height="100" />
        <h3>OC Transpo App</h3>
        <p>
          An app that uses OC Transpo API to provide reliable Bus Schedules to
          user.
        </p>
        <p>
        Swift | OC Transpo API | Google Maps API
        </p>
      </div>

      <video className="octapp-gif" width={250} height={500} autoPlay loop muted>
        <source src={gif} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default SoftwareCreations;
