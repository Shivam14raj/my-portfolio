import React, { useState } from "react";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const [index, setIndex] = useState(0);
  const total = 5;

  const next = () => {
    if (index < total - 1) setIndex(index + 1);
  };   

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="project-wrapper">
      <div className="slider-window">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * 55}vw)` }}
        >
          <div className="project-container" id="p1">
             
          </div>
          <div className="project-container" id="p2"></div>
          <div className="project-container" id="p3"></div>
          <div className="project-container" id="p4"></div>
          <div className="project-container" id="p5"></div>
        </div>
      </div>

      <div className="slider-controls">
        <button onClick={prev} disabled={index === 0}>Prev</button>
        <button onClick={next} disabled={index === total - 1}>Next</button>
      </div>
    </div>
  );
};

export default ProjectDetails;           