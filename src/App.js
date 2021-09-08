import "./App.css";
import Nav from "./components/Nav";
import Project from "./components/Projects";

function App() {
  return (
    <div className="App">
      <div>
        <header>
          <h1>Navin Seneviratna Portfolio</h1>
          <Nav />
        </header>
      </div>
      <div>
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
        <footer></footer>
      </div>
    </div>
  );
}

export default App;
