import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Project from "./components/Projects";
import AboutMe from "./components/About/index.js";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import whatsHappeningLogo from "./assets/images/Whats-Happening-logo.jpg";
import jestChallenge from "./assets/images/Jest-challenge.jpg";
import SmartFix from "./assets/images/SmartFix.jpg";
import noSQLAPI from "./assets/images/noSQL-API.jpg";
import Contact from "./components/Contact";

function App() {
  const pages = ["About me", "Projects", "Resume", "Contact"];
  const [page, changePage] = useState(pages[0]);
  return (
    <div className="App">
      <div>
        <header className="header">
          <h1>Navin Seneviratna Portfolio</h1>
          <Nav pages={pages} page={page} changePage={changePage} />
        </header>
      </div>
      <div>
        {page === pages[0] && <AboutMe />}{" "}
        {page === pages[1] && (
          <div>
            <h1 className="title">Projects</h1>
            <div className="Projects">
              <Project
                title="What's Happening"
                description="Fetches and returns Google API data and COVID-19 API data for specified city"
                image={whatsHappeningLogo}
                link="https://teamtoo222.github.io/Project-1-UofT/"
                githubLink="https://github.com/Teamtoo222/Project-1-UofT"
              />
              <Project
                title="SmartFix"
                description="Allows residents and service providers at an apartment to view and create work requests"
                image={SmartFix}
                link="https://floating-cove-91289.herokuapp.com/"
                githubLink="https://github.com/groupsixzerotwo/smart-fix"
              />
              <Project
                title="Team Member Profile Generator"
                description="Nodejs CLI application that takes user input to create HTML webpage displaying team member profiles "
                image={jestChallenge}
                githubLink="https://github.com/DonNavinS/jest-challenge"
              />
              <Project
                title="MongoDB Social Network"
                description="Backend for a social networking app in which Users and their Thoughts are stored in MongoDB database via Express routes"
                image={noSQLAPI}
                githubLink="https://github.com/DonNavinS/noSQL-challenge"
              />
            </div>
          </div>
        )}
        {page === pages[2] && <Resume />}
        {page === pages[3] && <Contact />}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
