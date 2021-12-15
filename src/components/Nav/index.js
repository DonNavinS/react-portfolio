import React from "react";

function Nav(props) {
  const { pages = [], changePage } = props;
  return (
    <div>
      <nav className="header">
        <ul className="navBar">
          <li className="navBarLinks">
            <span
              onClick={() => {
                changePage(pages[0]);
              }}
              className="buttons"
            >
              About Me
            </span>
          </li>
          <li className="navBarLinks">
            <span
              onClick={() => {
                changePage(pages[1]);
              }}
              className="buttons"
            >
              Projects
            </span>
          </li>
          <li className="navBarLinks">
            <span
              onClick={() => {
                changePage(pages[2]);
              }}
              className="buttons"
            >
              Resume
            </span>
          </li>
          <li className="navBarLinks">
            <span
              onClick={() => {
                changePage(pages[3]);
              }}
              className="buttons"
            >
              Contact
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
