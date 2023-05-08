import React from 'react';
const OCT = '/assets/OCT.png';

const SoftwareCreations = () => {
  return (
    <section className="software-creations">
      <h2>.software-creations()</h2>
      <div className="creation">
        <a href="https://github.com/Sabateesh/OC-Transpo-App">
          <img src={OCT} alt="Creation 1" width="100" height="100" />
          <h3>OC Transpo App</h3>
          <p>
            An app that uses OC Transpo Api to provide reliable Bus Schedules to
            user.
          </p>
        </a>
      </div>
    </section>
  );
};

export default SoftwareCreations;
