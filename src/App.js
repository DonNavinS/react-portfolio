import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Project from "./components/Projects";

function App() {
  const pages = ["About me", "Projects", "Resume", "Contact"];
  const [page, changePage] = useState(pages[0]);
  return (
    <div className="App">
      <div>
        <header>
          <h1>Navin Seneviratna Portfolio</h1>
          <Nav pages={pages} page={page} changePage={changePage} />
        </header>
      </div>
      <div>
        <h1>{page}</h1>
        <h2>Projects</h2>
        <div className="Projects">
          <Project title="Project 1"></Project>
          <Project title="Project 2"></Project>
          <Project title="Project 3"></Project>
          <Project title="Project 4"></Project>
          <Project title="Project 5"></Project>
          <Project title="Project 6"></Project>
        </div>
      </div>
      <div>
        <footer>
          <a href="https://github.com/DonNavinS">
            <img src="./assets/images/Github-logo.jpg" alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/don-navin-seneviratna/">
            <img src="./assets/images/LinkedIn-logo.jpg" alt="LinkedIn" />
          </a>
          <a href="https://github.com/DonNavinS">
            <img src="./assets/images/Github-logo.jpg" alt="github" />
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
