import React from "react";

function Nav() {
  function categorySelected() {
    console.log("hello");
  }

  return (
    <header>
      <h1 className="white">Joshua M. Rendon</h1>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" className="white">About Me</a>
          </li>
          <li className="mx-2">
            <span onClick={categorySelected} className="white">Portfolio</span>
          </li>
          <li className="mx-2">
            <span onClick={categorySelected} className="white">Contact</span>
          </li>
          <li className="mx-2">
            <span onClick={categorySelected} className="white">Resume</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
