import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const FractalTree = () => {
  const fractalTreeRef = useRef();

  useEffect(() => {
    new p5((sketch) => {
      let angle;
      let height = 350;
      let width = 370;

      sketch.setup = function () {
        let canvas = sketch.createCanvas(width, height);
        canvas.parent(fractalTreeRef.current);
        angle = sketch.PI / 4;
      };

      sketch.draw = function () {
        sketch.background(10,25,48);
        sketch.stroke(150);
        sketch.translate(200, sketch.height);
        angle = sketch.map(sketch.cos(sketch.frameCount * 0.01), -7, 2, sketch.PI / 2, sketch.PI / 16);
        branch(100);
      };

      function branch(len) {
         sketch.line(0, 0, 0, -len);
        sketch.translate(0, -len);
        if (len > 4) {
          //branch 1
          sketch.push();
          sketch.rotate(angle);
          branch(len * 0.67);
          sketch.pop();
          //branch 2 
          sketch.push();
          sketch.rotate(-angle);
          branch(len * 0.67);
          sketch.pop();
      }
    }
    });
  }, []);

  return <div ref={fractalTreeRef} id="fractal-tree"></div>;

};

export default FractalTree;
