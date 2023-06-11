import React, { useEffect, useRef } from "react";
import p5 from "p5";

const Space = () => {
  const myRef = useRef();

  useEffect(() => {
    let myp5 = new p5(SpaceSketch, myRef.current);
  
    const handleResize = () => {
      myp5.resizeCanvas(window.innerWidth, window.innerHeight);
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      myp5.remove();
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  const SpaceSketch = (p) => {
    let stars = [];

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        for (let i = 0; i < 800; i++) {
          stars[i] = new Star();
        }
    };      
    
    p.draw = () => {
        p.background(10, 25, 47); // Changed background color to rgb(10, 25, 47)
        p.translate(p.width / 2, p.height / 2);
        for (let i = 0; i < stars.length; i++) {
          stars[i].update();
          stars[i].show();
        }
    };      

    class Star {
      constructor() {
        this.x = p.random(-p.width, p.width);
        this.y = p.random(-p.height, p.height);
        this.z = p.random(p.width);
        this.pz = this.z;
      }

      update() {
        this.z = this.z - 2;
        if (this.z < 1) {
          this.z = p.width;
          this.x = p.random(-p.width, p.width);
          this.y = p.random(-p.height, p.height);
          this.pz = this.z;
        }
      }

      show() {
        p.fill(255);
        p.noStroke();

        let sx = p.map(this.x / this.z, 0, 1, 0, p.width);
        let sy = p.map(this.y / this.z, 0, 1, 0, p.height);

        let r = p.map(this.z, 0, p.width, 16, 0);
        p.ellipse(sx, sy, r, r);

        let px = p.map(this.x / this.pz, 0, 1, 0, p.width);
        let py = p.map(this.y / this.pz, 0, 1, 0, p.height);

        this.pz = this.z;

        p.stroke(255);
        p.line(px, py, sx, sy);
      }
    }
  };

  return <div ref={myRef} style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}></div>;
};

export default Space;
