import React from "react";
import "./about.css";

function AboutMe(props) {
  return (
    <div>
      <h1 className="title">About Me</h1>
      <div className="about-me-bio">
        <div className="about-me-img">
          <img src={props.image} alt="Navin Seneviratna" />
        </div>
        <div className="about-me-text">
          <p>
            Graduated from the University of Toronto with a Bachelor's degree in
            biotechnology, but quickly realized a life surrounded by beakers,
            petri dishes and fruit flies was not for me. So I decided to take
            those analytical problem-solving skills and apply them to coding,
            and so far I could not be happier with my decision! My goals are to
            learn the ins and outs of web development, become a full-stack
            developer, and further expand my knowledge of coding and the
            possibilities it can bring.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
