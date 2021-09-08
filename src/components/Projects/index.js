import React from "react";

function Project(props) {
  return (
    <div>
      <div className="project-card">
        <h3>{props.title}</h3>
        <p>Project description</p>
      </div>
    </div>
  );
}

export default Project;
