import React from "react";

function Nav(props) {
  const {
    aboutSelected,
    setAboutSelected,
    portfolioSelected,
    setPortfolioSelected,
  } = props;

  return (
    <header className="flex-row align-items">
      <h2 className="white">Joshua M. Rendon</h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              href="#about"
              className={`${!aboutSelected && "white"} ${aboutSelected && "navActive"}`}
              onClick={() => {
                setAboutSelected(true);
                setPortfolioSelected(false);
              }}
            >
              About Me
            </a>
          </li>
          <li className="mx-2">
            <span
              className={`${!portfolioSelected && "white"} ${portfolioSelected && "navActive"}`}
              onClick={() => {
                setAboutSelected(false);
                setPortfolioSelected(true);
              }}
            >
              Portfolio
            </span>
          </li>
          <li className="mx-2">
            <span className="white">Contact</span>
          </li>
          <li className="mx-2">
            <span className="white">Resume</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
