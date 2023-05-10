import React from 'react';
const OCT = '/assets/OCT.png';
const folder = '/assets/github.png';
const gif ='./assets/OCt.webm';


const SoftwareCreations = () => {
  return (
    <section className="software-creations">
      <h2>.software-creations()</h2>
      <div className="creation">
      <a href='https://github.com/Sabateesh/OC-Transpo-App' target="_blank" rel="norefferer">
        <button className="button3" style={{ backgroundImage: `url(${folder})` }}></button>
      </a>
        <img src={OCT} alt="Creation 1" width="100" height="100" />
        <h3>OC Transpo App</h3>
        <p>
          An app that uses OC Transpo API to provide reliable Bus Schedules to
          user.
        </p>
        <p>
        Swift | Xcode | OC Transpo API | Google Maps API
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
