import React from "react";

function Project(props) {
  return (
    <div>
      <div className="project-card">
        <a href={props.link} target="_blank" rel="noreferrer">
          <img
            src={props.image}
            alt="What's Happening"
            height="300px"
            width="500px"
          />
        </a>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <a href={props.githubLink} target="_blank" rel="noreferrer">
          GitHub Repository
        </a>
      </div>
    </div>
  );
}

export default Project;
