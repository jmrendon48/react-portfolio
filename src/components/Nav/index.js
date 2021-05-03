import React from "react";

function Nav() {
  function categorySelected() {
    console.log("hello");
  }

  return (
    <header>
      <h1>Joshua M. Rendon</h1>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About Me</a>
          </li>
          <li className="mx-2">
            <span onClick={categorySelected}>Portfolio</span>
          </li>
          <li className="mx-2">
            <span onClick={categorySelected}>Contact</span>
          </li>
          <li className="mx-2">
            <span onClick={categorySelected}>Resume</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
