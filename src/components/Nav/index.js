import React from "react";

function Nav(props) {
  const { pages = [], changePage } = props;
  return (
    <div>
      <nav className="nav">
        <ul className="navBar">
          <li className="navBarLinks">
            <button
              onClick={() => {
                changePage(pages[0]);
              }}
              className="buttons"
            >
              About Me
            </button>
          </li>
          <li className="navBarLinks">
            <button
              onClick={() => {
                changePage(pages[1]);
              }}
              className="buttons"
            >
              Projects
            </button>
          </li>
          <li className="navBarLinks">
            <button
              onClick={() => {
                changePage(pages[2]);
              }}
              className="buttons"
            >
              Resume
            </button>
          </li>
          <li className="navBarLinks">
            <button
              onClick={() => {
                changePage(pages[3]);
              }}
              className="buttons"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
