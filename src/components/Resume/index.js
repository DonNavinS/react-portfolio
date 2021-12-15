import React from "react";
import ResumeImage from "../../assets/images/Resume.jpg";
function Resume() {
  return (
    <div>
      <h1 className="title">Navin Seneviratna Resume</h1>

      <div className="resume-page">
        <img
          className="resume-image"
          src={ResumeImage}
          alt="Resume"
          width="40%"
        />

        <span className="buttons">
          <a
            href="https://docs.google.com/document/d/1rKgj-soBzYyniWpa2LNr2MTB7lgWgBnh_DIzn87l4_g/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="resume-link"
          >
            Click here for a better view !
          </a>
        </span>
      </div>
    </div>
  );
}
export default Resume;
