import React from 'react';

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2>.about-me()</h2>
      <div className="list">
        <p>Here are some of the technologies I have experience with:</p>
        <div className="list-columns">
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>Swift</li>
            <li>C#</li>
            <li>HTML and CSS</li>
          </ul>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>React Native</li>
            <li>Node.js</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
