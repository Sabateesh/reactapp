import React, { useEffect, useRef } from 'react';
const OCT = '/assets/OCT.png';
const folder = '/assets/github.png';
const gif ='./assets/OCt.webm';


const SoftwareCreations = () => {
  const cardRef = useRef(); // This reference will be attached to your card
  const sectionRef = useRef(); // This reference will be attached to your section
  const creationImgRef = useRef();
  const gitlinkRef = useRef();

  useEffect(() => {
    const card = cardRef.current;
    const section = sectionRef.current;
    const creationImg = creationImgRef.current;
    
    const handleMouseMove = (e) => {
      let rect = section.getBoundingClientRect();
      let xAxis = (rect.width / 2 - (e.clientX - rect.left)) / 25;
      let yAxis = (rect.height / 2 - (e.clientY - rect.top)) / 25;
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    };
  
    const handleMouseEnter = () => {
      card.style.transition = 'none';
      creationImg.style.transform = 'translateZ(100px)';
    };
  
    const handleMouseLeave = () => {
      card.style.transition = 'all 0.5s ease';
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;
      creationImg.style.transform = 'translateZ(0px)';
    };
  
    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseenter', handleMouseEnter);
    section.addEventListener('mouseleave', handleMouseLeave);
  
    // Cleanup function to remove the event listener when the component is unmounted
    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseenter', handleMouseEnter);
      section.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="software-creations" ref={sectionRef}>
      <h2>.software-creations()</h2>
      <div className="creation" ref={cardRef}>
      <a href='https://github.com/Sabateesh/OC-Transpo-App' target="_blank" rel="norefferer">
        <button className="button3" style={{ backgroundImage: `url(${folder})` }}></button>
      </a>
        <img ref={creationImgRef} src={OCT} alt="Creation 1" width="100" height="100" />
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
