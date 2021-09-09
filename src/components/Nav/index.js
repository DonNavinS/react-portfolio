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
            >
              About Me
            </button>
          </li>
          <li className="navBarLinks">
            <button
              onClick={() => {
                changePage(pages[1]);
              }}
            >
              Projects
            </button>
          </li>
          <li className="navBarLinks">
            <button
              onClick={() => {
                changePage(pages[2]);
              }}
            >
              Resume
            </button>
          </li>
          <li className="navBarLinks">
            <button
              onClick={() => {
                changePage(pages[3]);
              }}
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
